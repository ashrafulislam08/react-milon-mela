import React from "react";
import { useAuthContext } from "../hook/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h2>Hi, {user.email}</h2>
    </div>
  );
};

export default Profile;
