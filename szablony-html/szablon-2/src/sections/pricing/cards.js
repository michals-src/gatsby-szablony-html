import React from 'react';


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

export default function Pricing_cards(){
    return (
        <div className="p3-x p0-x-xl">
            <div className="w4-max m-auto">
                <div className="row">
                    <PriceCard />
                    <PriceCard special={true} />
                    <PriceCard />
                </div>
            </div>
            <div className="site-pricing--sample1 w4-max m-auto">
                <div className="m10-y p2">
                    <div className="row">
                        <div className="col col6 p3-r-md p4-r-xl m3-t">
                            <p className="text-uppercase m0-b">about</p>
                            <h2 className="text-400-is m2-b">Lorem ipsum dolor sit amet.</h2>
                            <p className="text8">Oferujemy konkurencyjne stawki oraz niesamowite plany usług, aby pomóc Tobie znaleźć ten, który będzie sprostał Twoim wymaganiom i budżetowi. W przypadku, gdy nie jesteś pewny, który plan wybrać, nie martw się, zawsze możliwa jest opcja otrzymania zwrotu.</p>
                        </div>
                        <div className="col col5 offset1 p3-l-md p4-l-xl m3-t">
                            
                            
                            <div className="d-is-flex flex-fd-row flex-ai-flex-top">
                                <div className="icon m1-r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                                <p>Business Architecture</p>
                            </div>
                            <div className="d-is-flex flex-fd-row flex-ai-flex-top">
                                <div className="icon m1-r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                                <p>Cognitive Architecture</p>
                            </div>
                            <div className="d-is-flex flex-fd-row flex-ai-flex-top">
                                <div className="icon m1-r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                                <p>Interior Architecture</p>
                            </div>
                            <div className="d-is-flex flex-fd-row flex-ai-flex-top">
                                <div className="icon m1-r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                                <p>Landscape Architecture</p>
                            </div>
                            <div className="d-is-flex flex-fd-row flex-ai-flex-top">
                                <div className="icon m1-r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                                <p>UI/UX designs</p>
                            </div>
                            <div className="d-is-flex flex-fd-row flex-ai-flex-top">
                                <div className="icon m1-r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28,41a2.49,2.49,0,0,1-1.77-.73L19.29,33.3a.51.51,0,0,1,0-.71l1.42-1.41a.48.48,0,0,1,.7,0l6.24,6.23a.48.48,0,0,0,.7,0L42.59,23.18a.48.48,0,0,1,.7,0l1.42,1.41a.51.51,0,0,1,0,.71L29.77,40.24A2.49,2.49,0,0,1,28,41Z"/></svg></div>
                                <p>SEO marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}