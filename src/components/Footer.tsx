import { useState, type FC } from "react";
import ArrowDownIcon from "../icons/arrow-down.svg";
import ArrowUpIcon from "../icons/arrow-up.svg";
import LightLogo from "../icons/logo-light.svg";
import { TextField } from "./TextField";
// импорт иконок
import InstagramIcon from "../icons/instagram.svg";
import TwitterIcon from "../icons/twitter.svg";
import FacebookIcon from "../icons/facebook-gray.svg";
import YoutubeIcon from "../icons/youtube.svg";

export const Footer: FC = function Footer() {
  // состояние, определяющее, нужно ли показывать полное меню или нет
  const [isFull, setIsFull] = useState<boolean>(true);
  return (
    <footer className={isFull ? "" : "closed" }>
      <img
        src={isFull ? ArrowDownIcon : ArrowUpIcon}
        onClick={() => setIsFull(!isFull)}
        className="arrow-icon"
        alt=""
      />
      <div className="footer-content">
        <div className="footer-top container">
          <div className="info">
            <div className="col">
              <img src={LightLogo} alt="" />
              <p className="description">
                VIRUSCRUSHER IT-компания
                <br />
                ООО "ТехноСфера" <br /> ул. Инновационная, д. 42, офис 318г.
                <br /> Павлодар, 140000 <br />
                Казахстан
              </p>
              <p className="contact">Связаться с нами</p>
              <p className="description">
                Телефон: +7 (383) 456-78-91 <br />
                Почта: viruscrusher_company@gmail.com
              </p>
            </div>
            <div className="links">
              <div className="col">
                <h4>Для дома</h4>
                <p className="link">Товары для дома</p>
                <p className="link">VirusCrusher Premium</p>
                <p className="link">Антивирус для Mac</p>
                <p className="link">Мобильная защита - Android</p>
                <p className="link">Мобильная защита - iOS</p>
                <p className="link">Бесплатная версия</p>
              </div>
              <div className="col">
                <h4>Для бизнеса</h4>
                <p className="link">Защита</p>
                <p className="link">Облачная целевая защита</p>
                <p className="link">Единая угроза</p>
                <p className="link">Менеджмент</p>
                <p className="link">Умный офис</p>
              </div>
              <div className="col">
                <h4>Наша компания</h4>
                <p className="link">О нас</p>
                <p className="link">Связаться с нами</p>
                <p className="link">Поддержка</p>
                <p className="link">Партнеры</p>
                <p className="link">Карьера</p>
                <p className="link">Награды и признания</p>
              </div>
              <div className="col">
                <h4>Дополнительно</h4>
                <p className="link">Политика конфиденциальности</p>
                <p className="link">Условия пользования</p>
                <p className="link">Борьба с пиратством</p>
                <p className="link">Политика возврата</p>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="content container">
          <div className="col">
            <h4>Поддержка</h4>
            <p className="description">
              Телефон: +7 (383) 456-78-91 <br />
              Почта: viruscrusher_company@gmail.com
            </p>
          </div>
          <div className="col">
            <h4>Подписка на новости</h4>
            <TextField
              typeof="email"
              placeholder="Введите свой Email"
              isAction
              btnText="Отправить"
            />
            <p>© 2025 VIRUSCRUSHER IT-компания. Все права защищены.</p>
          </div>
          <div className="col">
            <h4>Подписаться на новости</h4>
            <div className="icons">
              <img src={InstagramIcon} alt="" />
              <img src={TwitterIcon} alt="" />
              <img src={FacebookIcon} alt="" />
              <img src={YoutubeIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
