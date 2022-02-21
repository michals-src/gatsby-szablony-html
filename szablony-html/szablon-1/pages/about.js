import React from 'react'

import '../../../scss/global.scss'

import Sitenavbar from './site-navbar';
import Page_hero from './page-hero';

import About_purposes       from './about/about_purposes';
import About_vision         from './about/about_vision';
import About_history        from './about/about_history';
import About_team           from './about/about_team';
import About_inspiration    from './about/about_inspiration';



export default function About() {
    return (
        <>
            <div className="site-header">
                <div className="w5-max m-auto">
                    <Sitenavbar />
                </div>
                <Page_hero name="O nas" />
            </div>
            
            <div className="site-content">
                <div className="w5-max m-auto m10-y p3-x p0-x-xl">
                    <div className="site-content-about--purposes">
                        <About_purposes />
                    </div>
                    <div className="site-content-about--vision">
                        <About_vision />
                    </div>
                    <div className="site-content-about--history">
                        <About_history />
                    </div>
                </div>
                <div className="site-content-about--team">
                    <div className="m10-y">
                        <About_team />
                    </div>
                </div>

                <div className="site-content-about--inspiration">
                    <div className="m10-y">
                        <About_inspiration />
                    </div>
                </div>
                
                
            </div>
            <div className="site-footer"></div>
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