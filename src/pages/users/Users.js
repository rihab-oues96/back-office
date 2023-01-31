import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/users/usersSlice";

import "./Users.scss";

const Users = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.users);
  const usersList = state.users;
  console.log(usersList);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <section className="users">
      {usersList.map((user) => {
        return (
          <div className="user">
            <img src={user.avatar_url} alt="user-img" />
            <p className="login">{user.login}</p>
            <p>{user.html_url}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Users;
