export const surveyQuestions = [
  {
    id: 1,
    question: "¿En qué rango de edad te encuentras?",
    options: [
      { name: "18 - 25 años" },
      { name: "26 - 30 años" },
      { name: "31 - 40 años" },
      { name: "41 - 50 años" },
      { name: "+50 años" },
    ],
  },
  {
    id: 2,
    question: "¿Cuál es el color de tu piel?",
    options: [
      {
        name: "Blanca",
        color: "#FAD1B9",
      },
      {
        name: "Blanca intermedia",
        color: "#EFBA9B",
      },
      {
        name: "Morena",
        color: "#D4A58B",
      },
      {
        name: "Trigueña",
        color: "#FAAB81",
      },
      {
        name: "Trigueña bronceada",
        color: "#D59B76",
      },
    ],
  },
  {
    id: 3,
    question: "¿Define tu tipo de cabello?",
    options: [
      {
        name: "Liso",
      },
      {
        name: "Crespo",
      },
      {
        name: "Ondulado",
      },
      {
        name: "Afro",
      },
      {
        name: "Sin pelo",
      },
    ],
  },
  {
    id: 4,
    question: "¿Cuéntanos cuál es tu tipo de piel?",
    options: [
      {
        name: "Normal",
      },
      {
        name: "Graso",
      },
      {
        name: "Mixto",
      },
      {
        name: "Seco",
      },
    ],
  },
  {
    id: 5,
    question: "¿Qué problemas tienes con tu piel?",
    multiple: true,
    options: [
      {
        name: "Acné y Poros Abiertos",
      },
      {
        name: "Arrugas/Vejez",
      },
      {
        name: "Celulitis",
      },
      {
        name: "Estrías",
      },
      {
        name: "Rosácea",
      },
      {
        name: "Protección Solar",
      },
      {
        name: "Hiperpigmentación / Manchas Oscuras",
      },
      {
        name: "Ojeras / Bolsas alrededor del ojo",
      },
      {
        name: "Sensibilidad",
      },
      {
        name: "Ninguna",
      },
    ],
  },
  {
    id: 6,
    question: "¿Cómo describes tu cabello?",
    multiple: true,
    options: [
      {
        name: "Caída de Cabello",
      },
      {
        name: "Con Caspa",
      },
      {
        name: "Con Friz",
      },
      {
        name: "Con Ondas",
      },
      {
        name: "Delgado",
      },
      {
        name: "Seco",
      },
      {
        name: "Grasoso",
      },
      {
        name: "Grueso",
      },
      {
        name: "Liso",
      },
      {
        name: "Necesita volumen",
      },
      {
        name: "Puntas Dañadas",
      },
      {
        name: "Rizos extremos",
      },
    ],
  },
  {
    id: 7,
    question: "¿Cómo nos conociste?",
    options: [
      {
        name: "Recomendación de Influencers",
      },
      {
        name: "Recomendación de amigas",
      },
      {
        name: "Publicidad en redes",
      },
      {
        name: "Era seguidora",
      },
      {
        name: "Otro",
      },
    ],
  },
];

export const storeFilters = [
  {
    filter: "brand",
    name: "Marcas",
    items: [
      {
        id: "brand-1",
        name: "Marca 1",
      },
      {
        id: "brand-2",
        name: "Marca 2",
      },
      {
        id: "brand-3",
        name: "Marca 3",
      },
    ],
  },
  {
    filter: "category",
    name: "Categoría",
    items: [
      {
        id: "category-1",
        name: "Categoría 1",
      },
      {
        id: "category-2",
        name: "Categoría 2",
      },
      {
        id: "category-3",
        name: "Categoría 3",
      },
    ],
  },
  {
    filter: "rating",
    name: "Valoración",
    items: [
      {
        id: "rating-1",
        name: "Valoración 1",
      },
      {
        id: "rating-2",
        name: "Valoración 2",
      },
      {
        id: "rating-3",
        name: "Valoración 3",
      },
    ],
  },
];

export const payMethods = [
  {
    id: "creditCard",
    image: "/assets/images/paymethods/cards.png",
    title: "Tarjetas",
  },
  {
    id: "pse",
    image: "/assets/images/paymethods/pse.png",
    title: "Pago PSE",
  },
  {
    id: "nequi",
    image: "/assets/images/paymethods/nequi.svg",
    title: "Nequi",
  },
  {
    id: "bancolombia",
    image: "/assets/images/paymethods/bancolombia.png",
    title: "Bancolombia",
  },
  {
    id: "daviplata",
    image: "/assets/images/paymethods/daviplata.webp",
    title: "Daviplata",
  },
  {
    id: "bitcoin",
    image: "/assets/images/paymethods/crypto.svg",
    title: "Bitcoin",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Vanesa Jaller",
    image: "/assets/images/testimonials/vanessa.webp",
    comment:
      "Me encanta Hi Beauty porque te permite probar productos y son de excelente calidad y en tamaño original, además que es super económico. Amé la primera cajita.",
  },
  {
    id: 2,
    name: "Valentina Pinto",
    image: "/assets/images/testimonials/valentina.webp",
    comment:
      "Estoy muy contenta con los productos que recibí en mi primera Hi Beauty. Muy recomendados.",
  },
  {
    id: 3,
    name: "Fiorella Quintero",
    image: "/assets/images/testimonials/fiorella.webp",
    comment:
      "Me encanta Hi Beauty, cada mes recibes productos full size por tan poquito dinero, es ideal porque puedes ir creciendo tu makeup colección sin gastar tanto dinero, además de que tienes la oportunidad de probar marcas nuevas y de recibir marcas reconocidas. Top la primera caja.",
  },
  {
    id: 4,
    name: "Lina Sanchez",
    image: "/assets/images/testimonials/lina.webp",
    comment:
      "Una experiencia realmente agradable y muy contenta con la primera cajita. Ha sido de excelente calidad y tamaño, realmente el vale la pena, recomiendo Hi Beauty 100%.",
  },
  {
    id: 5,
    name: "Tatiana Martínez",
    image: "/assets/images/testimonials/tatiana.webp",
    comment:
      "De todas las cajas en el mercado, Hi Beauty me parece la mejor en cuanto a calidad y precio. Además su equipo de atención es muy amable y me guiaron en la compra, de la primera cajita.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "¿Cuántos productos recibes?",
    answer: "4 a 5 productos en tamaño full size.",
  },
  {
    id: 2,
    question: "¿Los productos son originales?",
    answer: "100% originales, contamos con alianzas con las mejores marcas",
  },
  {
    id: 3,
    question: "¿Qué marcas manejan?",
    answer:
      "Ruby Rose, Maybellin, Essence, Samy, Ani-k, Atenea, Pinch, Ame, Garnier, Trendy, Montoc, Tony Moly.",
  },
  {
    id: 4,
    question: "¿Puedo comprar sin suscribirme?",
    answer:
      "Si, puedes cancelar cuando quieras. No tenemos cláusulas de permanencia.",
  },
  {
    id: 5,
    question: "¿El envío es gratis?",
    answer:
      "Si, sin importar la ciudad o municipio donde te encuentres. Solo Colombia.",
  },
  {
    id: 6,
    question: "¿Con que método de pago puedo comprar?",
    answer:
      "Puedes pagar con cualquier método de pago crédito, PSE, Efecty, Nequi, Daviplata, Bancolombia y Bitcoin.",
  },
];

export const bestOfNovember = [
  {
    id: 1,
    image:
      "https://hi-beauty.s3.amazonaws.com/box/Labial+l%C3%ADquido+ultramate+(AME).png",
    name: "Labial líquido ultramate (AME)",
    description:
      "Conocidos como uno de los mejores labiales líquidos mate de Colombia, ¡Una vez los pruebas prometemos que vas a querer tenerlos todos en tu colección!",
    valuatedAt: 31000,
  },
  {
    id: 2,
    image:
      "https://hi-beauty.s3.amazonaws.com/box/Pesta%C3%B1ita+tr%C3%B3pico+(Ruby+Rose).png",
    name: "Pestañita trópico (Ruby Rose)",
    description:
      "Resaltan tu mirada, pestañas rizadas y largas, dale volumen a tus pestañas, es de larga duración y efecto natural.",
    valuatedAt: 18000,
  },
  {
    id: 3,
    image:
      "https://hi-beauty.s3.amazonaws.com/box/Paleta+de+sombras+(Ani-K)..png",
    name: "Paleta de sombras (Ani-K)",
    description:
      "Paleta LÚCIDA es la paleta más practica que conocerás! contiene 8 tonos, entre mates y satinados, 1 rubor, 1 bronzer y 2 iluminadores.",
    valuatedAt: 20000,
  },
  {
    id: 4,
    image: "https://hi-beauty.s3.amazonaws.com/box/Rubor+en+crema+(AME)..png",
    name: "Rubor en crema (AME)",
    description:
      "Producto en crema multiusos especialmente diseñado para darle fácil y rápido un toque de color a tu maquillaje. Ideal para un acabado natural, dewy y hermoso.",
    valuatedAt: 25000,
  },
  {
    id: 5,
    image:
      "https://hi-beauty.s3.amazonaws.com/box/Jab%C3%B3n+de+cejas+(Cosmos+Miss.png",
    name: "Jabón de cejas (Cosmos Miss)",
    description:
      "Jabón fijador para cejas, ideal para crear looks a la moda como el estilo de cejas orgánicas, permitirá peinar y mantener cada vello en su lugar durante un largo periodo de tiempo. Incluye cepillo. Son la nueva tendencia en belleza.",
    valuatedAt: 10000,
  },
  {
    id: 6,
    image:
      "https://hi-beauty.s3.amazonaws.com/box/blender-cocoon-a-1000x1000_c(1).jpg",
    name: "Blender Cocoon (MONTOC)",
    description:
      "La blender COCOON crece hasta casi el doble de su tamaño cuando está mojada para absober una cantidad mínima del producto y que este quede en tu piel y no en tu esponjita.",
    valuatedAt: 14500,
    extra: "Sólo si pagas con tarjeta de crédito",
  },
];


export const tutorial = [
  {
    icon: '',
    name: 'Make up',
    video: 'https://youtu.be/I80dTCSX7dM'
  }
]
