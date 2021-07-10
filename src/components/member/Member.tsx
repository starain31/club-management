import React, { useState } from "react";
import { store } from "./membersSlice";
import {UpdateMember} from "../update-member/UpdateMember";

export type MemberType = {
  name: string;
  born: string;
  bio: string;
  id: string;
};

type MemberProps = { member: MemberType };

export function Member({ member }: MemberProps) {
  const [editActive, setEditActive] = useState(false);
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
      <button onClick={() => setEditActive(!editActive)}>EDIT</button>
      {editActive && <UpdateMember member={member} />}
    </div>
  );
}
