import React from 'react';

export default function Contact_details(){
    return (
        <div className="site-content-contact--details">
            <div className="row">
                <div className="col col12 col6-md col7-lg">
                    <div className="card site-content-contact--details-map">
                        <iframe style={{border: '0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50941.78403102485!2d20.98245959241435!3d52.29123134057808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1619084744003!5m2!1spl!2spl" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="col col12 col6-md col5-lg">
                    <div className="card">
                        <div className="p4">
                            <div className="text6">Warszawa, Polska</div>
                            <div className="text8 m1-t">ul. Łąkowa 6 lokal 19</div>
                            <div className="m3-t">
                                <p className="text8">
                                    <div className="d-is-flex flex-fd-row">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                            </svg>
                                        </div>
                                        <p className="text8 m1-l">adres@email.com</p>
                                    </div>
                                </p>
                            </div>
                            <div className="m2-t">
                                <div className="text8">Dzwoń bezpośrednio</div>
                                <h1>+48 500 600 700</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}