import React from "react";

type HeadingProps = { title?: string };

export function Heading({ title = "Heading" }: HeadingProps) {
  return <h1 data-testid='heading'>{title}</h1>;
}
