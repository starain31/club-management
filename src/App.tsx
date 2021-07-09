import React from "react";

type HeadingProps = { title?: string };

export function Heading({ title = 'Heading'}: HeadingProps) {
  return <h1>{title}</h1>;
}

function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}

export default App;
