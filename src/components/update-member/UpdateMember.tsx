import React, { useState } from "react";
import { MemberType } from "../member/Member";
import { store } from "../member/membersSlice";

export function UpdateMember({ member }: { member: MemberType }) {
  const [name, setName] = useState(member.name);
  const [born, setBorn] = useState(member.born);
  const [bio, setBio] = useState(member.bio);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    store.dispatch({
      type: "UPDATE_MEMBER",
      payload: { id: member.id, name, bio, born },
    });

    setName("");
    setBorn("");
    setBio("");
  };

  return (
    <form data-testid={`add-member`} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type={`text`}
          id={`name`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="born">
        Born
        <input
          type={`text`}
          id={`born`}
          value={born}
          onChange={(e) => setBorn(e.target.value)}
        />
      </label>

      <label htmlFor="bio">
        Born
        <textarea
          id={`bio`}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>

      <input type={`submit`} value={`UPDATE`} />
    </form>
  );
}
