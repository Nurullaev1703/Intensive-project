import type { FC } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Banner1 from "../images/about-page/banner1.png";
import Banner2 from "../images/about-page/banner2.png";
import Companies from "../images/about-page/companies.png";
import Director from "../images/about-page/director.png";
import Award from "../icons/about-page/award-icon.svg";
import Cyber from "../icons/about-page/cybersecurity.svg";
import Certificate from "../icons/about-page/certificate.svg";

export const AboutUs: FC = function AboutUs() {
  return (
    <section className="page">
      <Header />
      <div className="hero">
        <div className="container">
          <div className="hero-block">
            <div className="hero-img-wrapper">
              <img src={Banner1} alt="" className="hero-img" />
            </div>
            <div className="hero-textOne">
              <h1>Свобода начинается с безопасости</h1>
              <p>
                Такой слоган нашей компании. Вы не можете быть свободными, пока
                чувствуете опасность в интернете, на своём компьютере или
                устройствах ваших родных людей
              </p>
            </div>
          </div>

          <div className="hero-block reverse">
            <div className="hero-img-wrapper">
              <img src={Banner2} alt="" className="hero-img" />
            </div>
            <div className="hero-text">
              <h2>
                Освобождение всех <br /> от страха угроз.
              </h2>
              <p>
                Чувствуйте себя в безопасности дома, на <br /> работе, листая
                страницы в интернете, <br /> смотря видео в домашней обстановке
                и <br /> листая ленту соцсетей.
              </p>
            </div>
          </div>
        </div>
        <div className="stats-wrapper">
          <div className="stats container">
            <h2>Сделано в Казахстане для всего мира</h2>
            <div className="stats-circles">
              <div className="circle">
                <strong>10+</strong>
                <span>
                  миллионов <br /> пользователей
                </span>
              </div>
              <div className="circle">
                <strong>27+</strong>
                <span>стран</span>
              </div>
              <div className="circle">
                <strong>40+</strong>
                <span>
                  млн. устройств <br /> защищено
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-block container">
        <div className="quote-text">
          <h3>
            “Моя цель — создать компанию по производству продуктов безопасности
            мирового класса в Казахстане”
          </h3>
          <p className="description">
            Крашик, как его ласково называют коллеги, написал свою первую
            антивирусную программу в 1997 году.
          </p>
          <p className="description">
            Всемирная паутина все еще была чудом, а вирусы были простыми
            программами, которые стирали данные или наносили ущерб ОС ваших ПК.
          </p>
          <p className="description">
            30 лет спустя VirusCrusher создал одну из самых успешных компаний в
            области ИТ-безопасности в Казахстане - VirusCrusher. При поддержке
            команды известных экспертов по кибербезопасности VirusCrusher стала
            пионером в разработке эффективных решений и продуктов для
            нейтрализации существующих и развивающихся цифровых угроз.
          </p>
          <p className="description">
            Лаборатория угроз VirusCrusher разработала собственные системы
            глубокого анализа угроз и круглосуточно работает над поддержанием
            своего фирменного движка безопасности на основе машинного обучения -
            Cerebro в актуальном состоянии.
          </p>
          <div className="ceoName">
            <span className="author">Д.Бумуржанов</span>
            <span className="ceo"> Founder & CEO</span>
          </div>
        </div>
        <img src={Director} alt="" className="ceo-img" />
      </div>

      <div className="advantages-section">
        <div className="container">
          <h2>Преимущества VirusCrusher</h2>
          <p className="sub">Миллионы клиентов доверяют нам</p>
          <div className="advantages">
            <div className="advantage">
              <img src={Award} alt="" />
              <h4>
                Самый лучший <br /> антивирусный <br /> бренд
              </h4>
              <div className="arrowClass">
                <a href="#">Читать подробнее </a>
                <span className="arrow"> → </span>
              </div>
            </div>
            <div className="advantage">
              <img src={Certificate} alt="" />
              <h4>
                Сертифицировано <br /> лучшими в <br /> отрасли
              </h4>
              <div className="arrowClass">
                <a href="#">Читать подробнее</a>
                <span className="arrow"> → </span>
              </div>
            </div>
            <div className="advantage">
              <img src={Cyber} alt="" />
              <h4>
                Отчёт о <br /> киберугрозах <br /> VirusCrusher
              </h4>
              <div className="arrowClass">
                <a href="#">Читать подробнее</a>
                <span className="arrow"> → </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partners container">
        <h2>Ассоциации и партнёрства</h2>
        <div className="partners-logos">
          <img src={Companies} alt="Partner 1" />
        </div>
      </div>

      <Footer />
    </section>
  );
};
