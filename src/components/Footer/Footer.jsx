import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Made with Next Js </div>
      <div className={styles.socialIcon}>
        <Image
          src="/1.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="social-icon"
        />
        <Image
          src="/2.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="social-icon"
        />
        <Image
          src="/3.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="social-icon"
        />
        <Image
          src="/4.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="social-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
