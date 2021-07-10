import { useState } from "react";
import { store } from "../member/membersSlice";

export const AddMember = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    store.dispatch({
      type: "ADD_MEMBER",
      payload: { id: String(store.getState().length), name, bio, born },
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
        <input
          type={`text`}
          id={`bio`}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>

      <input type={`submit`} value={`ADD`} />
    </form>
  );
};
