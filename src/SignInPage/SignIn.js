import React from "react";
import FormSignIn from "./FormSignIn/FormSignIn";

export default function SignIn() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400">
      <div className="w-2/3 p-5 rounded-lg shadow-lg bg-white">
        <FormSignIn />
      </div>
    </div>
  );
}
