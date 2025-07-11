import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constant";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGptSearchView } from "../store/gptSlice";
import { auth } from "../firebase/firebase";
import { Search } from "lucide-react";

const Header = () => {
  const [displaySearch, setdisplaySearch] = useState(true);

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
    setdisplaySearch(false);
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
    <div className="absolute w-full px-0 md:p-0 md:pr-8 md:py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        onClick={navigateHome}
        className="w-35 h-20 md:w-80 md:h-20"
        src={LOGO}
        alt="logo"
      />

      <div className="text-white ">
        {" "}
        <Link className="mx-4 hover:text-[#ababab]" to={"/"}>
          Home
        </Link>
        <Link className="mx-4 hover:text-[#ababab]" to={"/"}>
          TV Shows
        </Link>
        <Link className="mx-4 hover:text-[#ababab]" to={"/"}>
          Movies
        </Link>
        <Link className="mx-4 hover:text-[#ababab]" to={"/"}>
          New & Popular
        </Link>
      </div>

      {user && (
        <div className="flex items-center m-2">
          {displaySearch && (
            <div
              onClick={handleGptSearchClick}
              className="w-40 flex items-center gap-2 p-2 border py-2 md:py-2 md:px-4 rounded-md mx-2 text-sm md:text-lg text-white cursor-pointe"
            >
              <Search className="text-gray-600" />
              <input
                type="text"
                placeholder="AI Search"
                className="outline-none w-full"
              />
            </div>
          )}

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
