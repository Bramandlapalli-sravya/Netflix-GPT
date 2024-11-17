import React from "react";

const checkValidData = (email, password, fullname = "") => {
  console.log(email, "emaillll", password, "passworddd", fullname.length, "length");

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  // Only check fullname if validateFullname is true
    if(fullname.length > 0){
    const isFullnameValid = fullname.length >= 8;
    if (!isFullnameValid) return "Fullname should contain at least 8 characters";
    }
  

  return null;
};

export default checkValidData;
