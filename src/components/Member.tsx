import React from "react";

export type MemberType = {
  name: string;
  id: string;
};

type MemberProps = { member: MemberType };

export function Member({ member }: MemberProps) {
  return (
    <div data-testid="member">
      <h1>{member.name}</h1>
    </div>
  );
}
