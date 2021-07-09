import React from "react";

export type MemberType = {
  name: string;
  id: string;
};

type MemberProps = { member: MemberType };

export function Member({ member }: MemberProps) {
  return <div data-testid="member">Member</div>;
}
