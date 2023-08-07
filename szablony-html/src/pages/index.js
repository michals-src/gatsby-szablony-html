import React from "react"

import "../../../scss — szablon 2/global.scss"

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

import Site_navbar from "../components/site-navbar"
import Site_footer from "../components/site-footer"

import About_mission from "../components/about/mission"
import Portfolio_standard from "../components/portfolio/standard"
import Services_solutions from "../components/services/solutions"
import Contact_form from "../components/contact/form"

export default function Home() {
  return (
    <>
      <div className="site-header">
        <div className="w5-max w6-max-3xl m-auto p3-x">
          <Site_navbar />
        </div>
        <div className="w100 p0 p3-x-lg">
          <div className="site-header-hero--main">
            <ul className="site-header-hero--main-list">
              <li
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1604782206219-3b9576575203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1843&q=80")',
                }}
              >
                <div className="site-header-hero--main-text d-is-flex flex-ai-center">
                  <div className="w5-max m-auto">
                    <h6 className="text8">Szybkość pracy i lepsza jakość</h6>
                    <h1 className="text3">
                      Kreatywna wizja <div>& cyfrowe udogodnienia</div>
                    </h1>
                    <div className="m5-t">
                      <a href="#" className="button">
                        <div className="icon icon32">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            class="bi bi-box"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                          </svg>
                        </div>
                        <span>Szczegóły</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="site-header-hero--main-nav p5-x p0-lg">
              <div
                className="site-header-hero--main-nav-item"
                data-direction="prev"
              >
                <div className="icon64">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M24.6,24h0a1,1,0,0,1,0,1.42L19,31H47.6a1,1,0,0,1,1,1h0a1,1,0,0,1-1,1H19l5.59,5.58a1,1,0,0,1,0,1.42h0a1,1,0,0,1-1.42,0l-7.64-7.65a.5.5,0,0,1,0-.7L23.18,24A1,1,0,0,1,24.6,24Z" />
                  </svg>
                </div>
              </div>
              <div
                className="site-header-hero--main-nav-item"
                data-direction="next"
              >
                <div className="icon64">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M39.4,40h0a1,1,0,0,1,0-1.42L45,33H16.4a1,1,0,0,1-1-1h0a1,1,0,0,1,1-1H45L39.4,25.42a1,1,0,0,1,0-1.42h0a1,1,0,0,1,1.42,0l7.64,7.65a.5.5,0,0,1,0,.7L40.82,40A1,1,0,0,1,39.4,40Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-content">
        <div className="w4-max m-auto p3-x m10-t">
          <About_mission />
        </div>

        <div className="w5-max m-auto p3-x m10-t">
          <Portfolio_standard />
        </div>

        <div className="overflow-hidden">
          <div className="w5-max m-auto p-gaps m10-t">
            <Services_solutions />
          </div>
        </div>

        <div className="w4-max m-auto p-gaps">
          <div className="m10-y">
            <Contact_form />
          </div>
        </div>
      </div>

      <Site_footer />
    </>
  )
}
