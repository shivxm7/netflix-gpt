import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    // validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // if any string got then credentials is invalid
    if (message) return;

    // sign in / sign up
    if (!isSignIn) {
      // create user account
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/117083143?v=4",
          })
            .then(() => {
              // Profile updated!
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
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg"
          alt="body"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black/80 absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="text-3xl text-white font-bold py-4">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-2 p-3 w-full text-white bg-gray-500 rounded-xs"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="m-2 p-3 w-full text-white bg-gray-500 rounded-xs"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2 p-3 w-full bg-gray-500 rounded-xs text-white"
        />
        <p className="pt-2 text-red-500">{errorMessage}</p>
        <button
          className="mx-2 my-6 py-4 bg-red-700 text-white rounded-xs w-full cursor-pointer hover:bg-red-800"
          onClick={handleBtnClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already Register? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
