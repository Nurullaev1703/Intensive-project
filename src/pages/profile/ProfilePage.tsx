import type { FC } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import ProfileImage from "../../images/profile.png";
import { Button } from "../../components/Button";
import UserActiveIcon from "../../icons/profile-orange.svg"
import DownloadIcon from "../../icons/upload-icon.svg"
import DevicesIcon from "../../icons/computer-icon.svg"
import PaymentIcon from "../../icons/credit-card.svg"
import { TextField } from "../../components/TextField";
import { CustomSwitch } from "../../components/CustomSwitch";

export const ProfilePage: FC = function ProfilePage() {
  return (
    <section className="page">
      <Header isAuth />
      <div className="profile-info">
        <div className="profile">
          <img src={ProfileImage} alt="" />
          <h3>@Пользователь123</h3>
          <Button text="Выйти" mode="secondary" />
          <Button text="Сохранить изменения" mode="orange" />
        </div>
        <div className="info">
          <ul className="links">
            <li>
              <img src={UserActiveIcon} alt="" />
              <span>Пользователь</span>
            </li>
            <li>
              <img src={DownloadIcon} alt="" />
              <span>Скачать</span>
            </li>
            <li>
              <img src={DevicesIcon} alt="" />
              <span>Устройства</span>
            </li>
            <li>
              <img src={PaymentIcon} alt="" />
              <span>Подписки</span>
            </li>
          </ul>
          <form action="">
            <h3>Данные об аккаунте</h3>
            <TextField placeholder="Имя пользователя" />
            <TextField placeholder="Изменить пароль" />
            <p className="password">Восстановить пароль</p>
            <h3>Уведомления</h3>
            <div className="row news">
              <p>
                Я хочу получать новости, акции и уведомления от VirusCrusher
              </p>
              <CustomSwitch />
            </div>
            <div className="row">
              <p>Уведомлять меня об обновлениях и новых продуктах</p>
              <CustomSwitch />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};
