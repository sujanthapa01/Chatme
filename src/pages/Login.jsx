// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react"; // Import useState hook

import BackButton from "../components/BackButton/BackButton";
import UnderDev from "./UnderDev.png";

export default function Login() {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0(); // Destructure loginWithRedirect, logout, and isAuthenticated from useAuth0
    console.log(user);
    // Define state for LoginButton component
    const [LoginButton, setLoginButton] = useState(() => {
        const handleLogin = () => {
            loginWithRedirect(); // Call loginWithRedirect when button is clicked
        };

        return <button onClick={handleLogin} className="my-[8rem] px-4 py-3 bg-white rounded hover:bg-green-400 duration-200">Login</button>;
    });

    const handleLogout = () => {
        logout(); // Call logout when button is clicked
    };

    // Conditionally render login or logout button based on isAuthenticated
    const renderAuthButton = () => {
        if (isAuthenticated) {
            return (
                <button
                    className="bg-red-400 px-4 py-3 rounded hover:bg-red-300 duration-200 text-white"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            );
        } else {
            return LoginButton;
        }
    };


    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gradient h-[22rem] w-[18rem] rounded-md">
                    <div className="flex justify-center flex-col items-center my-[1.2rem] gap-2">
                        {isAuthenticated && (
                            <img
                                className="w-[6rem] h-[6rem] rounded-2xl border-[.3rem] border-dashed"
                                src={user.picture}
                                alt="profile"
                            />
                        )}
                        {isAuthenticated && <h2>{user.name}</h2>}
                    </div>

                   {isAuthenticated && (
                     <div className="bg-white h-[6rem] mx-2 p-2 text-[.9rem] flex justify-center items-center flex-col rounded-md text-center" >
                     <div>
                         {isAuthenticated && (
                             <span className="text-grey tracking-wide flex flex-col">
                                 Username:{" "}
                                 <span className="text-black tracking-widest">
                                     @{user.nickname}
                                 </span>
                             </span>
                         )}
                     </div>
                     <div>
                         {isAuthenticated && (
                             <span className="tracking-wide flex flex-col">
                                 Email :{" "}
                                 <span className="text-black tracking-widest">
                                     {user.email}
                                 </span>
                             </span>
                         )}
                     </div>
                 </div>
                   )}
                    <div className="flex justify-center my-5 ">{renderAuthButton()}</div>
                </div>
            </div>

            <BackButton></BackButton>
        </div>
    );
}
