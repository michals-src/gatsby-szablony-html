import React from 'react';

import $pricing_cards_image from '../../images/pricing-cards-image.png';

const PriceCard = ($props) => {

    let $cn = ($props.special) ? "is-special" : "";

    return (
        <div className="col col12 col4-md m2-b m0-b-md">
            <div className={`card site-pricing--card `+$cn}>
                <div className="p3">
                    <div className="text-center m3-b">
                        <h6 className="site-pricing--card-title">Service plan</h6>
                        <div className="site-pricing--card-price text4 text-700-is">
                            <span>100</span> 
                            <sup>
                            <div className="badge">PLN</div>
                            </sup>
                        </div>
                    </div>
                    <ul className="site-services--pricing-card-list">
                        <li>
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Lorem ipsum dolor sit amet.</li>
                        <li>
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Corporis eaque dignissimos aut repellendus?</li>
                        <li><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Sequi voluptas sapiente laborum architecto.</li>
                        <li><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Nemo quis nisi ullam velit?</li>
                        <li>
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Lorem ipsum dolor sit amet.</li>
                        <li>
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Corporis eaque dignissimos aut repellendus?</li>
                        <li><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Sequi voluptas sapiente laborum architecto.</li>
                        <li>
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                        Nemo quis nisi ullam velit?</li>
                    </ul>
                    <div className="m1-t">
                        <a href="#">
                            <button className="button">Wybierz plan</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Services_pricing(){
    return (
        <div className="p3-x p10-y ">
            <div className="w4-max m-auto">
                <div className="site-content-pricing--cards-2" style={{
                    backgroundImage: 'url(' + $pricing_cards_image + ')'
                }}>
                    <div className="row">
                        <div className="col col12">
                            <div className="w2-max">
                                <p className="text-uppercase m0-b">overline</p>
                                <div className="text4 text2-line m3-b">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                    <div className="col col12 col2-md">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, beatae dolore consequatur id magni optio?</p>
                    </div>
                    <div className="col col12 col10-md">
                            <div className="row">
                                <PriceCard />
                                <PriceCard />
                                <PriceCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}