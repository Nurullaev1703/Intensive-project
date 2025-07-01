import type { FC } from "react";
import { CustomSwitch } from "../components/CustomSwitch";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Picker from "../images/custompage/picker.png";
import Android from "../icons/anroid.svg";
import IOS from "../icons/apple.svg";
import Windows from "../icons/windows.svg";
import MacOS from "../icons/macos.svg";
import { Button } from "../components/Button";


export const Customer: FC = function Customer() {
  return (
    <section className="protection">
      <Header isAuth/>
      <div className="protection-banner">
        <div className="protection-banner__text">
          <h1>
            Спроектируйте <br /> защиту, которая <br /> подойдет именно вам
          </h1>
        </div>
      </div>
      <div className="allforback">
        <div className="protection-content">
          <div className="background">
            <h2 className="title-orange">Настройте свою защиту</h2>
            <div className="platform-tabs">
              <div className="tabs">
                <button className="active">Все платформы</button>
              </div>
              <div className="tabs">
                <img src={Windows} alt="" />
                <button>Windows</button>
              </div>
              <div className="tabs">
                <img src={MacOS} alt="" />
                <button>Mac</button>
              </div>
              <div className="tabs">
                <img src={Android} alt="" />
                <button>Android</button>
              </div>
              <div className="tabs">
                <img src={IOS} alt="" />
                <button>iOS</button>
              </div>
            </div>
          </div>
          <div className="container">
            <table className="config-table">
              <thead>
                <tr>
                  <th>Настройки</th>
                  <th>Детали</th>
                  <th>Выбор</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Обнаружение угроз</td>
                  <td>Защищаем вас от интернет-угроз</td>
                  <td>
                    <CustomSwitch defaultChecked={false} />
                  </td>
                </tr>
                <tr>
                  <td>Расширенная безопасность ПК</td>
                  <td>Повысите свой барьер против вредоносных программ</td>
                  <td>
                    <CustomSwitch />
                  </td>
                </tr>
                <tr>
                  <td>Обновление продукта</td>
                  <td></td>
                  <td>
                    <CustomSwitch defaultChecked={false} />
                  </td>
                </tr>
                <tr>
                  <td>Интернет-защита</td>
                  <td>Защитите свои вкладки при использовании сетей</td>
                  <td>
                    <CustomSwitch />
                  </td>
                </tr>
                <tr>
                  <td>Веб-защита</td>
                  <td>Защита в пути</td>
                  <td>
                    <CustomSwitch />
                  </td>
                </tr>
                <tr>
                  <td>Родительский контроль</td>
                  <td>Выберите, к чему ваши дети будут иметь доступ</td>
                  <td>
                    <CustomSwitch defaultChecked={false} />
                  </td>
                </tr>
                <tr>
                  <td>Инструменты для настроек ПК</td>
                  <td></td>
                  <td>
                    <CustomSwitch />
                  </td>
                </tr>
                <tr>
                  <td>Резервное копирование данных</td>
                  <td>Защитите то, что вы построили</td>
                  <td>
                    <CustomSwitch defaultChecked={false} />
                  </td>
                </tr>
                <tr>
                  <td>Мобильная защита</td>
                  <td>Защитите мобильные устройства в приложениях</td>
                  <td>
                    <CustomSwitch />
                  </td>
                </tr>
                <tr>
                  <td>Консультант по Wi-Fi</td>
                  <td></td>
                  <td>
                    <CustomSwitch />
                  </td>
                </tr>
                <tr>
                  <td>Пожизненный срок действия</td>
                  <td></td>
                  <td>
                    <CustomSwitch defaultChecked={false} />
                  </td>
                </tr>
                <tr>
                  <td>Поддерживаемые платформы</td>
                  <td className="imgGod" colSpan={1}>
                    <img src={Android} alt="" />
                    <img src={IOS} alt="" />
                    <img src={MacOS} alt="" />
                    <img src={Windows} alt="" />
                  </td>
                  <td>
                    <CustomSwitch defaultChecked={false} />
                  </td>
                </tr>
                <tr className="final-info-row">
                  <td></td>
                  <td className="info-text">
                    <p>Более 10 мил. клиентов</p>
                    <p>30 дней гарантия возврата средств</p>
                    <p>Доступно для Mac, Windows, IOS и Android</p>
                  </td>
                  <td className="info-slider">
                    <img src={Picker} alt="" />
                    <div className="price">200$</div>
                    <Button text="Купить" mode="orange"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
