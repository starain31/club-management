import React from "react";

type MemberType = {
  name: string;
  id: string;
};

type MembersProps = {
  members: MemberType[];
};

export function Members({ members = []}: MembersProps) {
  return <div data-testid="members">
    {
      members.map( (member) =>
          <div key={member.id} data-testid='member'>Member</div>
      )
    }
  </div>;
}
