import React from "react";
import { Heading } from "./Heading";
import { Members } from "./Members";

function App() {
  return (
    <div>
      <Heading title={`Club Management`}/>
      <Members />
    </div>
  );
}

export default App;
