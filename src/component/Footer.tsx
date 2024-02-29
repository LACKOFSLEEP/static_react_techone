import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <section className="footer__links__section">
                    <ul>
                        <li>
                            <a href="">About us</a>
                        </li>
                        <li>
                            <a href="">Foundation</a>
                        </li>
                        <li>
                            <a href="">Investors</a>
                        </li>
                        <li>
                            <a href="">Careers</a>
                        </li>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                    </ul>
                </section>
                <section className="footer__links__section">
                    <ul>
                        <li>
                            <a href="">Case Studies</a>
                        </li>
                        <li>
                            <a href="">Articles</a>
                        </li>
                        <li>
                            <a href="">Media Releases</a>
                        </li>
                        <li>
                            <a href="">Media Kit</a>
                        </li>
                        <li>
                            <a href="">Support & Training</a>
                        </li>
                    </ul>
                </section>
                <section className="footer__links__section">
                    <ul>
                        <li>
                            <a href="">Global SaaS ERP Solution</a>
                        </li>
                        <li>
                            <a href="">Security & Trust</a>
                        </li>
                        <li>
                            <a href="">Customer Community</a>
                        </li>
                        <li>
                            <a href="">Enterprise App Store</a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__notice">
                    <ul>
                        <li>
                            <a href="">Terms of use</a>
                        </li>
                        <li>
                            <a href="">Privacy policy</a>
                        </li>
                    </ul>
                    <div>
                        © 2024 TechnologyOne Limited | ABN: 84 010 487 180 | All rights reserved.
                    </div>
                </div>
                <div className="footer__bottom__social">
                    {['linkedin', 'twitter', 'facebook', 'instagram'].map((socialMedia) => (
                        <a key={socialMedia} target="_blank" href="">
                            <button type="button" role="button" aria-label={socialMedia} className={`footer__bottom__social__btn ${socialMedia}`}>
                                {socialMedia}
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;