import React from "react";
import load  from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center mt-15">
      <img src={load} alt=""  width={"300px"}/>
    </div>
  );
};

export default Loading;
