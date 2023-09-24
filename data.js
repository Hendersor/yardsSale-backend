const { v4: uuidv4 } = require("uuid");
let data = [
  {
    id: uuidv4(),
    title: "Galaxy S21 Smartphone",
    category: "Electronics",
    description: "Powerful smartphone with a high-resolution camera.",
    price: 799.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Smartphone_Galaxy_S21.jpg",
  },
  {
    id: uuidv4(),
    title: "55-Inch 4K Smart TV",
    category: "Electronics",
    description:
      "Television with 4K resolution and built-in Smart TV capabilities",
    price: 699.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Smart_TV_4K_55_pulgadas.jpg",
  },
  {
    id: uuidv4(),
    title: "X1 Ultrabook Laptop",
    category: "Electronics",
    description: "Ultra-slim and powerful laptop for professionals.",
    price: 1299.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Laptop_Ultrabook_X1.jpg",
  },
  {
    id: uuidv4(),
    title: "Pro Wireless Headphones",
    category: "Electronics",
    description: "Premium headphones with noise cancellation",
    price: 249.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Auriculares_Inal%C3%A1mbricos_Pro_a0twvr.jpg",
  },
  {
    id: uuidv4(),
    title: "Automatic Luxury Watch",
    category: "Jewelry",
    description: "Stylish automatic watch with a leather strap.",
    price: 599.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Reloj_de_Lujo_Autom%C3%A1tico_jctbfj.jpg",
  },
  {
    id: uuidv4(),
    title: "Natural Pearl Necklace",
    category: "Jewelry",
    description: "High-quality cultured pearl necklace.",
    price: 349.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Collar_de_Perlas_Naturales_qgqki4.jpg",
  },
  {
    id: uuidv4(),
    title: "Classic Dress Shirt",
    category: "Men's Clothing",
    description: "Cotton dress shirt with a classic fit.",
    price: 79.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Camisa_de_Vestir_Cl%C3%A1sica_yzno96.jpg",
  },
  {
    id: uuidv4(),
    title: "Slim Fit Jeans",
    category: "Men's Clothing",
    description: "Tight-fitting jeans with a modern design",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Vaqueros_Slim_Fit_ieuysr.jpg",
  },
  {
    id: uuidv4(),
    title: "Elegant Evening Dress",
    category: "Women's Clothing",
    description: "Elegant dress for special occasions",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Vestido_Elegante_de_Noche_ui6lbp.jpg",
  },
  {
    id: uuidv4(),
    title: "Printed Silk Blouse",
    category: "Women's Clothing",
    description: "Silk blouse with floral print and sophisticated style",
    price: 119.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_de_Seda_Estampada_bpaa9v.jpg",
  },
  {
    id: uuidv4(),
    title: "34-Inch Curved Monitor",
    category: "Electronics",
    description: "Ultrawide curved monitor for an immersive experience.",
    price: 899.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Monitor_Curvo_34_pulgadas_bdcc4s.jpg",
  },
  {
    id: uuidv4(),
    title: "Portable Bluetooth Speaker",
    category: "Electronics",
    description: "Wireless speaker with high-quality sound.",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Altavoz_Bluetooth_Port%C3%A1til_fnwplm.jpg",
  },
  {
    id: uuidv4(),
    title: "Radiant Diamond Necklace",
    category: "Jewelry",
    description: "Necklace with radiant diamonds in an elegant design.",
    price: 1299.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Collar_de_Diamantes_Radiantes_t1unpg.jpg",
  },
  {
    id: uuidv4(),
    title: "Classic Dress Suit",
    category: "Men's Clothing",
    description: "Complete dress suit with jacket and pants.",
    price: 399.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Traje_de_Vestir_Cl%C3%A1sico_kmz6fv.jpg",
  },
  {
    id: uuidv4(),
    title: "Polarized Sunglasses",
    category: "Men's Clothing",
    description: "Sunglasses with polarized lenses and modern style.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Gafas_de_Sol_Polarizadas_ipkccc.jpg",
  },
  {
    id: uuidv4(),
    title: "Shiny Party Dress",
    category: "Women's Clothing",
    description: "Party dress with shiny details and elegant neckline.",
    price: 179.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Vestido_de_Fiesta_Brillante_shlnoz.jpg",
  },
  {
    id: uuidv4(),
    title: "Genuine Leather Handbag",
    category: "Women's Clothing",
    description: "High-quality leather handbag with ample space.",
    price: 199.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Bolso_de_Cuero_Genuino_kgg1ru.jpg",
  },
  {
    id: uuidv4(),
    title: "Professional DSLR Camera",
    category: "Electronics",
    description: "DSLR camera with 4K recording capability.",
    price: 1499.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/C%C3%A1mara_R%C3%A9flex_Profesional_gb37fr.jpg",
  },
  {
    id: uuidv4(),
    title: "Diamond Engagement Ring",
    category: "Jewelry",
    description: "Engagement ring with central diamond and brilliant accents.",
    price: 1999.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Anillo_de_Compromiso_de_Diamantes_nxntcy.jpg",
  },
  {
    id: uuidv4(),
    title: "Casual Cotton Blouse",
    category: "Women's Clothing",
    description: "Casual cotton blouse with a relaxed and comfortable design.",
    price: 39.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Blusa_Casual_de_Algod%C3%B3n_yjyetc.jpg",
  },
  {
    id: uuidv4(),
    title: "10-Inch Tablet",
    category: "Electronics",
    description: "Tablet with high-resolution screen and smooth performance.",
    price: 299.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282476/API%20REST%20IMAGES/Tablet_10_pulgadas_caebu1.jpg",
  },
  {
    id: uuidv4(),
    title: "Smart Sports Watch",
    category: "Electronics",
    description: "Smartwatch with activity tracking and notifications.",
    price: 129.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Reloj_Deportivo_Inteligente_lmmune.jpg",
  },
  {
    id: uuidv4(),
    title: "Elegant Sapphire Necklace",
    category: "Jewelry",
    description: "Necklace with sapphire in blue tones and elegant design.",
    price: 499.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Collar_de_Zafiro_Elegante_gsha9c.jpg",
  },
  {
    id: uuidv4(),
    title: "Vintage Denim Jacket",
    category: "Men's Clothing",
    description: "Vintage denim jacket with a retro style.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Chaqueta_de_Mezclilla_Vintage_qf6l02.jpg",
  },
  {
    id: uuidv4(),
    title: "Classic Chino Pants",
    category: "Men's Clothing",
    description: "Classic and comfortable chino pants.",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282471/API%20REST%20IMAGES/Pantalones_Chinos_Cl%C3%A1sicos_femjee.jpg",
  },
  {
    id: uuidv4(),
    title: "Romantic Lace Dress",
    category: "Women's Clothing",
    description: "Lace dress with romantic and feminine details.",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282474/API%20REST%20IMAGES/Vestido_de_Encaje_Rom%C3%A1ntico_qa47mo.jpg",
  },
  {
    id: uuidv4(),
    title: "Elegant Handbag",
    category: "Women's Clothing",
    description: "Handbag with an elegant design and practicality.",
    price: 79.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Bolso_de_Mano_Elegante_fvxhio.jpg",
  },
  {
    id: uuidv4(),
    title: "Wireless Sports Earbuds",
    category: "Electronics",
    description: "Wireless earbuds designed for sports activities.",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Auriculares_Inal%C3%A1mbricos_Deportivos_xpcd1g.jpg",
  },
  {
    id: uuidv4(),
    title: "Elegant Silver Ring",
    category: "Jewelry",
    description: "Silver ring with an elegant and versatile design.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Anillo_de_Plata_Elegante_qsy2bd.jpg",
  },
  {
    id: uuidv4(),
    title: "4K Action Camera",
    category: "Electronics",
    description: "Compact action camera with 4K quality recording.",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/C%C3%A1mara_de_Acci%C3%B3n_4K_c8tmyh.jpg",
  },
  {
    id: uuidv4(),
    title: "2-in-1 Convertible Laptop",
    category: "Electronics",
    description: "Convertible laptop with a touchscreen and versatility.",
    price: 899.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282470/API%20REST%20IMAGES/Port%C3%A1til_Convertible_2_en_1_t687en.jpg",
  },
  {
    id: uuidv4(),
    title: "Pearl and Diamond Bracelet",
    category: "Jewelry",
    description: "Elegant bracelet with pearls and diamond details.",
    price: 279.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Pulsera_de_Perlas_y_Diamantes_zzjler.jpg",
  },
  {
    id: uuidv4(),
    title: "Casual Printed T-Shirt",
    category: "Men's Clothing",
    description: "Casual t-shirt with a modern and comfortable print.",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Camiseta_Casual_Estampada_gdpqtk.jpg",
  },
  {
    id: uuidv4(),
    title: "Classic Leather Jacket",
    category: "Men's Clothing",
    description: "Genuine leather jacket with timeless style.",
    price: 199.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Chaqueta_de_Cuero_Cl%C3%A1sica.jpg",
  },
  {
    id: uuidv4(),
    title: "Bohemian Summer Dress",
    category: "Women's Clothing",
    description: "Perfect bohemian dress for summer days.",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282475/API%20REST%20IMAGES/Vestido_de_Verano_Bohemio_ghpdza.webp",
  },
  {
    id: uuidv4(),
    title: "Leather Tote Bag",
    category: "Women's Clothing",
    description: "Spacious and versatile genuine leather tote bag.",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282472/API%20REST%20IMAGES/Bolso_Tote_de_Cuero_q3osrk.jpg",
  },
  {
    id: uuidv4(),
    title: "Stereo Bluetooth Speakers",
    category: "Electronics",
    description: "Bluetooth speakers with immersive stereo sound.",
    price: 129.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282468/API%20REST%20IMAGES/Altavoces_Bluetooth_Est%C3%A9reo_pyjnei.jpg",
  },
  {
    id: uuidv4(),
    title: "Sparkling Diamond Earrings",
    category: "Jewelry",
    description: "Earrings with sparkling diamonds in an elegant design.",
    price: 399.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282467/API%20REST%20IMAGES/Pendientes_de_Diamantes_Brillantes_ubjgah.jpg",
  },
  {
    id: uuidv4(),
    title: "Floral Printed Blouse",
    category: "Women's Clothing",
    description: "Short-sleeve blouse with a floral print.",
    price: 44.99,
    image:
      "https://res.cloudinary.com/dwdz4mn27/image/upload/v1693282473/API%20REST%20IMAGES/Blusa_Estampada_de_Flores_deo6r2.jpg",
  },
];

module.exports = { data };
