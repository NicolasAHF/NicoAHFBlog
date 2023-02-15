import Script from 'next/script'
import classes from './Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      <p>nicolashernandezf22@gmail.com</p>
      <p>Copyright &copy; NicoAHF 2023</p>
      <div className={classes.social}>
        <Link href="https://instagram.com/nicoh32?igshid=NmQ2ZmYxZjA="><ion-icon name="logo-instagram" color="primary"></ion-icon></Link>
        <Link href="https://www.linkedin.com/in/nicolas-hernandez-b9391818a"><ion-icon name="logo-linkedin" color="primary"></ion-icon></Link>
      </div>
    </footer>
  );
}

export default Footer;
