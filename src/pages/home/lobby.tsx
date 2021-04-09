import { useContext } from "react";
import { UserContext } from '../../routing'


export const Lobby = () => {
  // eslint-disable-next-line
  const { user, userDispatch } = useContext(UserContext)

  return (
    <div>
      Your are Login user
      <div>{user.email}</div>
    </div>
  )
}
