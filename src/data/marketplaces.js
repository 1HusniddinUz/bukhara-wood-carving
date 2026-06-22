import ozonIcon from "../assets/marketplaces-icon/ozon.png";
import wildberriesIcon from "../assets/marketplaces-icon/wb.png";
import yandexIcon from "../assets/marketplaces-icon/yandexmarket.png";
import uzumIcon from "../assets/marketplaces-icon/uzummarket.png";
import woodBox from "../assets/images/9.png";

export const marketplaces = [
  {
    id: 1,
    slug: "ozon",
    name: "Ozon",
    logo: ozonIcon,
    accent: "#1f63ff",
    description: {
      uz: "Premium yog‘och buyumlarni Ozon orqali ko‘rish va xarid qilish imkoniyati.",
      ru: "Возможность просматривать и покупать премиальные деревянные изделия через Ozon.",
      en: "Explore and purchase premium wooden products through Ozon.",
      fr: "Découvrez et achetez des produits en bois premium via Ozon.",
      tr: "Premium ahşap ürünleri Ozon üzerinden inceleyin ve satın alın.",
    },
    products: [
      {
        id: 1,
        title: "O‘yma yog‘och panel",
        price: "1 250 000 so‘m",
        image: "https://ir.ozone.ru/s3/multimedia-1-g/wc1000/11560131520.jpg",
        url: "https://uz.ozon.com/product/lavh-podstavka-dlya-knig-ruchnaya-rabota-4743217137/?oos_search=false&__rr=1",
      },
      {
        id: 2,
        title: "Premium yog‘och quti",
        price: "720 000 so‘m",
        image: "https://ir.ozone.ru/s3/multimedia-1-t/wc1000/11538422561.jpg",
        url: "https://uz.ozon.com/product/taburet-1-sht-4735176734/?oos_search=false",
      },
      {
        id: 3,
        title: "Naqshli oyna romi",
        price: "1 900 000 so‘m",
        image: "https://ir.ozone.ru/s3/multimedia-1-6/wc1000/11584588794.jpg",
        url: "https://uz.ozon.com/product/klassicheskaya-shkatulka-dlya-ukrasheniy-4751528810/?oos_search=false",
      },
    ],
  },
  {
    id: 2,
    slug: "wildberries",
    name: "Wildberries",
    logo: wildberriesIcon,
    accent: "#b114b8",
    description: {
      uz: "Milliy ruhdagi dekor va sovg‘abop mahsulotlarni Wildberries orqali taqdim etish.",
      ru: "Представление декоративных и подарочных изделий в национальном стиле через Wildberries.",
      en: "Showcasing decorative and gift products with national character through Wildberries.",
      fr: "Présentation de produits décoratifs et cadeaux au style national via Wildberries.",
      tr: "Milli ruha sahip dekoratif ve hediyelik ürünleri Wildberries üzerinden sunma.",
    },
    products: [
      {
        id: 1,
        title: "Dekorativ yog‘och panel",
        price: "1 250 000 so‘m",
        image: "https://basket-43.wbbasket.ru/vol11530/part1153058/1153058282/images/big/1.webp",
        url: "https://www.wildberries.ru/catalog/1153058282/detail.aspx?targetUrl=GP",
      },
      {
        id: 2,
        title: "Yog‘och sovg‘a qutisi",
        price: "720 000 so‘m",
        image: "https://basket-43.wbcontent.net/vol11530/part1153079/1153079359/images/big/2.webp",
        url: "https://www.wildberries.ru/catalog/1153079359/detail.aspx?targetUrl=GP",
      },
      {
        id: 3,
        title: "O‘yma interyer elementi",
        price: "2 100 000 so‘m",
        image: "https://basket-43.wbbasket.ru/vol11594/part1159407/1159407693/images/big/2.webp",
        url: "https://www.wildberries.ru/catalog/1159407693/detail.aspx?targetUrl=GP",
      },
    ],
  },
  {
    id: 3,
    slug: "yandex-market",
    name: "Yandex Market",
    logo: yandexIcon,
    accent: "#f6c400",
    description: {
      uz: "Yandex Market orqali interyer va dekor uchun yog‘och buyumlar kolleksiyasi.",
      ru: "Коллекция деревянных изделий для интерьера и декора через Yandex Market.",
      en: "A collection of wooden products for interior and decor through Yandex Market.",
      fr: "Une collection de produits en bois pour l’intérieur et la décoration via Yandex Market.",
      tr: "Yandex Market üzerinden iç mekân ve dekor için ahşap ürün koleksiyonu.",
    },
    products: [
      {
        id: 1,
        title: "Qo‘l mehnatida yasalgan stol",
        price: "4 600 000 so‘m",
        image: "https://avatars.mds.yandex.net/get-mpic/18986906/2a0000019ec998af5a5dbed86515673c92b2/180x240",
        url: "https://market.yandex.uz/card/qolda-oyilgan-yongoch-yon-stol--buxoro-milliy-naqshi-oymakor-yogoch-jurnal-stoli/5847822585?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
      },
      {
        id: 2,
        title: "O‘yma eshik dekor elementi",
        price: "3 800 000 so‘m",
        image: "https://avatars.mds.yandex.net/get-mpic/20809780/2a0000019ecb5fc2c82d5f22fa5a7c4b3eb8/180x240",
        url: "https://market.yandex.uz/card/podstavka-dlya-korana-laukh-reznaya-derevyannaya-ruchnaya-rabota/5849152979?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
      },
      {
        id: 3,
        title: "Premium yog‘och panel",
        price: "1 250 000 so‘m",
        image: "https://avatars.mds.yandex.net/get-mpic/20522876/2a0000019ecebb00f0326a9411e354cc3bbb/180x240",
        url: "https://market.yandex.uz/card/unikalnyy-predmet-ruchnoy-raboty-vypolnennyy-iz-naturalnogo-dereva/5850246770?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
      },
    ],
  },
  {
    id: 4,
    slug: "uzum-market",
    name: "Uzum Market",
    logo: uzumIcon,
    accent: "#7f4dff",
    description: {
      uz: "Uzum Market orqali mahalliy mijozlar uchun milliy premium yog‘och buyumlar.",
      ru: "Национальные премиальные деревянные изделия для местных клиентов через Uzum Market.",
      en: "National premium wooden products for local customers through Uzum Market.",
      fr: "Produits nationaux premium en bois pour les clients locaux via Uzum Market.",
      tr: "Uzum Market üzerinden yerel müşteriler için milli premium ahşap ürünler.",
    },
    products: [
      {
        id: 1,
        title: "O‘yma yog‘och lavh",
        price: "480 000 so‘m",
        image: "https://images.uzum.uz/d8no1221146tv077r5v0/original.jpg",
        url: "https://uzum.uz/uz/product/qolda-oyilgan-yongoch-2920781",
      },
      {
        id: 2,
        title: "Yog‘och quti",
        price: "720 000 so‘m",
        image: woodBox,
        url: "https://uzum.uz/",
      },
      {
        id: 3,
        title: "Dekorativ panel",
        price: "1 250 000 so‘m",
        image: "https://images.uzum.uz/d8od37s9g1ktqmlukph0/original.jpg",
        url: "https://uzum.uz/uz/product/chizilgan-gozal-ornatilgan-dekorativ-blok-2925077",
      },
    ],
  },
];