import type { FC } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import GradientBG from "../images/main-page/dark.png";
import DevicesImage from "../images/main-page/devices.png";
import DontStopImage from "../images/main-page/dont-stop.png";
import Ideas1 from "../images/main-page/ideas-1.png";
import Ideas2 from "../images/main-page/ideas-2.png";
import Ideas3 from "../images/main-page/ideas-3.png";
import MainBanner1 from "../images/main-page/main-banner-1.png";
import MainBanner2 from "../images/main-page/main-banner-2.png";
import PartnersImage from "../images/main-page/partners.png";
import SectionImage from "../images/main-page/section.png";
import { Button } from "../components/Button";

export const MainPage: FC = function MainPage() {
  return (
    <section className="page">
      <Header />
      <div className="main-banners container">
        <div className="banner">
          <div className="text">
            <h1>
              Попробуйте <br />
              <span>Наш продукт</span>
            </h1>
            <p className="context">
              Бесплатный антивирус для всех. <br /> Скачайте прямо сейчас
            </p>
            <div className="row">
              <Button text="Попробовать" mode="info" />
              <Button text="Купить сейчас" mode="orange" />
            </div>
            <img src={PartnersImage} alt="" />
          </div>
          <img src={MainBanner1} alt="" />
        </div>
        <div className="banner">
          <img src={MainBanner2} alt="" />
          <div className="info-text">
            <p className="description">
              Выбирайте <span>Virus</span>Crusher. Выбирайте лучшее.
            </p>
            <p className="title">
              Заслуженный лидер <span>в Казахстане</span>. Более 10 миллионов
              скачиваний и довольных клиентов
            </p>
            <Button text="Купить сейчас" mode="orange" />
          </div>
        </div>
      </div>
      <div className="choose container">
        <h2>
          Извлеките максимум пользы из наших идей, чтобы лучше защитить себя и
          свой бизнес
        </h2>
        <div className="cards">
          <div className="card">
            <img src={Ideas1} alt="" />
            <p>Персональная защита</p>
          </div>
          <div className="card">
            <img src={Ideas2} alt="" />
            <p>Настраиваемые функции</p>
          </div>
          <div className="card">
            <img src={Ideas3} alt="" />
            <p>Корпоративная защита</p>
          </div>
        </div>
      </div>
      <div className="graphics container">
        <img src={DontStopImage} alt="" className="background" />
        <img src={GradientBG} alt="" className="dimmer" />
        <div className="top-section">
          <div className="content">
            <h1>Никогда не тормозит</h1>
            <Button text="Попробовать" mode="info" />
          </div>
        </div>
        <img src={SectionImage} alt="" className="photo" />
      </div>
      <div className="total-security container">
        <img src={DevicesImage} alt="" />
        <div className="text">
          <h2>Полная защита всех ваших устройств</h2>
          <p>
            Наша самая передовая защита — это ваша самая надежная защита от
            вирусов, программ-вымогателей, угроз нулевого дня, уязвимостей Wi-Fi
            и многого другого.
          </p>
          <Button text="Получить защиту" mode="orange" />
        </div>
      </div>
      <Footer />
    </section>
  );
};
