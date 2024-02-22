import React, { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import UnderDev from "./UnderDev.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Comments() {
  const { user } = useAuth0(); // Destructure loginWithRedirect, logout, and isAuthenticated from useAuth0

  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSendComment = () => {
    // Add the comment to the comments list
    setCommentsList([...commentsList, comment]);
    // Clear the input field after sending the comment
    setComment("");
  };

  return (
    <div className="flex flex-col justify-center items-center md:gap-12 xl:gap-12 ">
      <h1 className="text-3xl">comments</h1>
      <main className=" flex flex-col justify-center items-center gap-2 w-screen">
        {/* Display the comments */}
        <div className="commentBox flex flex-col gap-2 h-[35rem] overflow-scroll scroll-hidden w-full md:w-[50rem] xl:w-[60rem] p-2 ">
          {commentsList.map((comment, index) => (
            <div key={index} className="text-black flex items-center gap-2  ">
              <div>
                <img
                  className="w-[3rem] rounded-full"
                  src={user.picture}
                  alt=""
                  srcset=""
                />
              </div>
              {user.nickname} <span>:</span>
              {comment}
            </div>
          ))}
        </div>

        <div className="msgInput flex gap-1 mb-4">
          {/* Input field for entering comments */}
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Type your comment..."
            className="bg-stone-200 rounded-md px-2 py-[5px]"
          />
          {/* Button to and the comment */}
          <button
            onClick={handleSendComment}
            className="bg-blue-400 p-2 py-[5px] rounded-md"
          >
            Send
          </button>
        </div>
      </main>
      <div>
        <BackButton className=""></BackButton>
      </div>
    </div>
  );
}
