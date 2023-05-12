import React from "react";

const loading = () => {
  return (
    <section className="p-4 space-y-4">
      <div className="bg-gray-300 h-12 w-56 mx-auto rounded-2xl animate-pulse"></div>
      <div className="bg-gray-300 h-8 w-32 mx-auto rounded-2xl animate-pulse"></div>
      <div className="bg-gray-300 h-6 w-96 mx-auto rounded-2xl animate-pulse"></div>
      <div className="bg-gray-300 h-6 w-96 mx-auto rounded-2xl animate-pulse"></div>
      <div className="bg-gray-300 h-6 w-96 mx-auto rounded-2xl animate-pulse"></div>
    </section>
  );
};

export default loading;
