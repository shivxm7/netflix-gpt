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
  const toggleSignIn = () => setisSignIn(!isSignIn);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          }).then(() => {
            const { uid, displayName, email, photoURL } = auth.currentUser;
            dispatch(addUser({ displayName, email, uid, photoURL }));
          });
        })
        .catch((error) => setErrorMessage(error.code + " " + error.message));
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => setErrorMessage(error.code + " " + error.message));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Background Section */}
      <div className="relative flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover -z-10"
          src={BG_IMAGE}
          alt="background"
        />
        <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/50 py-4 px-2 md:p-12 w-10/12 md:w-3/12 mx-auto mt-36 text-white"
        >
          <h1 className="text-3xl font-medium py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full bg-[#333333] rounded text-white"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-3 my-2 w-full bg-[#333333] rounded text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-[#333333] rounded text-white"
          />

          <p className="pt-2 text-red-500 text-sm">{errorMessage}</p>

          <button
            className="py-3 my-4 bg-red-700 hover:bg-red-800 w-full rounded"
            onClick={handleBtnClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm text-[#808080]">
            {isSignIn ? "New to Prompt Flix?" : "Already have an account?"}{" "}
            <span
              onClick={toggleSignIn}
              className="text-white hover:underline cursor-pointer"
            >
              {isSignIn ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
