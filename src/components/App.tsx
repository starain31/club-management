import React from "react";
import { Heading } from "./heading/Heading";
import { Members } from "./member/Members";
import { store } from "./member/membersSlice";
import { AddMember } from "./add-member/AddMember";

function App() {
  console.log(store.getState());
  return (
    <div>
      <Heading title={`Club Management`} />
      <Members members={store.getState()} />
      <AddMember />
    </div>
  );
}

export default App;
