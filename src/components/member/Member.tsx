import React from "react";
import { store } from "./membersSlice";

export type MemberType = {
  name: string;
  born: string;
  bio: string;
  id: string;
};

type MemberProps = { member: MemberType };

export function Member({ member }: MemberProps) {
  return (
    <div data-testid="member">
      <h1>{member.name}</h1>
      <h1>{member.born}</h1>
      <p>{member.bio}</p>
      <button
        onClick={() =>
          store.dispatch({ type: "DELETE_MEMBER", payload: member.id })
        }
      >
        DELETE
      </button>
    </div>
  );
}
