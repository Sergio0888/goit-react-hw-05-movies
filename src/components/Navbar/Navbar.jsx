import styles from './navbar.module.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <NavbarMenu />
            </div>
        </nav>
    )
}

export default Navbar;