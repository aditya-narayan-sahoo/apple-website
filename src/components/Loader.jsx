import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="flex flex-col items-center">
          <div className="loader w-[10vw] h-[10vw] rounded-full border-4 border-t-4 border-t-blue-500 border-gray-300 animate-spin"></div>
          <span className="mt-4 text-white text-lg font-semibold">
            Loading...
          </span>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
