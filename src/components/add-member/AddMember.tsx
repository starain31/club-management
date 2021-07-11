import { ChangeEvent, useState } from "react";
import { store } from "../member/membersSlice";
import { Button, Grid, TextField } from "@material-ui/core";
import { MemberType } from "../member/Member";

export const AddMember = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState<any>(null);

  function changePictureState(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length !== 0) {
      setPicture(e.target.files[0]);
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const member = new FormData();
    member.append("picture", picture);
    member.append("name", name);
    member.append("born", born);
    member.append("bio", bio);

    setName("");
    setBio("");
    setBorn("");
    setPicture(null);

    fetch("/add", {
      method: "POST",
      body: member,
    })
      .then((res) => res.json())
      .then((member: MemberType) => {
        store.dispatch({
          type: "ADD_MEMBER",
          payload: member,
        });
      });
  };

  return (
    <form data-testid={`add-member`} onSubmit={handleSubmit}>
      <h2>Add Member</h2>
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
        <Grid item xs={12}>
          <input
            accept="image/*"
            id="picture"
            multiple
            type="file"
            onChange={changePictureState}
          />
        </Grid>
        <Grid item xs={3}>
          <Button type={`submit`} variant={`contained`} color={"primary"}>
            ADD MEMBER
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
