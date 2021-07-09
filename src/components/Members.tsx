import React from "react";
import { Member, MemberType } from "./Member";

type MembersProps = {
  members: MemberType[];
};

export function Members({ members = [] }: MembersProps) {
  return (
    <div data-testid="members">
      {members.map((member) => (
        <Member key={member.id} />
      ))}
    </div>
  );
}
