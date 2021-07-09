import React from "react";

export type MemberType = {
  name: string;
  id: string;
};

export function Member() {
  return <div data-testid="member">Member</div>;
}
