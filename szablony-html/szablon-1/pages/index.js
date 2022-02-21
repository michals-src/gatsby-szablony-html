import React from 'react'

import '../../../scss/global.scss';
import Sitenavbar from './site-navbar';

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



export  default function Home() {
    return (
        
        <>

            <div className="site-header"> 
                <div className="w5-max w6-max-3xl m-auto p3-x">
                    <Sitenavbar />
                </div>

                <div className="site-header-main--hero">
                    <div className="w100 p3-l">
                        <div className="w5-max w6-max-3xl m-auto p3-x p10-y p5-y-lg">
                            <div className="site-header-main--hero-text h100-wh h65-wh-3xl">
                                <div>
                                    <div className="text5 text-3lg text1-3xl text2-md m3-b text3-line">
                                        Szybkość pracy <div>i łatwość implementacji</div>
                                    </div>
                                    <div className="site-header-main--hero-text-subline text7 text4-3xl text6-md text3-line m3-b">
                                        Pole tekstowe, które zawiera treść zachęcającą do akcji przewinięcia strony w dół i lepszego zapoznania się z proponowaną ofertą firmy.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="site-header-main--hero-image">
                            <div className="w100 h100">
                                <img className="h100" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="site-hero" title="Cool image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  {/* site-header */}

            <div className="site-content">

                <div className="site-content-main--features">
                    <div className="w4-max m-auto p3-x m10-y">
                        <div className="site-hero--nav">
                            <div className="row">
                                
                                <div className="col col12 col4-md m3-b">
                                    <div className="site-content-main--features-item">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                                            </svg>
                                        </div>
                                        <h5 className="text-400-is">Tam jest przestrzeń</h5>
                                        <p>Dolor esse nostrud duis aliquip commodo nostrud voluptate ad ad dolor.</p>
                                    </div>
                                </div>
                                <div className="col col12 col4-md m3-b">
                                    <div className="site-content-main--features-item">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                                            </svg>
                                        </div>
                                        <h5 className="text-400-is">Głębokość dźwieku</h5>
                                        <p>Dolor esse nostrud duis aliquip commodo nostrud voluptate ad ad dolor.</p>
                                    </div>
                                </div>
                                <div className="col col12 col4-md m3-b">
                                    <div className="site-content-main--features-item">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
                                                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
                                            </svg>
                                        </div>
                                        <h5 className="text-400-is">Brak szumów</h5>
                                        <p>Dolor esse nostrud duis aliquip commodo nostrud voluptate ad ad dolor.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-content-about--inspiration">
                    <div className="w4-max m-auto p3-x m10-y">
                        <div className="row">
                            <div className="col col12 col4-md">
                                <div className="d-is-flex flex-ai-center h100">
                                    <div>
                                        
                                        <div className="site-content--inspiration-title">
                                            <div className="icon-xl icon-absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32,0A32,32,0,1,0,64,32,32,32,0,0,0,32,0ZM60.39,30.5H46.2C46,19.39,43.26,9.82,39.3,4.5A28.44,28.44,0,0,1,60.39,30.5ZM32,3.56C36.21,3.56,42.3,14,42.65,30.5H21.35C21.7,14,27.79,3.56,32,3.56Zm-7.3.94c-4,5.32-6.68,14.89-6.9,26H3.61A28.44,28.44,0,0,1,24.7,4.5ZM3.61,33.5H17.8c.22,11.11,2.94,20.68,6.9,26A28.44,28.44,0,0,1,3.61,33.5ZM32,60.44C27.79,60.44,21.7,50,21.35,33.5h21.3C42.3,50,36.21,60.44,32,60.44Zm7.3-.94c4-5.32,6.68-14.89,6.9-26H60.39A28.44,28.44,0,0,1,39.3,59.5ZM1.35,30.65Z"/></svg>
                                            </div>
                                            <div className="text4 m2-b">
                                                Inspiracje czerpiemy ze świata, który codziennie nas otacza
                                            </div>
                                        </div>

                                        <p className="text8 m5-b">
                                            W zwykły dzień niedostrzegany, w chwili spokoju, przynoszący wiele pomysłów.
                                        </p>
                                        <a href="/about">
                                            <button className="button">
                                                Poznaj nas bliżej
                                            </button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="col col12 col7-md offset1-md m3-t m0-t-md">
                                <div className="row">
                                    <div className="col col6 m5-t">
                                        <div className="site-section-promo--image d-is-flex">
                                            <img src="https://images.unsplash.com/photo-1603707056549-bdd1b1d4e0a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col col6">
                                        <div className="site-section-promo--image d-is-flex">
                                            <img src="https://images.unsplash.com/photo-1556228720-d7519e2b88df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-content-services--details">
                    <div className="m10-y">
                        <div className="p3-x">
                            <div className="w4-max m-auto m3-b m7-b-lg">
                                <div className="row">
                                    <div className="col col12 col8-md offset4-md p5-l-md">
                                        <div className="text4 text-line-clasper m3-b">
                                            Jesteś w dobrym miejscu
                                        </div>
                                    </div>
                                    <div className="col col12 col4-md">
                                        <p className="text8 text3-line">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae molestias, ducimus est expedita ex sint.
                                        </p>
                                    </div>
                                    <div className="col col12 col8-md p5-l-md">
                                        <p className="text8 text3-line">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat praesentium tempore explicabo molestiae, assumenda eveniet? Sed illum deserunt tempora amet, dolor, nemo repellendus modi neque corporis unde, aliquam laudantium?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Services details introduction */}
                        <div className="p3-r site-content-services--details-container">
                            <div className="row flex-ai-center flex-ac-stretch">
                                
                                <div className="col col12 col4-md col6-lg site-content-services--details-image">
                                    <div className="h100 visible-not d-is-none d-is-block-md visible-is-md">
                                        <img src="https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" />
                                    </div>
                                </div>

                                <div className="col col12">
                                    <div className="w4-max m-auto">
                                        <div className="row">
                                            <div className="col col12 col8-md col6-lg offset4-md offset6-lg">
                                                <div className="site-content-services--details-items m0-y m6-y-md m8-y-lg">
                                                    <div className="p7-l-md p10-l-xl">
                                                        <div className="w1-max p4 p0-x-xl">
                                                            <div className="d-is-flex flex-fd-row m1-b">
                                                                    <div className="icon icon32 m2-r">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-phone-landscape-fill" viewBox="0 0 16 16">
                                                                            <path d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                                        </svg>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text8">Ulepszenie wyglądu</p>
                                                                        <p className="text9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis, sapiente aperiam nesciunt ex enim?</p>
                                                                    </div>
                                                                </div>
                                                            <div className="d-is-flex flex-fd-row m1-b">
                                                                <div className="icon icon32 m2-r">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-puzzle-fill" viewBox="0 0 16 16">
                                                                        <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"/>
                                                                    </svg>
                                                                </div>
                                                                    <div>
                                                                        <p className="text8">Zaplanowanie długości tekstu</p>
                                                                        <p className="text9">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, enim.</p>
                                                                    </div>
                                                            </div>
                                                            <div className="d-is-flex flex-fd-row m1-b">
                                                                <div className="icon icon32 m2-r">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                                                                        <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                                                                    </svg>
                                                                </div>
                                                                    <div>
                                                                    <p className="text8">Wpasowanie zawartości w wyglądu</p>
                                                                    <p className="text9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa cumque sunt!</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-is-flex flex-fd-row m1-b">
                                                                <div className="icon icon32 m2-r">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                                                    </svg>
                                                                </div>
                                                                    <div>
                                                                    <p className="text8">Wpasowanie zawartości w wyglądu</p>
                                                                    <p className="text9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa cumque sunt!</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                
                            </div>
                        </div>{/* Services details of few elements */}
                    </div>
                </div>

                <div className="site-content-about--steps">
                    <div className="w3-max m-auto p3-x p0-x-xxl m10-y">
                        <div className="w100 w2-max-lg p3-x p5-x-lg m-auto m7-b text-center">
                            <div className="text4 m2-b">Zobacz jak to działa</div>
                            <p className="text8">Dostosowanie treści nie jest łatwym zadaniem. W przypadku użycia metody lorem ipsum można być zaskoczonym w finalnym rezultacie ponieważ długość tekstu wpasowanego w daną sekcję nie pokrywa się z projektem i nie pasuje do całości.</p>
                        </div>
                        <div className="row">
                            <div className="col col12 col4-md">
                                <div className="site-content-about--steps-item">
                                    <h5 className="m2-b text-400-is">
                                        <span className="badge">1</span>
                                        Stylistyka tagów
                                    </h5>
                                    <p>Nisi in adipisicing elit ullamco eiusmod minim labore eu nostrud occaecat irure.</p>
                                </div>
                            </div>
                            <div className="col col12 col4-md">
                                <div className="site-content-about--steps-item">
                                    <h5 className="m2-b text-400-is">
                                        <span className="badge">2</span>
                                        Tworzenie szkieletu
                                    </h5>
                                    <p>Nisi in adipisicing elit ullamco eiusmod minim labore eu nostrud occaecat irure.</p>
                                </div>
                            </div>
                            <div className="col col12 col4-md">
                                <div className="site-content-about--steps-item">
                                    <h5 className="m2-b text-400-is">
                                        <span className="badge">3</span>
                                        Dodawanie treści
                                    </h5>
                                    <p>Nisi in adipisicing elit ullamco eiusmod minim labore eu nostrud occaecat irure.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div> {/* site-content */}

            <div className="site-footer">
                <div className="w4-max m-auto p3-x p0-x-xxl m5-t">
                    
                    <div className="row">
                        <div className="col col12 col3-md col">
                            <p className="text9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat quia quae cum provident reprehenderit dolores voluptatem fuga!</p>
                        </div>
                        <div className="col col12 col6-md">
                            <h5 className="text-400-is m3-b">Badźmy w kontakcie</h5>
                            <div className="d-is-flex flex-fd-row">
                                <div className="icon icon18 m1-r">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M59,45.06A13.93,13.93,0,0,1,45.8,59c-.25,0-.49,0-.74,0s-.48,0-.73,0A40,40,0,0,1,5,19.67c0-.25,0-.49,0-.73s0-.49,0-.74A13.93,13.93,0,0,1,18.94,5a14.43,14.43,0,0,1,1.75.1l2.15,21.52-3.9,6.25A29.82,29.82,0,0,0,31.13,45.06l6.64-3.86L58.9,43.31A14.43,14.43,0,0,1,59,45.06Z"/></svg>
                                </div>
                                <p>+48 500 879 435</p>
                            </div>
                            <div className="d-is-flex flex-fd-row">
                                <div className="icon icon18 m1-r">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                    </svg>
                                </div>
                                <p>addres@comapany.com</p>
                            </div>
                        </div>
                        <div className="col col12 col3-md">
                            <ul className="site-footer--nav">
                                <li><a href="#">Polityka prywatności</a></li>
                                <li><a href="#">Warunki korzystania</a></li>
                                <li><a href="#">Regulamin serwisu</a></li>
                            </ul>
                        </div>
                    </div>

                    

                    <footer>
                        git.michal-src Studio &copy; 2021
                    </footer>
                </div>

            </div>
        
        </>
    )
}


export function Portfolio() {
    return (
        <>
            {/* <Page_Hero />
            <Portfolio_works /> */}
        </>
    )
}

