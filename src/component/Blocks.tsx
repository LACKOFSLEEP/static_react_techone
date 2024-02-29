import React from 'react';

const Blocks: React.FC = () => {
    const Block: React.FC<{emphasis: string, text: string}> = ({ emphasis, text }): JSX.Element => (
        <li className="iconic-blocks__blocks__block">
            <div className="iconic-blocks__blocks__block__img" style={{ backgroundImage: "url('https://www.technologyonecorp.com?a=109825:v1')" }}></div>
            <h3 className="iconic-blocks__blocks__block__header t-e" style={{ textAlign: 'left' }}><a href="https://technologyonecorp.com/industries/education">Education</a></h3>
            <div className="iconic-blocks__blocks__block__content">
                <strong>{emphasis}</strong><br /><br />
                {text}
            </div>
            <div className="iconic-blocks__blocks__block__link"><a href="https://www.technologyonecorp.com/industries/education" className="btn btn--sml btn-e">Find out more</a></div>
        </li>
    );

    const CONTENTS = [
        {
            emphasis: 'Empowering over 1.4 million students globally, and mobilising over 60 per cent of ANZ universities.',
            text: 'Provide a simple and engaging experience for students and staff and manage your institution\'s critical information with confidence, so you can focus on driving student success.'
        },
        {
            emphasis: '73% of Australian and New Zealand residents live in a council powered by TechnologyOne.',
            text: 'Reduce costs, improve efficiency and streamline processes through end-to-end management of council operations.'
        },
        {
            emphasis: 'Trusted by 1 in 4 public sector organisations across ANZ.',
            text: 'Reduce risk, automate compliance and auditability, improve efficiency and streamline processes through end-to-end management of government operations.'
        },
        {
            emphasis: 'Empowering over 150 health and community services organisations.',
            text: 'Operate in an increasingly complex and competitive environment while maintaining financial sustainability, so you can focus on better health outcomes.'
        },
        {
            emphasis: 'Managing over $300 billion worth of assets and infrastructure.',
            text: 'Deliver faster, smarter field services for asset management and project delivery.<br />Reduce costs, remove complexity and streamline processes with one integrated solution.'
        },
        {
            emphasis: 'Managing over $30 billion in funds.',
            text: 'Streamline the day-to-day running and strategic goals of your organisation by effectively managing financials, budgeting, clients, billing, employees and assets.'
        }
    ]

    return (
        <section className="iconic-blocks iconic-blocks--pop iconic-blocks--standalone bg-bluish--g">
            <div className="iconic-blocks__top">
                <h2 className="iconic-blocks__head h-xxl t-b">Deepest functionality for the markets we serve</h2>
                <div className="iconic-blocks__intro">A deep understanding and engagement with our key markets means we can deliver to our customers integrated, preconfigured solutions that provide proven practice, streamline implementations and reduce time, cost and risk.</div>
            </div>
            <ul className="iconic-blocks__blocks iconic-blocks__blocks--cta">
                {CONTENTS.map((content, index) => (
                    <Block key={index} { ...content } />
                ))}
            </ul>
        </section>
    );
};

export default Blocks;