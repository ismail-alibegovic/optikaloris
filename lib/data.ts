// All business facts and products below were verified on optikaloris.ba on 29 Oct 2026.

export const SHOP_URL = "https://optikaloris.ba";
export const BOOKING_URL = `${SHOP_URL}/pages/rezervacija`;
export const CONTACT_URL = `${SHOP_URL}/pages/contact`;
export const PRICES_VERIFIED_ON = "29. 10. 2026.";

export const collectionUrl = (handle: string) => `${SHOP_URL}/collections/${handle}`;
export const vendorUrl = (vendor: string) =>
  `${SHOP_URL}/collections/vendors?q=${encodeURIComponent(vendor)}`;

export const NAV_LINKS = [
  { label: "Sunčane naočale", href: "#kolekcije" },
  { label: "Dioptrijski okviri", href: "#izdvojeno" },
  { label: "Brendovi", href: "#brendovi" },
  { label: "Poslovnice", href: "#poslovnice" },
] as const;

export type Category = "suncane" | "dioptrijske";

export type Product = {
  handle: string;
  brand: string;
  model: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  color?: string;
  size: string;
  note?: string;
  images: string[];
};

export const PRODUCTS: Product[] = [
  {
    handle: "prada-prd01-00k10s",
    brand: "Prada",
    model: "PRD01 00K10S",
    category: "suncane",
    price: 870,
    color: "Tortoise",
    size: "52-21-140",
    images: ["prada-prd01-00k10s-1.jpg", "prada-prd01-00k10s-2.jpg"],
  },
  {
    handle: "dolce-gabbana-dg3428-502",
    brand: "Dolce&Gabbana",
    model: "DG3428 502",
    category: "dioptrijske",
    price: 580,
    size: "55-18-145",
    images: ["dolce-gabbana-dg3428-502-1.jpg", "dolce-gabbana-dg3428-502-2.jpg"],
  },
  {
    handle: "miu-miu-mub05s-14l20u",
    brand: "Miu Miu",
    model: "MUB05S 14L20U",
    category: "suncane",
    price: 880,
    color: "Havana",
    size: "51-21-135",
    images: ["miu-miu-mub05s-14l20u-1.jpg", "miu-miu-mub05s-14l20u-2.jpg"],
  },
  {
    handle: "coco-song-cv329-c02",
    brand: "Coco Song",
    model: "CV329 C02",
    category: "dioptrijske",
    price: 790,
    size: "52-19-145",
    note: "Svila, perje i kamenje.",
    images: ["coco-song-cv329-c02-1.jpg", "coco-song-cv329-c02-2.jpg"],
  },
  {
    handle: "ray-ban-rb3765-001-51",
    brand: "Ray-Ban",
    model: "RB3765 001/51",
    category: "suncane",
    price: 395,
    color: "Zlatna / smeđa",
    size: "53-22-145",
    images: ["ray-ban-rb3765-001-51-1.jpg", "ray-ban-rb3765-001-51-2.jpg"],
  },
  {
    handle: "genesis-art-gv-1663-c03",
    brand: "Genesis Art",
    model: "GV 1663 C03",
    category: "dioptrijske",
    price: 410,
    size: "50-19-145",
    images: ["genesis-art-gv-1663-c03-1.jpg", "genesis-art-gv-1663-c03-2.jpg"],
  },
  {
    handle: "jimmy-choo-jim-leone-s-086",
    brand: "Jimmy Choo",
    model: "JIM LEONE/S 086",
    category: "suncane",
    price: 453.75,
    compareAtPrice: 605,
    size: "52-22-145",
    images: ["jimmy-choo-jim-leone-s-086-1.jpg", "jimmy-choo-jim-leone-s-086-2.jpg"],
  },
  {
    handle: "oliviero-contini-ov4403-c01",
    brand: "Oliviero Contini",
    model: "OV4403 C01",
    category: "dioptrijske",
    price: 189,
    color: "Havana / crvena",
    size: "53-17-140",
    images: ["oliviero-contini-ov4403-c01-1.jpg"],
  },
];

export const productImage = (file: string) => `/images/products/${file}`;
export const productUrl = (p: Product) => `${SHOP_URL}/products/${p.handle}`;

// Format matches the shop itself: "453,75 KM". Built by hand so server and browser agree
// regardless of which locales the runtime ships with.
export const formatKM = (value: number) => {
  const [int, dec] = value.toFixed(2).split(".");
  return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${dec} KM`;
};

export const BRAND_GROUPS = [
  {
    title: "Modne kuće",
    brands: [
      "Prada",
      "Miu Miu",
      "Dolce&Gabbana",
      "Jimmy Choo",
      "Emporio Armani",
      "Carolina Herrera",
      "Chopard",
      "Missoni",
      "Furla",
    ],
  },
  {
    title: "Ikone",
    brands: ["Ray-Ban", "Police", "Vogue"],
  },
  {
    title: "Dizajnerski okviri",
    brands: ["Coco Song", "Genesis Art", "La Matta", "Oliviero Contini", "Charmant Titanium Perfection"],
  },
] as const;

export type Store = {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
};

export const STORES: Store[] = [
  {
    id: "grbavica",
    name: "Grbavica",
    area: "Poslovnica Loris Grbavica",
    address: "Topal Osman paše 32",
    phone: "033 715 520",
  },
  {
    id: "aria",
    name: "Aria Mall",
    area: "Poslovnica Loris Aria Mall",
    address: "Trg djece Sarajeva 1",
    phone: "033 259 625",
  },
  {
    id: "bingo",
    name: "Bingo City Centar",
    area: "Poslovnica Loris Bingo City Centar",
    address: "Džemala Bijedića 160",
    phone: "033 529 949",
  },
];

export const telHref = (phone: string) => `tel:+387${phone.replace(/\s/g, "").replace(/^0/, "")}`;
export const mapsHref = (s: Store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Optika Loris ${s.address} Sarajevo`,
  )}`;

export const CONTACT = {
  phone: "+387 62 344 901",
  phoneHref: "tel:+38762344901",
  email: "webshop@optikaloris.ba",
  address: "Topal Osman paše 32, 71 000 Sarajevo",
  facebook: "https://www.facebook.com/optikaLoris",
  instagram: "https://www.instagram.com/optika_loris/",
};
