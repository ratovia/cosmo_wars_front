import { useReducer } from 'react'

export interface dataAction {
  type: "registration" | "sign_in",
  payload: {
    email?: string,
    accessToken?: string,
    client?: string,
    uid?: string,
  }
}
export interface User {
  email: string,
  accessToken: string,
  client: string,
  uid: string,
  authenticated: boolean,
}

export const useUserReducer = (): [User, ({ type, payload }: dataAction) => void] => {
  const initialData: User = {
    email: "",
    accessToken: "",
    client: "",
    uid: "",
    authenticated: false,
  }

  const reducer = (state: User, action: dataAction) => {
    switch (action.type) {
      case "registration":
        localStorage.setItem('auth', JSON.stringify({
          accessToken: action.payload.accessToken || state.accessToken,
          client: action.payload.client || state.client,
          uid: action.payload.uid || state.uid,
        }));
        return {
          ...state,
          email: action.payload.email || state.email,
          accessToken: action.payload.accessToken || state.accessToken,
          client: action.payload.client || state.client,
          uid: action.payload.uid || state.uid,
          authenticated: true as boolean || state.authenticated,
        }
      case "sign_in":
        return {
          ...state,
          email: action.payload.email || state.email,
          accessToken: action.payload.accessToken || state.accessToken,
          client: action.payload.client || state.client,
          uid: action.payload.uid || state.uid,
          authenticated: true as boolean || state.authenticated,
        }
    }
  }

  const [user, userDispatch] = useReducer(reducer, initialData)
  return [user, userDispatch]
}
