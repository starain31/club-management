import {MemberType} from "./Member";

type MembersState = MemberType[];
type ActionType = AddMemberAction | DeleteMemberAction;

type AddMemberAction = {
    type: 'ADD_MEMBER';
    payload: MemberType;
}

type DeleteMemberAction = {
    type: 'DELETE_MEMBER';
    payload: string;
}

export const members = (state: MembersState = [], action: ActionType) => {
    switch (action.type) {
      case "ADD_MEMBER":
          return [
              ...state,
              action.payload
          ]
      case "DELETE_MEMBER":
          return state.filter((member) => member.id !== action.payload);
        default:
            return state;
    }

}
