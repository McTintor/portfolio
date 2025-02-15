import { useSelector } from 'react-redux';
import './Footer.css'


const Footer = () => {

    const theme = useSelector((state) => state.theme.darkMode);
    const themeColor = theme ? "light" : "dark";


    return (
        <>
            <footer className={`${themeColor}`}>
                <p>
                    <a href="https://github.com/McTintor">
                        &copy; Igor Tintor 2025 
                    </a>
                </p>
            </footer>
        </>
    )

}

export default Footer;