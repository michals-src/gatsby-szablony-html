import React from 'react'

import '../../../scss/global.scss'

import Site_navbar from '../components/site-navbar';
import Site_footer from '../components/site-footer';
import Page_hero from '../components/page-hero';

import About_mission from '../components/about/mission';
import About_colaboration from '../components/about/colaboration';
import Team_members from '../components/team/members';



export default function About() {
    return (
        <>
            <div className="site-header">
                <div className="site-header-navbar">
                    <div className="w5-max m-auto p-gaps">
                        <Site_navbar />
                    </div>
                </div>
                <Page_hero />
            </div>
            
            
            <div className="site-content">
                <div className="site-content-about--mission-wrapper">
                    <div className="p10-y">
                        <div className="w4-max m-auto p-gaps">
                            <About_mission />
                        </div>
                    </div>
                </div>

                <div className="w4-max m-auto">
                    <About_colaboration />
                </div>

                <div className="w4-max m-auto p-gaps">
                    <div className="m10-y">
                        <Team_members />
                    </div>
                </div>
            </div>
            
            <Site_footer />
        </>
    )
}

// import React from 'react';



// export default function about() {
//     return (
//         <>

//             {/* Nasza historia
//             Nasza misja
//             Nasza wizja */}

//             <div className="site-header">
//                 <div className="w:max-4 m:auto">
//                     <div className="site-navbar">
//                         <div className="navbar">
//                             <div className="navbar-header">
//                                 <div className="navbar-tapmenu"></div>
//                                 <div className="navbar-brand">
//                                     Template
//                                 </div>
//                             </div>
//                             <div className="navbar-list">
//                                 <div className="navbar-end">
//                                     <div className="navbar-list-items">
//                                         <div className="navbar-list-item">
//                                             <a href="/">Strona główna</a>
//                                         </div>
//                                         <div className="navbar-list-item">
//                                             <a href="/about">O nas</a>
//                                         </div>
//                                         <div className="navbar-list-item">
//                                             <a href="#">Podstrony</a>
//                                             <div className="navbar-nav-dropdown">
//                                                 <div className="navbar-nav-dropdown-items">
//                                                     <div className="navbar-nav-dropdown-items">
//                                                         <a href="/history">Nasza historia</a>
//                                                     </div>
//                                                     <div className="navbar-nav-dropdown-items">
//                                                         <a href="/history">Pomoc</a>
//                                                     </div>
//                                                     <div className="navbar-nav-dropdown-items">
//                                                         <a href="/history">Cennik</a>
//                                                     </div>
//                                                     <div className="navbar-nav-dropdown-items">
//                                                         <a href="/history">404 Błąd</a>
//                                                     </div>
//                                                     <div className="navbar-nav-dropdown-items">
//                                                         <a href="/history">Usługi</a>
//                                                     </div>
//                                                     <div className="navbar-nav-dropdown-items">
//                                                         <a href="/history">Usługa</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="navbar-list-item">
//                                             <a href="#">Blog</a>
//                                         </div>
//                                         <div className="navbar-list-item">
//                                             <a href="#">Kontakt</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="site-about-hero">
//                     <div className="w:max-4 m:auto p:y-8">
//                         <h5 className="text:uppercase text:400">o nas</h5>
//                         <div className="w:is-75 text:is-4 text:line-clasp">
//                             Jesteśmy szybko rozwijającym się młodym zespołem pracującym nad zwiększeniem sprzedaży i oferującym sprzedaż stron internetowych.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="site-content">

//                 <General/>
//                 <Adventages/>
//                 <Team />
//                 <Promo />
            

//             </div>
//             <div className="site-footer"></div>


//         </>
//     )
// }