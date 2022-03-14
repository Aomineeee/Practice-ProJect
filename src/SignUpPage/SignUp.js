import React from "react";
import FormSignUp from "./FormSignUp/FormSignUp";

export default function SignUp() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400">
      <div className="w-2/3 p-5 rounded-lg shadow-lg bg-white">
        <FormSignUp />
      </div>
    </div>
  );
}
