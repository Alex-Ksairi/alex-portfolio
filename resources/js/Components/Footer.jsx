export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                <span className="footer__copyright">
                    © {new Date().getFullYear()} Alex Ksairi
                </span>

                <span className="footer__status">
                    Built with Laravel & React
                </span>

                <div className="footer__links">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="#top">
                        Back to top ↑
                    </a>
                </div>

            </div>
        </footer>
    );
}