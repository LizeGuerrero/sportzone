"use client"; // Indica que este componente se ejecutará en el cliente

import React from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';

interface ProductCardProps {
  nameProduct: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ nameProduct, description, image, price }) => {
  // Formateo del precio como moneda
  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP', // O 'USD' dependiendo de tu moneda
  }).format(price);

  // Crear la ventana emergente al hacer clic en "Mostrar Detalles"
  const showDetails = () => {
    Swal.fire({
      title: nameProduct,
      text: `Descripción: ${description}\nPrecio: ${formattedPrice}`,
      imageUrl: image,
      imageWidth: 450,
      imageHeight: 300,
      confirmButtonText: 'Comprar ahora',
    });
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Imagen del producto */}
        <Image
          src={image}
          alt={nameProduct}
          className="card-img-top"
          width={450}
          height={300}
        />
        
        {/* Detalles del producto */}
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{nameProduct}</h5>
            <p>{formattedPrice}</p>
          </div>
        </div>

        {/* Acciones del producto */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button 
              className="btn btn-outline-dark mt-auto" 
              onClick={showDetails} // Evento onClick que se ejecuta en el cliente
            >
              Mostrar Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
