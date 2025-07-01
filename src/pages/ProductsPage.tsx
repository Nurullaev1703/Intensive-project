import { useEffect, useState, type FC } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import GradientBG from "../images/main-page/dark.png";
import BannerImage from "../images/products/banner.png";
import { ProductCard } from "../components/ProductCard";
import DownloadIcon from "../icons/products/download-file.svg";
import OpenIcon from "../icons/products/open-file.svg";
import UploadIcon from "../icons/products/upload.svg";
import type { ProductCardType } from "../types/types";

export const ProductsPage: FC = function ProductsPage() {
  const [productsData, setProductsData] = useState<ProductCardType[]>([])
  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch(
        "https://run.mocky.io/v3/b5ef66cb-0816-44ec-b73e-95f4cf527cd7"
      );
      const data = await res.json() as ProductCardType[];
      setProductsData(data);
    }
    fetchCards();
  },[])

  return (
    <section className="page">
      <Header />
      <div className="graphics container product-banner">
        <img src={BannerImage} alt="" className="background" />
        <img src={GradientBG} alt="" className="dimmer" />
        <div className="content">
          <h1>Теперь каждый может быть свободен от угроз.</h1>
          <p>Антивирус для всех и для всего</p>
        </div>
      </div>
      <div className="product-cards container">
        {productsData.map((card, index) => {
          return <ProductCard key={index} info={card} />;
        })}
      </div>
      <div className="advantages-section instruction">
        <div className="container">
          <h2>Как установить</h2>
          <p className="sub">
            Получите защиту прямо сейчас, выполнив эти 3 простых шага:
          </p>
          <div className="advantages">
            <div className="advantage">
              <img src={DownloadIcon} alt="" />
              <h4>Скачайте</h4>
              <p>
                Скачайте файл, нажав на <br /> данную иконку
              </p>
            </div>
            <div className="advantage">
              <img src={OpenIcon} alt="" />
              <h4>Откройте файл</h4>
              <p>
                Откройте скачанный файл <br /> и примите установку
              </p>
            </div>
            <div className="advantage">
              <img src={UploadIcon} alt="" />
              <h4>Установка файла</h4>
              <p>
                Запустите установщик и <br /> следуйте инструкции
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
