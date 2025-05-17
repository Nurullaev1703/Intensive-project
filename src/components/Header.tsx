import type { FC } from "react";
import VirusLogo from "../icons/logo-dark.svg";
import ProfileIcon from "../icons/profile-fill.svg";
import { TextField } from "./TextField";
import { Link } from "@tanstack/react-router";
import { Button } from "./Button";

// Header имеет две вариации, учтем это
interface Props {
  isAuth?: boolean;
}

export const Header: FC<Props> = function Header({ isAuth = false }) {
  return (
    <header>
      <div className="sale">
        <p>
          Получите <span className="orange">40% скидку</span> на первую годовую
          подписку
        </p>
      </div>
      <div className="navigation container">
        <div className="row">
          <img src={VirusLogo} alt="" />
          <TextField placeholder="Поиск по странице" />
        </div>
        <nav>
          <div className="links">
            <Link to="/">Купить</Link>
            <Link to="/">Кастомизация</Link>
            <Link to="/">О нас</Link>
          </div>
          {isAuth ? (
            <Link to="/profile" className="profile">
              <img src={ProfileIcon} alt="" />
              <span>Профиль</span>
            </Link>
          ) : (
            <div className="nav-buttons">
              <Button text="Войти" />
              <Button text="Зарегистрироваться" mode="blue" />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
