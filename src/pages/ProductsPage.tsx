import type { FC } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import GradientBG from "../images/main-page/dark.png";
import BannerImage from "../images/products/banner.png";
import { CardsData } from "../data/cards";
import { ProductCard } from "../components/ProductCard";

export const ProductsPage: FC = function ProductsPage() {
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
        {CardsData.map((card, index) => {
          return <ProductCard key={index} info={card} />
        }) }
      </div>
      <Footer />
    </section>
  );
};
