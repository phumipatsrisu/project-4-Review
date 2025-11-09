import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import Review from "./components/Review";

const App = () => {
  return (
    <div className="">
      <main className="flex justify-center flex-1">
        <section className="font-semibold text-2xl border-b-4 border-blue-500">
          Our Reviews
        </section>
      </main>
      <Review />
    </div>
  );
};

export default App;
