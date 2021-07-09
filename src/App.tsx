import React from "react";

export function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function App() {
  return (
    <div>
      <Heading title={`Club Management`} />
    </div>
  );
}

export default App;
