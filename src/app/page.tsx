import ProductCard from "@/app/components/ProductCard";  // Importa las tarjetas de producto
import MainLayout from "@/app/layouts/MainLayout";  // Importa el layout
import styles from "./page.module.css";  // Importa los estilos de la página


export default function Home() {
  // Array de productos
  const products = [
    { id: 1, nameProduct: "Product 1", description: "This is a great product", price: 20, image: "/A1.webp" },
    { id: 2, nameProduct: "Product 2", description: "This is another great product", price: 30, image: "/A2.webp" },
    { id: 3, nameProduct: "Product 3", description: "Top quality item", price: 50, image: "/product3.avif" },
  { id: 4, nameProduct: "Product 4", description: "A must-have product", price: 40, image: "/product4.avif" },
  { id: 5, nameProduct: "Product 5", description: "Perfect for everyday use", price: 25, image: "/product5.avif" },
  { id: 6, nameProduct: "Product 6", description: "Durable and reliable", price: 60, image: "/product6.avif" },
  { id: 7, nameProduct: "Product 7", description: "Affordable and stylish", price: 35, image: "/product7.avif" },
  { id: 8, nameProduct: "Product 8", description: "Great value for money", price: 45, image: "/product8.avif" },
  { id: 9, nameProduct: "Product 9", description: "High-end performance", price: 75, image: "/product9.avif" },
  { id: 10, nameProduct: "Product 10", description: "Perfect for sports enthusiasts", price: 55, image: "/product10.avif" },
  { id: 11, nameProduct: "Product 11", description: "Ideal for outdoor adventures", price: 50, image: "/product11.avif" },
  { id: 12, nameProduct: "Product 12", description: "Great for home use", price: 30, image: "/product12.avif" },
  { id: 13, nameProduct: "Product 13", description: "Luxury and comfort combined", price: 100, image: "/product13.avif" },
  { id: 14, nameProduct: "Product 14", description: "Ultimate quality product", price: 80, image: "/product14.avif" },
  { id: 15, nameProduct: "Product 15", description: "Stylish and efficient", price: 45, image: "/product15.avif" },
  { id: 16, nameProduct: "Product 16", description: "Trendy and functional", price: 40, image: "/product16.avif" },
  { id: 17, nameProduct: "Product 17", description: "Perfect for the tech enthusiast", price: 90, image: "/product17.avif" },
  { id: 18, nameProduct: "Product 18", description: "Sleek and modern design", price: 85, image: "/product18.avif" },
  { id: 19, nameProduct: "Product 19", description: "Affordable and durable", price: 25, image: "/product19.avif" },
  { id: 20, nameProduct: "Product 20", description: "Great for outdoor activities", price: 55, image: "/product20.avif" },
  ];

  return (
    <MainLayout>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Welcome to SportZone</h1>

          {/* Sección de productos */}
          <div className={styles.productSection}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <ProductCard
                    nameProduct={product.nameProduct}
                    description={product.description}
                    price={product.price}
                    image={product.image}  // Pasando la ruta de la imagen
                  />
                </div>
              ))};
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );

}
