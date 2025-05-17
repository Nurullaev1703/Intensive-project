import type { FC } from "react";
import DarkLogo from "../icons/logo-dark.svg";
import { TextField } from "../components/TextField";
import { Link } from "@tanstack/react-router";
import { Button } from "../components/Button";

export const RegisterPage: FC = function RegisterPage() {
  return (
    <div className="form-container container">
      <img src={DarkLogo} alt="" />
      <form action="" className="form register">
        <h3>Создайте аккаунт VirusCrusher</h3>
        <TextField placeholder="Email" />
        <TextField placeholder="Пароль" typeof="password" />
        <TextField placeholder="Повторить пароль" typeof="password" />
        <p className="text-center">
          Нажимая «Создать аккаунт», вы принимаете лицензионное соглашение
          VirusCrusher и Уведомление о конфиденциальности.
        </p>
        <Link to="/">
          <Button text="Создать аккаунт" mode="orange" />
        </Link>
      </form>
    </div>
  );
};
