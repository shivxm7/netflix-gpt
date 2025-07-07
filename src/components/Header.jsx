import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateHome = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsbubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            uid: uid,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsbubscribe when component unmount
    return () => unsbubscribe();
  }, []);

  return (
    <div className="absolute w-full px-0 md:px-8 md:py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        onClick={navigateHome}
        className="w-30 md:w-44 "
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center m-2">
          <button
            onClick={handleGptSearchClick}
            className="bg-purple-800 py-2 px-3 md:py-2 md:px-4 rounded-md mx-4 text-sm md:text-lg text-white cursor-pointer"
          >
            GPT Search
          </button>

          <img
            className="w-8 md:w-12 rounded-md md:rounded-3xl"
            src={user.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleLogout}
            className="bg-red-500 py-2 px-3 md:py-2 md:px-4 rounded-md text-sm md:text-lg m-2 hover:bg-red-700 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
