import { v4 as uuidv4 } from "uuid";
let data = [
  {
    id: uuidv4(),
    name: "Smartphone Galaxy S21",
    categoria: "Electronics",
    descripcion: "Potente smartphone con cámara de alta resolución.",
    precio: 799.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Smartphone_Galaxy_S21.jpg",
  },
  {
    id: uuidv4(),
    name: "Smart TV 4K 55 pulgadas",
    categoria: "Electronics",
    descripcion: "Televisor con resolución 4K y Smart TV integrado.",
    precio: 699.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Smart_TV_4K_55_pulgadas.jpg",
  },
  {
    id: uuidv4(),
    name: "Laptop Ultrabook X1",
    categoria: "Electronics",
    descripcion: "Laptop ultradelgada y potente para profesionales.",
    precio: 1299.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Laptop_Ultrabook_X1.jpg",
  },
  {
    id: uuidv4(),
    name: "Auriculares Inalámbricos Pro",
    categoria: "Electronics",
    descripcion: "Auriculares premium con cancelación de ruido.",
    precio: 249.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Auriculares_Inal%C3%A1mbricos_Pro_a0twvr.jpg",
  },
  {
    id: uuidv4(),
    name: "Reloj de Lujo Automático",
    categoria: "Jewelry",
    descripcion: "Elegante reloj automático con correa de cuero.",
    precio: 599.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Reloj_de_Lujo_Autom%C3%A1tico_jctbfj.jpg",
  },
  {
    id: uuidv4(),
    name: "Collar de Perlas Naturales",
    categoria: "Jewelry",
    descripcion: "Collar de perlas cultivadas de alta calidad.",
    precio: 349.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Collar_de_Perlas_Naturales_qgqki4.jpg",
  },
  {
    id: uuidv4(),
    name: "Camisa de Vestir Clásica",
    categoria: "Men's Clothing",
    descripcion: "Camisa de vestir de algodón con corte clásico.",
    precio: 79.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Camisa_de_Vestir_Cl%C3%A1sica_yzno96.jpg",
  },
  {
    id: uuidv4(),
    name: "queros Slim Fit",
    categoria: "Men's Clothing",
    descripcion: "Vaqueros de corte ajustado y diseño moderno.",
    precio: 89.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Vaqueros_Slim_Fit_ieuysr.jpg",
  },
  {
    id: uuidv4(),
    name: "Vestido Elegante de Noche",
    categoria: "Women's Clothing",
    descripcion: "Vestido elegante para ocasiones especiales.",
    precio: 149.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Vestido_Elegante_de_Noche_ui6lbp.jpg",
  },
  {
    id: uuidv4(),
    name: "Blusa de Seda Estampada",
    categoria: "Women's Clothing",
    descripcion: "Blusa de seda con estampado floral y estilo sofisticado.",
    precio: 119.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_de_Seda_Estampada_bpaa9v.jpg",
  },
  {
    id: uuidv4(),
    name: "Monitor Curvo 34 pulgadas",
    categoria: "Electronics",
    descripcion: "Monitor curvo ultrawide para una experiencia inmersiva.",
    precio: 899.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Monitor_Curvo_34_pulgadas_bdcc4s.jpg",
  },
  {
    id: uuidv4(),
    name: "Altavoz Bluetooth Portátil",
    categoria: "Electronics",
    descripcion: "Altavoz inalámbrico con sonido de alta calidad.",
    precio: 59.99,
    urImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Altavoz_Bluetooth_Port%C3%A1til_fnwplm.jpg",
  },
  {
    id: uuidv4(),
    name: "Collar de Diamantes Radiantes",
    categoria: "Jewelry",
    descripcion: "Collar con diamantes radiantes en un elegante diseño.",
    precio: 1299.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Collar_de_Diamantes_Radiantes_t1unpg.jpg",
  },
  {
    id: uuidv4(),
    name: "Traje de Vestir Clásico",
    categoria: "Men's Clothing",
    descripcion: "Traje de vestir completo con chaqueta y pantalones.",
    precio: 399.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Traje_de_Vestir_Cl%C3%A1sico_kmz6fv.jpg",
  },
  {
    id: uuidv4(),
    name: "Gafas de Sol Polarizadas",
    categoria: "Men's Clothing",
    descripcion: "Gafas de sol con lentes polarizadas y estilo moderno.",
    precio: 89.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Gafas_de_Sol_Polarizadas_ipkccc.jpg",
  },
  {
    id: uuidv4(),
    name: "Vestido de Fiesta Brillante",
    categoria: "Women's Clothing",
    descripcion: "Vestido de fiesta con detalles brillantes y escote elegante.",
    precio: 179.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Vestido_de_Fiesta_Brillante_shlnoz.jpg",
  },
  {
    id: uuidv4(),
    name: "Bolso de Cuero Genuino",
    categoria: "Women's Clothing",
    descripcion: "Bolso de cuero de alta calidad con espacio amplio.",
    precio: 199.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Bolso_de_Cuero_Genuino_kgg1ru.jpg",
  },
  {
    id: uuidv4(),
    name: "Cámara Réflex Profesional",
    categoria: "Electronics",
    descripcion: "Cámara réflex con capacidad de grabación en 4K.",
    precio: 1499.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/C%C3%A1mara_R%C3%A9flex_Profesional_gb37fr.jpg",
  },
  {
    id: uuidv4(),
    name: "Anillo de Compromiso de Diamantes",
    categoria: "Jewelry",
    descripcion:
      "Anillo de compromiso con diamante central y acentos brillantes.",
    precio: 1999.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Anillo_de_Compromiso_de_Diamantes_nxntcy.jpg",
  },
  {
    id: uuidv4(),
    name: "Blusa Casual de Algodón",
    categoria: "Women's Clothing",
    descripcion: "Blusa casual de algodón con diseño relajado y cómodo.",
    precio: 39.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_Casual_de_Algod%C3%B3n_yjyetc.jpg",
  },
  {
    id: uuidv4(),
    name: "Tablet 10 pulgadas",
    categoria: "Electronics",
    descripcion: "Tablet con pantalla de alta resolución y rendimiento fluido.",
    precio: 299.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282476/API%20REST%20IMAGES/Tablet_10_pulgadas_caebu1.jpg",
  },
  {
    id: uuidv4(),
    name: "Reloj Deportivo Inteligente",
    categoria: "Electronics",
    descripcion:
      "Reloj inteligente con seguimiento de actividad y notificaciones.",
    precio: 129.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Reloj_Deportivo_Inteligente_lmmune.jpg",
  },
  {
    id: uuidv4(),
    name: "Collar de Zafiro Elegante",
    categoria: "Jewelry",
    descripcion: "Collar con zafiro en tonos azules y diseño elegante.",
    precio: 499.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Collar_de_Zafiro_Elegante_gsha9c.jpg",
  },
  {
    id: uuidv4(),
    name: "Chaqueta de Mezclilla Vintage",
    categoria: "Men's Clothing",
    descripcion: "Chaqueta de mezclilla vintage con estilo retro.",
    precio: 89.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Chaqueta_de_Mezclilla_Vintage_qf6l02.jpg",
  },
  {
    id: uuidv4(),
    name: "Pantalones Chinos Clásicos",
    categoria: "Men's Clothing",
    descripcion: "Pantalones chinos de corte clásico y cómodo.",
    precio: 59.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Pantalones_Chinos_Cl%C3%A1sicos_femjee.jpg",
  },
  {
    id: uuidv4(),
    name: "Vestido de Encaje Romántico",
    categoria: "Women's Clothing",
    descripcion: "Vestido de encaje con detalles románticos y femeninos.",
    precio: 149.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Vestido_de_Encaje_Rom%C3%A1ntico_qa47mo.jpg",
  },
  {
    id: uuidv4(),
    name: "Bolso de Mano Elegante",
    categoria: "Women's Clothing",
    descripcion: "Bolso de mano con diseño elegante y practicidad.",
    precio: 79.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Bolso_de_Mano_Elegante_fvxhio.jpg",
  },
  {
    id: uuidv4(),
    name: "Auriculares Inalámbricos Deportivos",
    categoria: "Electronics",
    descripcion:
      "Auriculares inalámbricos diseñados para actividades deportivas.",
    precio: 49.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Auriculares_Inal%C3%A1mbricos_Deportivos_xpcd1g.jpg",
  },
  {
    id: uuidv4(),
    name: "Anillo de Plata Elegante",
    categoria: "Jewelry",
    descripcion: "Anillo de plata con diseño elegante y versátil.",
    precio: 89.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Anillo_de_Plata_Elegante_qsy2bd.jpg",
  },
  {
    id: uuidv4(),
    name: "Blusa de Manga Larga Casual",
    categoria: "Women's Clothing",
    descripcion: "Blusa de manga larga perfecta para un look casual.",
    precio: 34.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_de_Manga_Larga_Casual_ap8b9o.jpg",
  },
  {
    id: uuidv4(),
    name: "Cámara de Acción 4K",
    categoria: "Electronics",
    descripcion: "Cámara compacta de acción con grabación en calidad 4K.",
    precio: 149.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/C%C3%A1mara_de_Acci%C3%B3n_4K_c8tmyh.jpg",
  },
  {
    id: uuidv4(),
    name: "Portátil Convertible 2 en 1",
    categoria: "Electronics",
    descripcion: "Portátil convertible con pantalla táctil y versatilidad.",
    precio: 899.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Port%C3%A1til_Convertible_2_en_1_t687en.jpg",
  },
  {
    id: uuidv4(),
    name: "Pulsera de Perlas y Diamantes",
    categoria: "Jewelry",
    descripcion: "Pulsera elegante con perlas y detalles de diamantes.",
    precio: 279.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Pulsera_de_Perlas_y_Diamantes_zzjler.jpg",
  },
  {
    id: uuidv4(),
    name: "Camiseta Casual Estampada",
    categoria: "Men's Clothing",
    descripcion: "Camiseta casual con estampado moderno y cómodo.",
    precio: 29.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Camiseta_Casual_Estampada_gdpqtk.jpg",
  },
  {
    id: uuidv4(),
    name: "Chaqueta de Cuero Clásica",
    categoria: "Men's Clothing",
    descripcion: "Chaqueta de cuero genuino con estilo atemporal.",
    precio: 199.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Chaqueta_de_Cuero_Cl%C3%A1sica.jpg",
  },
  {
    id: uuidv4(),
    name: "Vestido de Verano Bohemio",
    categoria: "Women's Clothing",
    descripcion: "Vestido bohemio perfecto para los días de verano.",
    precio: 59.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Vestido_de_Verano_Bohemio_ghpdza.webp",
  },
  {
    id: uuidv4(),
    name: "Bolso Tote de Cuero",
    categoria: "Women's Clothing",
    descripcion: "Bolso tote espacioso y versátil de cuero genuino.",
    precio: 149.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Bolso_Tote_de_Cuero_q3osrk.jpg",
  },
  {
    id: uuidv4(),
    name: "Altavoces Bluetooth Estéreo",
    categoria: "Electronics",
    descripcion: "Altavoces Bluetooth con sonido estéreo envolvente.",
    precio: 129.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Altavoces_Bluetooth_Est%C3%A9reo_pyjnei.jpg",
  },
  {
    id: uuidv4(),
    name: "Pendientes de Diamantes Brillantes",
    categoria: "Jewelry",
    descripcion: "Pendientes con diamantes brillantes en diseño elegante.",
    precio: 399.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Pendientes_de_Diamantes_Brillantes_ubjgah.jpg",
  },
  {
    id: uuidv4(),
    name: "Blusa Estampada de Flores",
    categoria: "Women's Clothing",
    descripcion: "Blusa de manga corta con estampado de flores.",
    precio: 44.99,
    urlImagen:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Blusa_Estampada_de_Flores_deo6r2.jpg",
  },
];

export { data };
