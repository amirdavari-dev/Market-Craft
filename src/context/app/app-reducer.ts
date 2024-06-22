import { AppReducerActionType, AppReducerType } from "@/types/appContext";

const appReducer = (
  state: AppReducerType,
  action: AppReducerActionType
): AppReducerType => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
