import { put, select, takeEvery } from "redux-saga/effects";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";

export const USER_ONBOARDED = "USER_ONBOARDED";
export const userOnboarded = () => ({
  type: USER_ONBOARDED,
});

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const userLoggedIn = (loggedIn: boolean) => ({
  type: USER_LOGGED_IN,
  loggedIn,
});

export type ClientAuthState = {
  onboarded: boolean;
  loggedIn: boolean;
  init: boolean;
};

export const clientAuthInitialState: ClientAuthState = {
  onboarded: false,
  loggedIn: false,
  init: true,
};

export type ClientAuthAction = {
  type: string;
  loggedIn: boolean;
  init: boolean;
};

export function clientAuth(
  state: ClientAuthState = clientAuthInitialState,
  action: ClientAuthAction
) {
  switch (action.type) {
    case USER_ONBOARDED: {
      return {
        ...state,
        onboarded: true,
      };
    }
    case USER_LOGGED_IN: {
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
    }
    default:
      return state;
  }
}

export function useClientAuth() {
  const dispatch = useAppDispatch();
  const _clientAuth = useAppSelector((state) => state.clientAuth);

  const dispatchOnboarded = () => {
    dispatch(userOnboarded());
  };

  const dispatchUserLoggedIn = () => {
    dispatch(userLoggedIn(true));
  };

  const dispatchUserLoggedOut = () => {
    dispatch(userLoggedIn(false));
  };

  return {
    ...(_clientAuth || {}),
    dispatchOnboarded,
    dispatchUserLoggedIn,
    dispatchUserLoggedOut,
  };
}
