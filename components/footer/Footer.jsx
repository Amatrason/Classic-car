import { MOCK_SOCIALS } from "./constants"
import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__socials">
                    {MOCK_SOCIALS.map(({ title, url }, i) => (
                        <a href={url} className="footer__social" key={`footer-social-${title}-${i}`}>{title}</a>
                    ))}
                </div>
            </div>
        </footer>
    )
}