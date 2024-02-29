import React from 'react';

const AskUs: React.FC = () => {
    return (
        <section className="contact-snippet bg-grey--light">
            <div className="contact-snippet__cont">
                <div className="contact-snippet__left bg-b-l">
                    <img src="https://www.technologyonecorp.com/__data/assets/image/0018/122526/Contact.png" alt="Contact Us Agent - TechnologyOne" />
                </div>
                <div className="contact-snippet__right">
                    <h2 className="contact-snippet__right__header h-xxxl">Have a question?</h2>
                    <div className="contact-snippet__right__text h-m">If you would like more information, we are here to help.</div>
                    <div className="contact-snippet__right__cta">
                        <a href="https://www.technologyonecorp.com/company/contact-us" className="btn btn--sml btn-c-grey">Contact us</a>
                    </div>
                </div>
            </div>
            <div className="contact-snippet__quote contact-snippet__quote--up t-b"></div>
        </section>
    );
};

export default AskUs;