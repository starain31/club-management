import { MemberType } from "./Member";
import { createStore } from "redux";

type MembersState = MemberType[];
type ActionType = AddMemberAction | DeleteMemberAction | UpdateMemberAction;

type AddMemberAction = {
  type: "ADD_MEMBER";
  payload: MemberType;
};

type DeleteMemberAction = {
  type: "DELETE_MEMBER";
  payload: string;
};

type UpdateMemberAction = {
  type: "UPDATE_MEMBER";
  payload: {
    id: string;
    name?: string;
    born?: string;
    bio?: string;
  };
};

export const members = (state: MembersState = [], action: ActionType) => {
  switch (action.type) {
    case "ADD_MEMBER":
      return [...state, action.payload];
    case "DELETE_MEMBER":
      return state.filter((member) => member.id !== action.payload);
    case "UPDATE_MEMBER":
      return state.map((member) => {
        return member.id === action.payload.id
          ? { ...member, ...action.payload }
          : member;
      });
    default:
      return state;
  }
};

export const store = createStore(members);
