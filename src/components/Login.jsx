import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { BG_IMAGE, USER_AVATAR } from "../utils/constant";
import { addUser } from "../store/userSlice";
import { auth } from "../firebase/firebase";
import Footer from "./Footer";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
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
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // console.log("USER_AVATAR", USER_AVATAR);
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  uid: uid,
                  photoURL: photoURL,
                })
              );
              // console.log("USER_AVATAR", USER_AVATAR);
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
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(addUser({ uid, email, displayName, photoURL }));

          // console.log(user);
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
          className="h-screen md:w-full md:h-full object-cover "
          src={BG_IMAGE}
          alt="body"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black/50 absolute py-4 px-2 md:p-12 w-10/12 md:w-3/12 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="text-2xl md:text-3xl text-white font-medium py-2 md:py-4">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="mt-2 p-2 md:m-2 md:p-3 w-full text-white bg-[#333333] rounded-xs"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="mt-2 p-2 md:m-2 md:p-3 w-full text-white bg-[#333333] rounded-xs"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 md:m-2 md:p-3 w-full bg-[#333333] rounded-xs text-white"
        />
        <p className="pt-2 text-red-500">{errorMessage}</p>
        <button
          className="my-1 py-3 md:mx-2 md:my-2 md:py-4 bg-red-700 text-white rounded-xs w-full cursor-pointer hover:bg-red-800"
          onClick={handleBtnClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn ? (
          <>
            <p className="mt-2 text-[#808080] text-sm md:p-2 inline-block cursor-pointer">
              New to Prompt Flix?
            </p>
            <p
              onClick={toggleSignIn}
              className="inline-block text-sm hover:underline cursor-pointer"
            >
              Sign up now
            </p>
          </>
        ) : (
          <>
            <p className="mt-2 text-[#808080] text-sm md:p-2 inline-block cursor-pointer">
              Already have an account? ?
            </p>
            <p
              onClick={toggleSignIn}
              className="inline-block text-sm hover:underline cursor-pointer"
            >
              Sign in Now
            </p>
          </>
        )}
      </form>
      <Footer />
    </div>
  );
};

export default Login;
