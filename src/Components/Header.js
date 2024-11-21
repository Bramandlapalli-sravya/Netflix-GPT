import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/userSlice";
import { logo } from "../Utils/constants";
import { changeLanguage, toggleGPTSearchView } from "../redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.user);
  const gptSearch = useSelector((state) => state.gptSearch.gptSearch);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      // check the doc of firebase where it unsubscribe to remove onAuthStateChanged when dom unmount
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleClick = () => {
    signOut(Auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <div
      className={`px-8 py-4 text-white sticky top-0 z-10 ${
        users ? "bg-black" : "bg-gradient-to-b from-black"
      } w-full sticky top-0 flex flex-wrap justify-center sm:justify-between`}
    >
      <img className="w-56 h-14" src={logo} alt="netflix-logo" />
      {users && (
        <div className="flex gap-4 items-center">
          {gptSearch && (
            <select
              onChange={(e) => dispatch(changeLanguage(e.target.value))}
              className="px-3 py-2 bg-gray-200 text-black rounded text-sm"
            >
              <option value="en">English</option>
              <option value="tel">Telugu</option>
              <option value="hindi">Hindi</option>
            </select>
          )}
          <button
            className="px-3 py-2 bg-gray-200 text-black rounded text-sm"
            onClick={handleGPTSearch}
          >
            {gptSearch ? "Home" : "GPT Search"}
          </button>
          <p>{users?.displayName}</p>
          <img className="w-7 h-7" src={users?.photoURL} alt="login-logo" />
          <button onClick={handleClick}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
