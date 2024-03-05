/* eslint-disable @typescript-eslint/ban-types */
type Sport = String;
type Team = String;
export  interface preferance {
  selectedsport: Sport[];
  selectedteam: Team[];
}

  export const initialState:preferance = {
    selectedsport: [],
    selectedteam: []
};


export enum PreferAvailableAction {
    FETCH_PREFER_REQUEST = "FETCH_PREFER_REQUEST",
    FETCH_PREFER_SUCCESS = "FETCH_PREFER_SUCCESS",
    FETCH_PREFER_FAILURE = "FETCH_PREFER_FAILURE"
}

export type PreferActions =
    | { type: PreferAvailableAction.FETCH_PREFER_REQUEST }
    | { type: PreferAvailableAction.FETCH_PREFER_SUCCESS, payload:preferance }
    | { type: PreferAvailableAction.FETCH_PREFER_FAILURE, payload: string }

export type PreferDispatch = React.Dispatch<PreferActions>