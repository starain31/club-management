import React, { useState } from "react";
import { store } from "./membersSlice";
import { UpdateMember } from "../update-member/UpdateMember";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

export type MemberType = {
  name: string;
  born: string;
  bio: string;
  id: string;
};

const onDelete = ({ id }: { id: string }) => {
  console.log({ id });
  fetch("/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then(() => {
    store.dispatch({ type: "DELETE_MEMBER", payload: id });
  });
};

type MemberProps = { member: MemberType };

export function Member({ member }: MemberProps) {
  const [editActive, setEditActive] = useState(false);
  return (
    <ListItem alignItems="flex-start" data-testid="member">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={`/profile_picture/${member.id}`} />
      </ListItemAvatar>
      <ListItemText
        primary={member.name + " - " + member.born}
        secondary={member.bio}
      />
      <ListItemIcon>
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => onDelete({ id: member.id })}
        >
          <Delete />
        </IconButton>

        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => setEditActive(!editActive)}
        >
          <Edit />
        </IconButton>
        {editActive && <UpdateMember member={member} />}
      </ListItemIcon>
    </ListItem>
  );
}
