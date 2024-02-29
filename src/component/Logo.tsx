import React from 'react';

const Logo: React.FC = () => {
    return (
        <section className="logo-cont bg-grey--light">
            <ul className="custom_scroll custom_scroll--active loaded">
                <li>
                    <img
                        src="https://www.technologyonecorp.com/__data/assets/image/0003/115095/Seven-West-Media-k.png"
                        alt="Seven West Media"
                        data-context="Default Context - AU"
                    />
                </li>
                <li>
                    <img
                        src="https://www.technologyonecorp.com/__data/assets/image/0017/114137/Victoria-University-k.png"
                        alt="Victoria University"
                        data-context="Default Context - AU"
                    />
                </li>
                <li>
                    <img
                        src="https://www.technologyonecorp.com/__data/assets/image/0010/114130/University-of-Melbourne-k.png"
                        alt="University of Melbourne"
                        data-context="Default Context - AU"
                    />
                </li>
                <li>
                    <img
                        src="https://www.technologyonecorp.com/__data/assets/image/0018/111276/Tilt-Renewables-k.png"
                        alt="Tilt Renewables"
                        data-context="Default Context - AU"
                    />
                </li>
                <li>
                    <img
                        src="https://www.technologyonecorp.com/__data/assets/image/0006/119067/Royal-Flying-Doctors-k.png"
                        alt="Royal Flying Doctors"
                        data-context="Default Context - AU"
                    />
                </li>
                <li>
                    <img
                        src="https://www.technologyonecorp.com/__data/assets/image/0010/114958/GWM-water-k.png"
                        alt="GWM Water"
                        data-context="Default Context - AU"
                    />
                </li>
            </ul>
            <a
                href="/resources/search?mode=results&amp;queries_industry_query=&amp;queries_resource_type_query=2"
                className="logo-cont__link link-arrow link-arrow--center t-east-b t-b"
                style={{textDecoration: 'none'}}
            >
                Customer success stories
            </a>
        </section>
    );
};

export default Logo;