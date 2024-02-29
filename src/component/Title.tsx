import React from 'react';

const Title: React.FC = () => {
    return (
        <section className="bg-white mod--banner">
            <div className="p-header__gradient p-header mod--curved image_211350 bg-g-l-c-grey">
                <div className="p-header__cont fade_scroll fade_scroll--active">
                    <h1 className="p-header__title h-xxxxxl">
                        Your best tech partner is homegrown.
                    </h1>
                </div>
                <div className="p-header__cta">
                    <a href="https://player.vimeo.com/video/769280858?autoplay=1" aria-label="Play video" className="btn btn-curious-blue white popup-link">
                        View video
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Title;