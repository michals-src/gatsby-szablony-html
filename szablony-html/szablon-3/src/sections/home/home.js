import React from 'react';

export default function Home() {
    return (
        
        <>

        <div className="site-header">

            <div className="w:max-4 m:auto">
                
                <div className="site-navbar">
                    <div className="navbar">
                        <div className="navbar-header">
                            <div className="navbar-tapmenu"></div>
                            <div className="navbar-brand">
                                Template
                            </div>
                        </div>
                        <div className="navbar-list">
                            <div className="navbar-end">
                                <div className="navbar-list-items">
                                    <div className="navbar-list-item">
                                        <a href="/">Strona główna</a>
                                    </div>
                                    <div className="navbar-list-item">
                                        <a href="/about">O nas</a>
                                    </div>
                                    <div className="navbar-list-item">
                                        <a href="#">Podstrony</a>
                                    </div>
                                    <div className="navbar-list-item">
                                        <a href="#">Blog</a>
                                    </div>
                                    <div className="navbar-list-item">
                                        <a href="#">Kontakt</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-hero">
                    <div className="site-hero-title">
                        <div>
                            <div className="text:is-4 text:line-clasp">
                                Szybkość pracy <div>i łatwość implementacji</div>
                            </div>
                            <div className="text:is-2 m:t-2">
                                Pole tekstowe, które zawiera treść zachęcającą do akcji przewinięcia strony w dół i lepszego zapoznania się z proponowaną ofertą firmy.
                            </div>
                        </div>
                    </div>
                    <div className="site-hero-image">
                        <div style={{height: "100vh", backgroundColor: "#f4f4f4"}}>
                            <img src="" alt="site-hero" title="Cool image" />
                        </div>
                    </div>
                </div>

                <div className="site-hero-nav">
                    <div className="grid:r">
                        <div className="grid:c grid:c-4@md grid:c-6 p:x-3">
                            <div className="site-hero-nav-item-bar">
                                <div className="site-hero-nav-item-bar-progress" style={{width: '50%'}}></div>
                            </div>
                            <h6>Tam jest przestrzeń</h6>
                            <p>Dolor esse nostrud duis aliquip commodo nostrud voluptate ad ad dolor.</p>
                        </div>
                        <div className="grid:c grid:c-4@md grid:c-6">
                            <div className="site-hero-nav-item-bar"></div>
                            <h6>Moc w dłoniach</h6>
                            <p>Tempor consectetur proident incididunt commodo irure fugiat deserunt ex aute laboris.</p>
                        </div>
                        <div className="grid:c grid:c-4@md grid:c-6">
                            <div className="site-hero-nav-item-bar"></div>
                            <h6>Czystość dźwięku</h6>
                            <p>Quis occaecat minim aliquip consequat proident dolor mollit culpa.</p>
                        </div>
                    </div>
                </div>
                {/* hero-nav */}

            </div>

        </div>
        <div className="site-content m:y-14">

            <div className="content-features p:b-10 w:max-4 m:auto">

                <div className="grid:r f:ai-center">
                    
                    <div className="grid:c grid:c-12 grid:c-6@md">
                        <div className="content-features-image">

                        </div>
                    </div>

                    <div className="grid:c grid:c-3@md grid:c-12 grid:offset-1@md">
                        <div>
                            <div className="text:is-3 text:line-clasper">
                                Jesteś w dobrym miejscu
                            </div>
                            <p className="m:t-2">Krótka informacja na temat korzyści płynących z korzystania produktu bądź oferty.</p>
                            <div className="m:t-5">
                                
                                <div className="d:is-flex f:fd-row m:b-1">
                                    <div className="feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M52,8H12a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H52a4,4,0,0,0,4-4V12A4,4,0,0,0,52,8ZM10,26.42,20.08,36.5,10,46.58ZM54,52a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V49.42L36.5,22.91,54,40.42Zm0-14.42L36.5,20.09l-15,15L10,23.58V12a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>
                                    </div>
                                    <p>Ulepszenie wyglądu</p>
                                </div>
                                <div className="d:is-flex f:fd-row m:b-1">
                                    <div className="feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M52,8H12a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H52a4,4,0,0,0,4-4V12A4,4,0,0,0,52,8ZM10,26.42,20.08,36.5,10,46.58ZM54,52a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V49.42L36.5,22.91,54,40.42Zm0-14.42L36.5,20.09l-15,15L10,23.58V12a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>
                                    </div>
                                    <p>Zaplanowanie długości tekstu</p>
                                </div>
                                <div className="d:is-flex f:fd-row">
                                    <div className="feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M52,8H12a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H52a4,4,0,0,0,4-4V12A4,4,0,0,0,52,8ZM10,26.42,20.08,36.5,10,46.58ZM54,52a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V49.42L36.5,22.91,54,40.42Zm0-14.42L36.5,20.09l-15,15L10,23.58V12a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>
                                    </div>
                                    <p>Wpasowanie zawartości w wyglądu</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="content-details p:y-10 w:max-3 m:auto">
                <div className="w:max-2 m:auto m:b-7 text:center">
                    <div className="text:is-3 m:b-2">Zobacz jak to działa</div>
                    <p>Dostosowanie treści nie jest łatwym zadaniem. W przypadku użycia metody lorem ipsum można być zaskoczonym w finalnym rezultacie ponieważ długość tekstu wpasowanego w daną sekcję nie pokrywa się z projektem i nie pasuje do całości.</p>
                </div>
                <div className="grid:r">
                    <div className="grid:c grid:c-12 grid:c-6@md">
                        <div className="content-details--grid-item border:right-1">
                            <h5 className="m:b-2 text:400">Znajdowanie tagów</h5>
                            <p>Nisi in adipisicing elit ullamco eiusmod minim labore eu nostrud occaecat irure.</p>
                        </div>
                    </div>
                    <div className="grid:c grid:c-12 grid:c-6@md">
                        <div className="content-details--grid-item">
                            <h5 className="m:b-2 text:400">Dodawanie treści</h5>
                            <p>Nisi in adipisicing elit ullamco eiusmod minim labore eu nostrud occaecat irure.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="content-more w:max-5 m:auto p:t-10">
                <div className="grid:r f:ai-center">
                    <div className="grid:c grid:c-12 grid:c-4@md grid:offset-1@md d:is-flex f:ai-center">
                        
                        <div>
                            <div className="content-more--icon m:b-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" ><path d="M52,8H12a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H52a4,4,0,0,0,4-4V12A4,4,0,0,0,52,8ZM10,26.42,20.08,36.5,10,46.58ZM54,52a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V49.42L36.5,22.91,54,40.42Zm0-14.42L36.5,20.09l-15,15L10,23.58V12a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>
                            </div>
                            <div className="text:is-3 m:b-3">Dopasowanie zawartości</div>
                            <p>Eiusmod irure mollit nulla ex culpa culpa ut velit deserunt sunt nostrud laboris aliqua. Aliqua ut sunt consectetur est elit esse quis aliqua ipsum est nulla in ut incididunt. Eu aliquip incididunt sunt ad qui culpa elit officia dolor fugiat magna sint nulla. Eiusmod dolor sunt duis excepteur laborum mollit reprehenderit aute sunt. Aliquip aliqua nostrud ex quis deserunt incididunt cillum. Sint ullamco dolore amet deserunt aute officia labore enim amet aute nostrud cupidatat ea.</p>  
                        </div>    
                    
                    </div>
                    <div className="grid:c grid:c-12 grid:c-6@md grid:offset-1@md">
                        <div className="content-more--image">

                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div className="site-footer">

            <div className="w:max-3 m:auto">
                <ul className="site-footer-nav d:is-flex f:jc-space-around">
                    <li><a href="#" className="p:x-1">Polityka prywatności</a></li>
                    <li><a href="#" className="p:x-1">Warunki korzystania</a></li>
                    <li><a href="#" className="p:x-1">Regulamin serwisu</a></li>
                </ul>

                <footer className="text:center">
                    &copy; Michal-src studio
                </footer>
            </div>

        </div>

        </>
    )
}