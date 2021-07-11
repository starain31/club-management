import React from "react";
import { Member, MemberType } from "./Member";
import { List } from "@material-ui/core";

type MembersProps = {
  members?: MemberType[];
};

export function Members({ members = [] }: MembersProps) {
  return (
    <div>
      <h2>Members</h2>
      <List data-testid="members">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </List>
    </div>
  );
}
