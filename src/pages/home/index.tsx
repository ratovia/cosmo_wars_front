import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/login">ログイン</Link>
      <Link to="/registration">新規作成</Link>
    </div>
  );
};
