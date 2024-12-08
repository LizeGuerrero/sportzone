
import styles from './Header.module.css'; // Estilos locales
import React, { CSSProperties } from 'react';
import Image from 'next/image';

interface CustomCSSProperties extends CSSProperties {
  '--quantity'?: number;
  '--position'?: number;
}

const Header: React.FC = () => {
  return (
   
    <section className={styles.banner}>
    <div className={styles.slider} style={{ '--quantity': 8 } as CustomCSSProperties}>
      <div className={styles.item} style={{ '--position': 1 } as CustomCSSProperties}>
        <Image src="/product14.avif" alt="product 1" width={200} height={300} />
      </div>
      <div className={styles.item} style={{ '--position': 2 } as CustomCSSProperties}>
        <Image src="/product15.avif" alt="product 2" width={200} height={300} />
      </div>
      <div className={styles.item} style={{ '--position': 3 } as CustomCSSProperties}>
        <Image src="/product16.avif" alt="product 3" width={200} height={300} />
      </div>
      <div className={styles.item} style={{ '--position': 4 } as CustomCSSProperties}>
        <Image src="/product17.avif" alt="product 4" width={200} height={300} />
      </div>
      <div className={styles.item} style={{ '--position': 5 } as CustomCSSProperties}>
        <Image src="/product11.avif" alt="product 4" width={200} height={300} />
      </div>
      <div className={styles.item} style={{ '--position': 6 } as CustomCSSProperties}>
        <Image src="/product19.avif" alt="product 4" width={200} height={300} />
      </div>
      <div className={styles.item} style={{ '--position': 7 } as CustomCSSProperties}>
        <Image src="/product6.avif" alt="product 4" width={200} height={300} />
      </div>
      <div className={styles.item} style={{ '--position': 8 } as CustomCSSProperties}>
        <Image src="/product13.avif" alt="product 4" width={200} height={300} />
      </div>
    </div>
  </section>
  );
};

export default Header;
