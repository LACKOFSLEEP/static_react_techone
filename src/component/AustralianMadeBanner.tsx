import React from 'react';

const AustralianMadeBanner: React.FC = () => {
    return (
        <section className="t-c-white bg-homegrown shrink-bottom-l shrink-top-l">
            <div className="simple-b__cont-cont">
                <div className="simple-b__cont">
                    <div className="simple-b__left fade_scroll fade_scroll--active">
                        <h2 className="simple-b__left__head h-xxxxl">Solutions that are Australian-made.</h2>
                        <div className="simple-b__left__par">
                            <p className="simple-b__left__par__text">TechnologyOne R&amp;D is based here, with teams dedicated to solving Australian problems first and meeting the unique needs of local industries and government. Our SaaS solutions are IRAP assessed with data stored locally to ensure you meet Australian industry standards.</p>
                        </div>
                        <div className="simple-b__left__par__btn">
                            <a href="https://www.technologyonecorp.com/company/about-us/homegrown" aria-label="Read more" className="btn btn-homegrown-light">Learn more</a>
                        </div>
                    </div>
                    <div className=" fade_scroll fade_scroll--slow fade_scroll--active">
                        <img src="https://www.technologyonecorp.com/__data/assets/file/0013/211450/Australian_made.svg" width="500" height="300" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AustralianMadeBanner;