import React from 'react'

import '../../../scss/global.scss';

/**
 * Plan tworzenia podstron
 * 
 * Home -- składa się z 
 *              - kilku własnych sekcji
 *              - różnych sekcji podstron (wizualnie lekko zmodyfikowanych 
 *                  (np. dodanie jakiegoś elementu do gotowego elementu))
 * 
 * podstrony -- głownie wpsólny hero
 *      - składa się z
 *          - własnych sekcji
 *          - może jakiś wspólnych komponentów typu cta, testimonial, formularz kontaktowy itp.
 * 
 * 
 * site-navbar - nawigacja główna
 * site-footer - stopka strony wszędzie taka sama
 * 
 * 
 * 
 * 
 * 
 * 
 *  Kroki tworzenia szablonu html do sklepu
 *      1. Utworzenie głównych elementów (odpowiadających podstronom 
 *          np. element sekcja o nas dla podstrony o nas), 
 *          komponentów (które mogą, się powtarzać na podstronach, ale nie muszą)
 *          CEL TWORZENIA TEGO, MOŻLIWOŚĆ WYKORZYSTYWANIA ELEMENTÓW PODSTRON 
 *              ( SPERSONALIZOWANYCH DLA KONKRETNEJ PODSTRONY NP. ( ELEMENT SEKCJA O NAS DLA PODSTRONY ABOUT ) ) 
 *          NA INNYCH PODSTRONACH
 * 
 *          - Features
 *          - Team
 *          - O nas (sekcja z opisem)
 *          - Usługi
 *          - Cennik
 *          - Dane kontaktowe
 *          - Formularz kontaktowy
 *          - Ikony social
 *          - cta
 *          - testimonial
 *      
 *      TWORZENIE ELEMENTÓW Z FOCUSEM O WYGLĄDZIE NA DOCELOWEJ STRONIE, 
 *      ZAMIAST MARTWIĆ SIĘ O UNIWERSALNOŚCI NA INNYCH PODSTRONACH
 *      ( zawsze można lekko zmienić dodając nowe klasy, aby dopasować do innej podstrony niż docelowa )
 * 
 *      2. Dla poszczególnych stron dobrać odpowiednie elementy i je wizualnie zmodyfikować
 *          - np. element cennik na innej podstronie niż cennik wybrać 3-4 karty 
 *            i dodać do jako sekcja np. razem opisem z boku
 *          - proces postępowania dla każego elementu taki sam
 * 
 *  Zamysł tworzenia strony
 *      Homepage - hero + features 
 *                 + (opcjonalnie) oryginalne sekcje nie powtarzające się na innych podstronach 
 *                 + kilka zmodyfikowanych elementów mających np. przycisk do przejść do docelowej podstrony
 *      Podstrona - hero dla podstrony
 *                 + element główny np. podstrona about - element o nas itp. ! nie zmodyfikowany !
 *                 + (opcjonalnie) oryginalne sekcje nie powtarzające się na innych podstronach
 *                 + kilka zmodyfikowanych elementów mających np. przycisk do przejść do docelowej podstron
 * 
 * 
 * 
 * 
 */

import Site_navbar from '../components/site-navbar';
import Site_footer from '../components/site-footer';

import Services_features2 from '../components/services/features-2';
import About_mission2 from '../components/about/mission2';
import Portfolio_standard from '../components/portfolio/standard';
import About_colaboration from '../components/about/colaboration';
import Testimonials2 from '../components/shared/testimonials2';

export  default function Home() {
    return (
        
        <>

            <div className="site-header"> 
                <div className="site-header-navbar">
                    <div className="w5-max w6-max-3xl m-auto p-gaps">
                        <Site_navbar />
                    </div>
                </div>

                <div className="site-header-hero--main">
                    <div className="site-header-hero--main-left p3-b p5-b-lg">
                        <ul>
                            <li><a href="#">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                        </svg>
                                    </div>
                            </a></li>
                            <li><a href="#">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                        </svg>
                                    </div>
                            </a></li>
                            <li><a href="#">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                        </svg>
                                    </div>
                            </a></li>
                        </ul>
                    </div>
                    <div className="site-header-hero--main-slider">
                        <ul className="site-header-hero--main-list">
                            <li style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1604782206219-3b9576575203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1843&q=80")'
                            }}>
                                <div className="site-header-hero--main-text d-is-flex flex-ai-center">
                                    <div className="w5-max m-auto p4 p8-lg">
                                        <h6 className="text8">Szybkość pracy i lepsza jakość</h6>
                                        <h1 className="text3">Kreatywna wizja <div>& cyfrowe udogodnienia</div></h1>
                                        <div className="m5-t">
                                            <a href="#" className="button">
                                                <div className="icon icon32">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                                                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                                                    </svg>
                                                </div>
                                                <span>Szczegóły</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="site-header-hero--main-nav p5-x">
                            <div className="site-header-hero--main-nav-item" data-direction="prev">
                                <div className="icon64">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M24.6,24h0a1,1,0,0,1,0,1.42L19,31H47.6a1,1,0,0,1,1,1h0a1,1,0,0,1-1,1H19l5.59,5.58a1,1,0,0,1,0,1.42h0a1,1,0,0,1-1.42,0l-7.64-7.65a.5.5,0,0,1,0-.7L23.18,24A1,1,0,0,1,24.6,24Z"/></svg>
                                </div>
                            </div>
                            <div className="site-header-hero--main-nav-item" data-direction="next">
                                <div className="icon64">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M39.4,40h0a1,1,0,0,1,0-1.42L45,33H16.4a1,1,0,0,1-1-1h0a1,1,0,0,1,1-1H45L39.4,25.42a1,1,0,0,1,0-1.42h0a1,1,0,0,1,1.42,0l7.64,7.65a.5.5,0,0,1,0,.7L40.82,40A1,1,0,0,1,39.4,40Z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <div className="site-content">
                
                <div className="w4-max m-auto p3-x m15-t m10-b">
                    <Services_features2 />
                </div>

                <div className="w4-max m-auto p3-x m10-t">
                    <About_mission2 />
                </div>

                <div className="w5-max m-auto p3-x m10-t">
                    <Portfolio_standard />
                </div>
                
                <div className="w4-max m-auto p-gaps m10-t">
                    <About_colaboration />
                </div>

                
                <div className="section--testimoials2-wrapper">
                    <div className="w4-max m-auto m10-t p-gaps">
                        <div className="p8-y">
                            <Testimonials2 />
                        </div>
                    </div>
                </div>

            </div>

            <Site_footer />
        
        </>
    )
}
