import React from 'react';

const Gallery: React.FC = () => {
    return (
        <>
            <section className="sml-gallery sml-gallery--reversed bg-dark t-c-white">
                <h2 className="sml-gallery__header h-xxxl">Transforming business, making life simple</h2>
                <div className="sml-gallery__intro">We build and deliver truly great products and services that transform business and make life simple for our customers.</div>
            </section>
            <section className="simple-b t-c-white simple-b--sml-img simple-b--reversed bg-dark shrink-bottom-xl shrink-top-xl">
                <div className="simple-b__cont-cont">
                    <div className="simple-b__cont">
                        <div className="simple-b__left fade_scroll">
                            <h2 className="simple-b__left__head h-xxl">The Power of One</h2>
                            <div className="simple-b__left__par">
                                <p className="simple-b__left__par__text">One vision. One vendor. One code-line. One experience. We do not use implementation partners or value added resellers. We take complete responsibility for building, marketing, selling, implementation and supporting our enterprise solution for each customer to guarantee long term success.</p>
                            </div>
                        </div>
                        <div className="simple-b__right fade_scroll fade_scroll--slow image_124731 fade_scroll--active"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;