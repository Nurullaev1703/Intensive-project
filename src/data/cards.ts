import PremiumSecurity from "../images/products/premium.png";
import TotalSecurity from "../images/products/total security.png";
import UltimateSecurity from "../images/products/ultimate security.png";
import IOSOImage from "../images/products/ios.png";
import AndroidImage from "../images/products/android.png";
import MacImage from "../images/products/mac.png";
import type { ProductCardType } from "../types/types";

export const CardsData: ProductCardType[] = [
  {
    image: PremiumSecurity,
    title: "Премиум Антивирус",
    description: "Защита вашего компьютера от вирусов",
    salePrice: 89,
    price: 49,
    advantages: [
      "Обнаружение угроз",
      "Обновление продукта",
      "Инструменты настройки ПК",
      "Консультант по Wi-Fi",
    ],
    platforms: ["windows"],
  },
  {
    image: TotalSecurity,
    title: "Полная безопасность",
    description: "Полная защита от всех интернет-угроз",
    salePrice: 99,
    price: 59,
    advantages: [
      "Обнаружение угроз",
      "Расширенная безопасность ПК",
      "Обновление продукта",
      "Интернет-защита",
      "Резервное копирование",
      "Консультант по Wi-Fi",
    ],
    platforms: ["windows"],
  },
  {
    image: UltimateSecurity,
    title: "Максимальная безопасность",
    description:
      "Наши лучшие приложения для обеспечения безопасности, " +
      "конфиденциальности и производительности в одном пакете",
    salePrice: 119,
    price: 89,
    advantages: [
      "Обнаружение угроз",
      "Расширенная безопасность ПК",
      "Обновление продукта",
      "Интернет-защита",
      "Конфиденциальность",
      "Инструменты настройки ПК",
      "Мобильная защита",
      "Резервное копирование",
      "Консультант по Wi-Fi",
    ],
    platforms: ["windows", "android", "mac", "ios"],
  },
  {
    image: MacImage,
    title: "Антивирус для Mac",
    description: "Защита ваших устройств на MacOs",
    salePrice: 49,
    price: 39,
    advantages: [],
    platforms: [],
  },
  {
    image: IOSOImage,
    title: "Антивирус для ios",
    description: "Защита ваших Iphone и Ipad",
    salePrice: 89,
    price: 59,
    advantages: [],
    platforms: [],
  },
  {
    image: AndroidImage,
    title: "Антивирус для android",
    description: "Защита ваших устройств на Android",
    salePrice: 79,
    price: 49,
    advantages: [],
    platforms: [],
  },
];
