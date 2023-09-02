import { v4 as uuidv4 } from "uuid";
let data = [
  {
    id: uuidv4(),
    title: "Smartphone Galaxy S21",
    category: "Electronics",
    description: "Potente smartphone con cámara de alta resolución.",
    price: 799.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Smartphone_Galaxy_S21.jpg",
  },
  {
    id: uuidv4(),
    title: "Smart TV 4K 55 pulgadas",
    category: "Electronics",
    description: "Televisor con resolución 4K y Smart TV integrado.",
    price: 699.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Smart_TV_4K_55_pulgadas.jpg",
  },
  {
    id: uuidv4(),
    title: "Laptop Ultrabook X1",
    category: "Electronics",
    description: "Laptop ultradelgada y potente para profesionales.",
    price: 1299.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Laptop_Ultrabook_X1.jpg",
  },
  {
    id: uuidv4(),
    title: "Auriculares Inalámbricos Pro",
    category: "Electronics",
    description: "Auriculares premium con cancelación de ruido.",
    price: 249.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Auriculares_Inal%C3%A1mbricos_Pro_a0twvr.jpg",
  },
  {
    id: uuidv4(),
    title: "Reloj de Lujo Automático",
    category: "Jewelry",
    description: "Elegante reloj automático con correa de cuero.",
    price: 599.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Reloj_de_Lujo_Autom%C3%A1tico_jctbfj.jpg",
  },
  {
    id: uuidv4(),
    title: "Collar de Perlas Naturales",
    category: "Jewelry",
    description: "Collar de perlas cultivadas de alta calidad.",
    price: 349.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Collar_de_Perlas_Naturales_qgqki4.jpg",
  },
  {
    id: uuidv4(),
    title: "Camisa de Vestir Clásica",
    category: "Men's Clothing",
    description: "Camisa de vestir de algodón con corte clásico.",
    price: 79.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Camisa_de_Vestir_Cl%C3%A1sica_yzno96.jpg",
  },
  {
    id: uuidv4(),
    title: "queros Slim Fit",
    category: "Men's Clothing",
    description: "Vaqueros de corte ajustado y diseño moderno.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Vaqueros_Slim_Fit_ieuysr.jpg",
  },
  {
    id: uuidv4(),
    title: "Vestido Elegante de Noche",
    category: "Women's Clothing",
    description: "Vestido elegante para ocasiones especiales.",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Vestido_Elegante_de_Noche_ui6lbp.jpg",
  },
  {
    id: uuidv4(),
    title: "Blusa de Seda Estampada",
    category: "Women's Clothing",
    description: "Blusa de seda con estampado floral y estilo sofisticado.",
    price: 119.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_de_Seda_Estampada_bpaa9v.jpg",
  },
  {
    id: uuidv4(),
    title: "Monitor Curvo 34 pulgadas",
    category: "Electronics",
    description: "Monitor curvo ultrawide para una experiencia inmersiva.",
    price: 899.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Monitor_Curvo_34_pulgadas_bdcc4s.jpg",
  },
  {
    id: uuidv4(),
    title: "Altavoz Bluetooth Portátil",
    category: "Electronics",
    description: "Altavoz inalámbrico con sonido de alta calidad.",
    price: 59.99,
    urImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Altavoz_Bluetooth_Port%C3%A1til_fnwplm.jpg",
  },
  {
    id: uuidv4(),
    title: "Collar de Diamantes Radiantes",
    category: "Jewelry",
    description: "Collar con diamantes radiantes en un elegante diseño.",
    price: 1299.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Collar_de_Diamantes_Radiantes_t1unpg.jpg",
  },
  {
    id: uuidv4(),
    title: "Traje de Vestir Clásico",
    category: "Men's Clothing",
    description: "Traje de vestir completo con chaqueta y pantalones.",
    price: 399.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Traje_de_Vestir_Cl%C3%A1sico_kmz6fv.jpg",
  },
  {
    id: uuidv4(),
    title: "Gafas de Sol Polarizadas",
    category: "Men's Clothing",
    description: "Gafas de sol con lentes polarizadas y estilo moderno.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Gafas_de_Sol_Polarizadas_ipkccc.jpg",
  },
  {
    id: uuidv4(),
    title: "Vestido de Fiesta Brillante",
    category: "Women's Clothing",
    description: "Vestido de fiesta con detalles brillantes y escote elegante.",
    price: 179.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Vestido_de_Fiesta_Brillante_shlnoz.jpg",
  },
  {
    id: uuidv4(),
    title: "Bolso de Cuero Genuino",
    category: "Women's Clothing",
    description: "Bolso de cuero de alta calidad con espacio amplio.",
    price: 199.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Bolso_de_Cuero_Genuino_kgg1ru.jpg",
  },
  {
    id: uuidv4(),
    title: "Cámara Réflex Profesional",
    category: "Electronics",
    description: "Cámara réflex con capacidad de grabación en 4K.",
    price: 1499.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/C%C3%A1mara_R%C3%A9flex_Profesional_gb37fr.jpg",
  },
  {
    id: uuidv4(),
    title: "Anillo de Compromiso de Diamantes",
    category: "Jewelry",
    description:
      "Anillo de compromiso con diamante central y acentos brillantes.",
    price: 1999.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Anillo_de_Compromiso_de_Diamantes_nxntcy.jpg",
  },
  {
    id: uuidv4(),
    title: "Blusa Casual de Algodón",
    category: "Women's Clothing",
    description: "Blusa casual de algodón con diseño relajado y cómodo.",
    price: 39.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_Casual_de_Algod%C3%B3n_yjyetc.jpg",
  },
  {
    id: uuidv4(),
    title: "Tablet 10 pulgadas",
    category: "Electronics",
    description: "Tablet con pantalla de alta resolución y rendimiento fluido.",
    price: 299.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282476/API%20REST%20IMAGES/Tablet_10_pulgadas_caebu1.jpg",
  },
  {
    id: uuidv4(),
    title: "Reloj Deportivo Inteligente",
    category: "Electronics",
    description:
      "Reloj inteligente con seguimiento de actividad y notificaciones.",
    price: 129.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Reloj_Deportivo_Inteligente_lmmune.jpg",
  },
  {
    id: uuidv4(),
    title: "Collar de Zafiro Elegante",
    category: "Jewelry",
    description: "Collar con zafiro en tonos azules y diseño elegante.",
    price: 499.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Collar_de_Zafiro_Elegante_gsha9c.jpg",
  },
  {
    id: uuidv4(),
    title: "Chaqueta de Mezclilla Vintage",
    category: "Men's Clothing",
    description: "Chaqueta de mezclilla vintage con estilo retro.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Chaqueta_de_Mezclilla_Vintage_qf6l02.jpg",
  },
  {
    id: uuidv4(),
    title: "Pantalones Chinos Clásicos",
    category: "Men's Clothing",
    description: "Pantalones chinos de corte clásico y cómodo.",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Pantalones_Chinos_Cl%C3%A1sicos_femjee.jpg",
  },
  {
    id: uuidv4(),
    title: "Vestido de Encaje Romántico",
    category: "Women's Clothing",
    description: "Vestido de encaje con detalles románticos y femeninos.",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Vestido_de_Encaje_Rom%C3%A1ntico_qa47mo.jpg",
  },
  {
    id: uuidv4(),
    title: "Bolso de Mano Elegante",
    category: "Women's Clothing",
    description: "Bolso de mano con diseño elegante y practicidad.",
    price: 79.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Bolso_de_Mano_Elegante_fvxhio.jpg",
  },
  {
    id: uuidv4(),
    title: "Auriculares Inalámbricos Deportivos",
    category: "Electronics",
    description:
      "Auriculares inalámbricos diseñados para actividades deportivas.",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Auriculares_Inal%C3%A1mbricos_Deportivos_xpcd1g.jpg",
  },
  {
    id: uuidv4(),
    title: "Anillo de Plata Elegante",
    category: "Jewelry",
    description: "Anillo de plata con diseño elegante y versátil.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Anillo_de_Plata_Elegante_qsy2bd.jpg",
  },
  {
    id: uuidv4(),
    title: "Blusa de Manga Larga Casual",
    category: "Women's Clothing",
    description: "Blusa de manga larga perfecta para un look casual.",
    price: 34.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_de_Manga_Larga_Casual_ap8b9o.jpg",
  },
  {
    id: uuidv4(),
    title: "Cámara de Acción 4K",
    category: "Electronics",
    description: "Cámara compacta de acción con grabación en calidad 4K.",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/C%C3%A1mara_de_Acci%C3%B3n_4K_c8tmyh.jpg",
  },
  {
    id: uuidv4(),
    title: "Portátil Convertible 2 en 1",
    category: "Electronics",
    description: "Portátil convertible con pantalla táctil y versatilidad.",
    price: 899.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Port%C3%A1til_Convertible_2_en_1_t687en.jpg",
  },
  {
    id: uuidv4(),
    title: "Pulsera de Perlas y Diamantes",
    category: "Jewelry",
    description: "Pulsera elegante con perlas y detalles de diamantes.",
    price: 279.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Pulsera_de_Perlas_y_Diamantes_zzjler.jpg",
  },
  {
    id: uuidv4(),
    title: "Camiseta Casual Estampada",
    category: "Men's Clothing",
    description: "Camiseta casual con estampado moderno y cómodo.",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Camiseta_Casual_Estampada_gdpqtk.jpg",
  },
  {
    id: uuidv4(),
    title: "Chaqueta de Cuero Clásica",
    category: "Men's Clothing",
    description: "Chaqueta de cuero genuino con estilo atemporal.",
    price: 199.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Chaqueta_de_Cuero_Cl%C3%A1sica.jpg",
  },
  {
    id: uuidv4(),
    title: "Vestido de Verano Bohemio",
    category: "Women's Clothing",
    description: "Vestido bohemio perfecto para los días de verano.",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Vestido_de_Verano_Bohemio_ghpdza.webp",
  },
  {
    id: uuidv4(),
    title: "Bolso Tote de Cuero",
    category: "Women's Clothing",
    description: "Bolso tote espacioso y versátil de cuero genuino.",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Bolso_Tote_de_Cuero_q3osrk.jpg",
  },
  {
    id: uuidv4(),
    title: "Altavoces Bluetooth Estéreo",
    category: "Electronics",
    description: "Altavoces Bluetooth con sonido estéreo envolvente.",
    price: 129.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Altavoces_Bluetooth_Est%C3%A9reo_pyjnei.jpg",
  },
  {
    id: uuidv4(),
    title: "Pendientes de Diamantes Brillantes",
    category: "Jewelry",
    description: "Pendientes con diamantes brillantes en diseño elegante.",
    price: 399.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Pendientes_de_Diamantes_Brillantes_ubjgah.jpg",
  },
  {
    id: uuidv4(),
    title: "Blusa Estampada de Flores",
    category: "Women's Clothing",
    description: "Blusa de manga corta con estampado de flores.",
    price: 44.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Blusa_Estampada_de_Flores_deo6r2.jpg",
  },
];

export { data };
