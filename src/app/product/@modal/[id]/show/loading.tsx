import React from "react";

const LoadingModal = () => {
  return (
    <div className="absolute top-0 inset-x-0">
      <div className="h-screen bg-gray-500/75 backdrop-blur"></div>
    </div>
  );
};

export default LoadingModal;
