import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import { useAuth0 } from "@auth0/auth0-react";
import { getDatabase, ref, push, onValue, get, set } from "firebase/database";
import app from "../../firebaseConfig.jsx";

async function fetchComments() {
  const db = getDatabase(app);
  const commentsRef = ref(db, "comments");

  try {
    const snapshot = await get(commentsRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Convert the data object into an array of comments
      const commentsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      // Sort comments by timestamp in descending order
      commentsArray.sort((a, b) => b.Timestamp - a.Timestamp);
      return commentsArray;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

export default function Comments() {
  const { user, isAuthenticated } = useAuth0();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments().then((commentsData) => {
      setComments(commentsData);
    });
  }, []);

  useEffect(() => {
    const db = getDatabase(app);
    const commentsRef = ref(db, "comments");
    // Listen for changes to the 'comments' node in real-time
    onValue(commentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const commentsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        commentsArray.sort((a, b) => b.Timestamp - a.Timestamp);
        setComments(commentsArray);
      } else {
        setComments([]);
      }
    });
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSendComment = async () => {
    try {
      if (comment.trim() === '') {
        alert('Input cannot be empty. Please enter input.');
        return; // Return early if comment is empty
      }

      const db = getDatabase(app);
      const commentRef = push(ref(db, "comments"));
      await set(commentRef, {
        Username: user.name,
        Nickname: user.nickname,
        Email: user.email,
        Picture: user.picture,
        Comment: comment,
        Timestamp: Date.now(),
      });
      setComment("");
      console.log("Comment saved successfully!");
    } catch (error) {
      console.error("Error saving comment:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center overflow-x-hidden items-center md:gap-12 xl:gap-12">
      <h1 className="text-3xl py-2">Comments</h1>

      {isAuthenticated ? (
        <main className="flex flex-col justify-start h-screen items-center gap-2 w-screen">
          <div className="commentBox flex flex-col justify-end gap-1 h-[75%] w-full md:w-[50rem] xl:w-[60rem] px-2">
            <div className="overflow-scroll overflow-x-hidden flex flex-col-reverse gap-2">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="text-black flex items-center gap-2 "
                >
                  <div>
                    <img
                      className="w-[1.9rem] rounded-full"
                      src={comment.Picture}
                      alt="Profile"
                    />
                  </div>
                  <div className="text-black flex gap-4">
                    <div className="flex gap-2 flex-col-reverse">
                      <p> {comment.Username}</p>
                      {/* <p> {new Date(comment.Timestamp).toLocaleString()}</p> */}
                    </div>
                    <span>
                      <p>{comment.Comment}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="msgInput flex gap-1 mb-4">
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Type your comment..."
              className="bg-stone-200 rounded-md px-2 py-[5px]"
            />
            <button
              onClick={handleSendComment}
              className="bg-blue-400 p-2 py-[5px] rounded-md"
            >
              Send
            </button>
          </div>
          <div>
            <BackButton className="" />
          </div>
        </main>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 font-bold text-3xl >Please Login For Comment!</h1>
          <div>
            <BackButton className="" />
          </div>
        </div>
      )}
    </div>
  );
}
