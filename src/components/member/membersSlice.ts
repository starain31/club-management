import {MemberType} from "./Member";

type MembersState = MemberType[];
type ActionType = {
    type: string;
    payload?: MemberType;
}

export const members = (state: MembersState, action: ActionType) => {
    return [
        ...state,
        action.payload
    ]
}
