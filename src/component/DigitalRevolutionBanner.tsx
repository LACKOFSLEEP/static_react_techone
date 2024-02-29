import React from 'react';

const DigitalRevolutionBanner: React.FC = () => {
    return (
        <section className="animato animato--right">
            <div className="animato-container">
                <div className="animato__text fade_scroll fade_scroll--active">
                    <h2 className="animato__text__header h-xxxl">Enabling a digital revolution</h2>
                    <div title="Page 33">
                        <p>
                            SaaS transforms the way organisations interact with their customers and communities with access to their enterprise data from any device, anywhere, at any time.
                        </p>
                    </div>
                </div>
                <div className="animato--right class anim_3layer anim_3layer--texture-circle t-b t-c-grey fade_scroll fade_scroll--active" data-cb-scroll="ani_3layer_scroll">
                    <img src="https://www.technologyonecorp.com/__data/assets/file/0005/239909/CiA_mobile.webp" className="anim_square_img no-filter" style={{ top: '0.8%' }} alt="" width="500px" height="500px" />
                </div>
            </div>
        </section>
    );
};

export default DigitalRevolutionBanner;