import React from "react";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <main className="h-screen flex items-center justify-center ">
        <form className="bg-white flex rounded-lg w-1/2 font-latoRegular"></form>
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-red-200">Let's get started 👋</h1>
          <p>Please put down your information for futher appointment</p>
        </div>
      </main>
    </div>
  );
}

export default App;
