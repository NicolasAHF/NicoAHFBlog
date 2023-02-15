import Link from 'next/link';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
      <Link href="/" className='logo'><h1>NICOAHF</h1></Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/blog">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
