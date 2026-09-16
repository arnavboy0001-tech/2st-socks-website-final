export type Product = {
  id: string;
  name: string;
  image: string;
  tags: string[];
  blurb: string;
  fabric: string;
  featured?: boolean;
};

export const COMPANY = {
  name: "Ammvi Knits & Hosiery",
  shortName: "Ammvi",
  ceo: "Mr. Manoj Patil",
  established: 2011,
  nature: "Manufacturer, Supplier & Service Provider",
  phone: "+91 91304 56458",
  phoneRaw: "+919130456458",
  whatsapp: "919130456458",
  email: "arnavboy0001@gmail.com",
  address:
    "2/896 Tara Niwas, Tilak Road, Ichalkaranji, Kolhapur, Maharashtra, India — 416115",
  unitAddress: "Uran Islampur, Sangli, Maharashtra, India",
  hours: "Mon – Sat · 9:30 AM – 6:30 PM",
  gstArea: "Ichalkaranji (Kolhapur), Maharashtra",
};

/**
 * Composes a WhatsApp deep-link (wa.me) addressed to the company number,
 * with the enquiry message pre-filled. Opens WhatsApp with every detail
 * typed in — the sender only has to press send.
 */
export function whatsappEnquiryUrl(rows: Array<string | false | null | undefined>): string {
  const message = rows
    .filter((r): r is string => Boolean(r && r.trim().length > 0))
    .join("\n");
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function sendOnWhatsApp(rows: Array<string | false | null | undefined>): void {
  window.open(whatsappEnquiryUrl(rows), "_blank", "noopener,noreferrer");
}

export const ABOUT_TEXT = `Headquartered in Ichalkaranji (Kolhapur, Maharashtra), Ammvi Knits & Hosiery is engaged in the production of clothing that has a huge demand in the fashion industry. The company is known as an established manufacturer and supplier of premium quality kids socks, men's socks, ladies socks, cotton handkerchiefs, and sports stockings. We are also engaged in rendering sock customization services for which we adhere to the customer guidelines. We are committed to providing customers the best products with unique designs and at affordable prices. All our products have been appreciated for their matchless quality, impressive performance, and reasonable pricing.`;

export const HISTORY_TEXT = `Ammvi Knits & Hosiery was established in the year 2011, when the industry veteran i.e. Mr. Manoj Patil (Owner) laid the foundation stone with an aim to serve buyers with superior quality garments and clothing. From a handful of knitting machines in Ichalkaranji — the "Manchester of Maharashtra" — the house of Ammvi has grown into a trusted name for hosiery across schools, sports clubs, retailers and institutions.`;

export const STRENGTHS = [
  "Exclusive range of products",
  "Industry-leading prices",
  "Vast networking facilities",
  "Timely delivery of orders",
  "Maximum customer satisfaction",
  "Sock customisation to buyer guidelines",
];

export const STATS = [
  { value: 2011, label: "Established", suffix: "", isYear: true },
  { value: 15, label: "Years of knitting", suffix: "+" },
  { value: 26, label: "Modern machines", suffix: "" },
  { value: 1000, label: "Sq. ft. production unit", suffix: "" },
  { value: 16, label: "Product lines", suffix: "+" },
];

/* Real product photographs from the Ammvi catalogue */
export const PRODUCTS: Product[] = [
  {
    id: "bamboo-loafer-socks",
    name: "Bamboo Loafer Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/bamboo-loafer-socks-1736684842-7796094.jpg",
    tags: ["Men", "Bamboo"],
    blurb:
      "Low-cut loafer socks in breathable bamboo viscose — invisible in shoes, gentle on skin.",
    fabric: "Bamboo viscose blend",
  },
  {
    id: "mens-cotton-socks",
    name: "Mens Cotton Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/mens-cotton-socks-1721916694-7536878.jpg",
    tags: ["Men"],
    blurb:
      "Everyday combed-cotton crew socks with reinforced heel and toe for long workdays.",
    fabric: "Combed cotton",
    featured: true,
  },
  {
    id: "school-socks",
    name: "School Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/school-socks-1734524460-7745965.jpg",
    tags: ["Kids"],
    blurb:
      "Uniform-approved school socks with firm ribbed cuffs that stay up, term after term.",
    fabric: "Cotton / poly blend",
    featured: true,
  },
  {
    id: "bamboo-socks",
    name: "Bamboo Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/bamboo-socks-1736682550-7796075.jpg",
    tags: ["Men", "Women", "Bamboo"],
    blurb:
      "Silky-soft bamboo crew socks — naturally odour-resistant, thermo-regulating comfort.",
    fabric: "Bamboo viscose",
  },
  {
    id: "sports-arm-sleeves",
    name: "Sports Arm Sleeves",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/sports-arm-sleevs-1736682028-7796074.jpg",
    tags: ["Sports"],
    blurb:
      "Compression arm sleeves for cricket, running and gym — muscle support, UV shield.",
    fabric: "Elastane knit",
  },
  {
    id: "bamboo-calf-sleeves",
    name: "Bamboo Calf Sleeves",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/bamboo-calf-sleevs-1705905696-7259601.jpg",
    tags: ["Sports", "Bamboo"],
    blurb:
      "Graduated-compression calf sleeves in bamboo knit for recovery and endurance.",
    fabric: "Bamboo / elastane",
  },
  {
    id: "women-striped-bamboo-socks",
    name: "Women Striped Bamboo Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2026/8/1085003/watermark/women-striped-bamboo-socks-1767086441-6918228.jpg",
    tags: ["Women", "Bamboo"],
    blurb:
      "Striped bamboo crew socks for women — feather-light softness with all-day stretch.",
    fabric: "Bamboo viscose",
    featured: true,
  },
  {
    id: "mens-striped-bamboo-socks",
    name: "Mens Striped Bamboo Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2026/8/1085003/watermark/mens-striped-bamboo-socks-1767086585-6918197.jpg",
    tags: ["Men", "Bamboo"],
    blurb:
      "Classic striped bamboo socks for men — boardroom polish, sneaker-day comfort.",
    fabric: "Bamboo viscose",
    featured: true,
  },
  {
    id: "diabetic-socks",
    name: "Diabetic Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2026/8/1085003/watermark/diabetic-socks-1767083172-5704860.jpg",
    tags: ["Care"],
    blurb:
      "Non-binding loose tops, seamless toes and cushioned soles for sensitive feet.",
    fabric: "Soft cotton, seamless toe",
  },
  {
    id: "shoe-uppers",
    name: "Shoe Uppers",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/shoe-uppers-1736683093-7796078.jpg",
    tags: ["Components"],
    blurb:
      "Knitted shoe uppers for footwear manufacturers — engineered fit, breathable weave.",
    fabric: "Technical knit",
  },
  {
    id: "ankle-socks",
    name: "Ankle Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2025/6/1085003/watermark/ankle-socks-1736690172-7796136.jpg",
    tags: ["Men", "Women", "Sports"],
    blurb:
      "Snug low-cut ankle socks with cushioned footbed — the everyday no-show essential.",
    fabric: "Cotton / spandex",
  },
  {
    id: "knee-support",
    name: "Knee Support",
    image:
      "https://2.wlimg.com/product_images/bc-small/2026/8/1085003/watermark/knee-support-1767082477-8507919.jpg",
    tags: ["Sports", "Care"],
    blurb:
      "Elastic knit knee support with targeted compression for sport and rehabilitation.",
    fabric: "Elastane / nylon knit",
  },
  {
    id: "wrist-bands",
    name: "Wrist Bands",
    image:
      "https://dyimg77.exportersindia.com/product_images/bc-small/2025/12/1085003/wrist-bands-1767085256-8508041.jpg",
    tags: ["Sports"],
    blurb:
      "Terry-knit wrist bands that soak sweat and keep your grip dry on court or pitch.",
    fabric: "Terry cotton",
  },
  {
    id: "kids-fancy-socks",
    name: "Kids Fancy Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2023/9/1085003/watermark/kids-fancy-socks-1685513194-5231430.jpg",
    tags: ["Kids"],
    blurb:
      "Playful jacquard patterns and colours that kids actually want to wear.",
    fabric: "Cotton jacquard",
    featured: true,
  },
  {
    id: "kids-printed-socks",
    name: "Kids Printed Socks",
    image:
      "https://2.wlimg.com/product_images/bc-small/2023/9/1085003/watermark/kids-printed-socks-1685513451-5231435.jpg",
    tags: ["Kids"],
    blurb:
      "Fun all-over printed socks for little feet — soft, stretchy, school-safe.",
    fabric: "Printed cotton knit",
  },
  {
    id: "sports-stockings",
    name: "Sports Stockings",
    image:
      "https://2.wlimg.com/product_images/bc-small/2026/8/1085003/watermark/sports-stockings-1767083330-5231474.jpg",
    tags: ["Sports"],
    blurb:
      "Team-colour football stockings with cushioned soles and stay-up rib tops.",
    fabric: "Poly / cotton knit",
    featured: true,
  },
];

export const CATEGORIES = [
  "All",
  "Men",
  "Women",
  "Kids",
  "Sports",
  "Bamboo",
  "Care",
  "Components",
] as const;

export const TICKER_ITEMS = PRODUCTS.map((p) => p.name);

export const TESTIMONIALS = [
  {
    name: "Vishu Nagda",
    quote:
      "I will recommend you guys, products are made only with genuine quality raw materials.",
  },
  {
    name: "Jahangir Alom",
    quote: "Remarkable team and top-notch products make for a winning combination.",
  },
  {
    name: "Mahefuz Khan",
    quote: "A breath of fresh air in the market, the product setting a new benchmark.",
  },
  {
    name: "Satish K Pathak",
    quote:
      "We have observed a significant increase in our production while using products of this organization.",
  },
  {
    name: "Varun",
    quote:
      "Exquisite quality! The build and finish of this product are beyond impressive. It's clear that high standards are a priority here.",
  },
  {
    name: "Parag P Shroff",
    quote:
      "The product surpassed all my expectations, and I couldn't be happier with the outcome. Highly recommended.",
  },
  {
    name: "Anil Prasad",
    quote:
      "This product is a must-have! Durable, efficient, and well worth the investment.",
  },
  {
    name: "Sanjay Kumar",
    quote:
      "One of the top suppliers of products in the market, capable of delivering as per customer needs.",
  },
  {
    name: "Dinesh",
    quote:
      "A true game-changer. The innovation behind this is truly commendable. Kudos to the team.",
  },
  {
    name: "Mina",
    quote: "It is a good company to get quality products at budgeted price.",
  },
];

export const CUSTOM_PROCESS = [
  {
    step: "01",
    title: "Share Your Design",
    body: "Send us colours, logos, sizes and quantity — we follow your buyer guidelines to the stitch.",
  },
  {
    step: "02",
    title: "Sampling & Approval",
    body: "We knit a physical sample for your sign-off on yarn, gauge, elasticity and finish.",
  },
  {
    step: "03",
    title: "Bulk Production",
    body: "26 computerised machines at our Uran Islampur unit run your order with strict QC checks.",
  },
  {
    step: "04",
    title: "Packing & Dispatch",
    body: "Tagged, paired and packed to your spec — dispatched on time, every time.",
  },
];

export const IMAGES = {
  heroFlatlay:
    "https://image.qwenlm.ai/generated-images/0508ef90-510b-4f8f-9f44-9fdd6cea2d67/_result.png",
  factory:
    "https://image.qwenlm.ai/generated-images/430c392e-f692-4d26-8d7c-333fc35ec396/_result.png",
  bamboo:
    "https://image.qwenlm.ai/generated-images/c0b17829-160f-4a1b-814f-e73e3f934e0f/_result.png",
};
