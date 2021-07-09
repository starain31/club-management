import React from "react";
import { Heading } from "./heading/Heading";
import { Members } from "./member/Members";

function App() {
  return (
    <div>
      <Heading title={`Club Management`}/>
      <Members />
    </div>
  );
}

export default App;
