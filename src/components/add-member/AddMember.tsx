import { useState } from "react";
import { store } from "../member/membersSlice";
import { Button, Grid, TextField } from "@material-ui/core";

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
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TextField
            id="name"
            label="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            type={`date`}
            id="born"
            label="Born"
            value={born}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setBorn(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="bio"
            label="Bio"
            multiline
            value={bio}
            variant="outlined"
            required
            onChange={(e) => setBio(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button type={`submit`} color={"primary"}>
            ADD MEMBER
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
