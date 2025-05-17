import type { FC } from "react";
import DarkLogo from "../icons/logo-dark.svg";
import GoogleLogo from "../icons/google-logo.svg";
import FacebookLogo from "../icons/facebook-logo.svg";
import { TextField } from "../components/TextField";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "../components/Button";

export const AuthPage: FC = function AuthPage() {
  const navigate = useNavigate();

  return <div className="form-container container">
    <img src={DarkLogo} alt="" />
    <form action="" className="form auth">
      <h3>Войдите в аккаунт VirusCrusher</h3>
      <TextField placeholder="Email"/>
      <TextField placeholder="Пароль" typeof="password" />
      <div className="row">
        <div>
          <p>Все еще нет аккаунта?</p>
          <Link to="/register">Создать аккаунт</Link>
        </div>
        <p>Забыли пароль?</p>
      </div>
      <Button text="Авторизоваться" mode="orange" onClick={() => navigate({to:"/profile"})} />
      <p>Или войдите с помощью</p>
      <div className="logos">
        <img src={GoogleLogo} alt="" />
        <img src={FacebookLogo} alt="" />
      </div>
    </form>
  </div>;
};
