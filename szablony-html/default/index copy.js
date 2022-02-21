import React from 'react'

import '../../../../scss/global.scss'

export default function App() {

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
                                        <a href="#">Strona główna</a>
                                    </div>
                                    <div className="navbar-list-item">
                                        <a href="#">O nas</a>
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
                            <div className="text:is-4">
                                Szybkość pracy <div>i łatwość implementacji</div>
                            </div>
                            <div className="text:is-2 m:t-2">
                                Duis ex dolor proident pariatur elit ad et quis dolore cillum.
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
                            <p>Elit ad ullamco occaecat mollit mollit ad ea amet est do minim consectetur. Aliquip excepteur dolore non non pariatur magna labore ullamco excepteur sint do dolor. Tempor consectetur anim consectetur aute.</p>
                        </div>
                    </div>
                </div>
                {/* hero-nav */}

            </div>

        </div>
        <div className="site-content">

            <div className="content-features m:y-3 w:max-3 m:auto">

                <div className="content-features-introduce m:t-15 m:b-8 text:center">
                    <div className="text:is-2">
                        Dolor cupidatat elit eiusmod voluptate ullamco laborum sunt velit. Non aute culpa culpa dolor in excepteur. Lorem mollit veniam enim qui ex exercitation fugiat.
                    </div>
                </div>

                <div className="grid:r">
                    
                    <div className="grid:c grid:c-4@md grid:r">
                        <div className="grid:c grid:c-2">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M52,8H12a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H52a4,4,0,0,0,4-4V12A4,4,0,0,0,52,8ZM10,26.42,20.08,36.5,10,46.58ZM54,52a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V49.42L36.5,22.91,54,40.42Zm0-14.42L36.5,20.09l-15,15L10,23.58V12a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>
                            </div>
                        </div>
                        <div className="grid:c grid:c-10">
                            <h6>Możliwość kombinacji</h6>
                            <p>Labore irure id anim fugiat ea incididunt consectetur aute Lorem minim irure velit.</p>
                        </div>
                    </div>
                    <div className="grid:c grid:c-4@md grid:r">
                        <div className="grid:c grid:c-2">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M52,8H12a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H52a4,4,0,0,0,4-4V12A4,4,0,0,0,52,8ZM10,26.42,20.08,36.5,10,46.58ZM54,52a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V49.42L36.5,22.91,54,40.42Zm0-14.42L36.5,20.09l-15,15L10,23.58V12a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>
                            </div>
                        </div>
                        <div className="grid:c grid:c-10">
                            <h6>Prosta konfiguracja</h6>
                            <p>Labore irure id anim fugiat ea incididunt consectetur aute Lorem minim irure velit.</p>
                        </div>
                    </div>
                    <div className="grid:c grid:c-4@md grid:r">
                        <div className="grid:c grid:c-2">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M52,8H12a4,4,0,0,0-4,4V52a4,4,0,0,0,4,4H52a4,4,0,0,0,4-4V12A4,4,0,0,0,52,8ZM10,26.42,20.08,36.5,10,46.58ZM54,52a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V49.42L36.5,22.91,54,40.42Zm0-14.42L36.5,20.09l-15,15L10,23.58V12a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>
                            </div>
                        </div>
                        <div className="grid:c grid:c-10">
                            <h6>Wdrożenie bez tracenia czasu</h6>
                            <p>Labore irure id anim fugiat ea incididunt consectetur aute Lorem minim irure velit.</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
        <div className="site-footer">



        </div>

        <div className="m:t-5">
            <div className="border:top-1">
                <div className="w:max-4 m:auto">

                        <div className="grid:r">
                            
                            <div className="grid:c-4@sm grid:c-6 border:right-1">
                                <div className="p:3 d:is-flex f:fd-column">
                                    <p>Consequat pariatur duis quis Lorem aliqua proident incididunt sunt. Consequat cillum laboris sint excepteur ut qui eu fugiat ipsum officia voluptate aliqua ad. Incididunt sit ut mollit qui ad magna ut enim minim mollit dolor enim aute.</p>

                                    <div className="w:auto column-image f:ai-flex-end">
                                        <img src="https://images.unsplash.com/photo-1615869845861-f7ded891a322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" alt="unspalsh" />
                                    </div>
                                
                                </div>
                            </div>
                            
                            <div className="grid:c-4@sm grid:c-6 border:right-1">
                                <div className="p:3 d:is-flex f:fd-column">
                                    <p>Et veniam qui ea elit laborum sunt eiusmod eu ipsum. Ea quis ut cillum laboris nulla velit magna tempor ipsum ea quis do laboris occaecat. Tempor labore ullamco adipisicing esse nulla esse officia.</p>
                                    
                                    <div className="w:auto column-image f:ai-flex-end">
                                        <img src="https://images.unsplash.com/photo-1501817121467-f10e6b6dc7bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="unspalsh" />
                                    </div>
                                
                                </div>
                            </div>
                            
                            <div className="grid:c-4@sm grid:c-6">
                                <div className="p:3">
                                    <p>Excepteur adipisicing qui cillum non dolor culpa adipisicing. Duis sint id officia eiusmod occaecat velit adipisicing ea culpa velit. Ex nulla nisi veniam deserunt aute adipisicing non. Nostrud irure ea Lorem amet exercitation tempor deserunt cupidatat. Irure non ex ad sit culpa ea. Eiusmod dolor cillum aute non labore est reprehenderit cillum in dolore eu laboris nulla adipisicing.</p>
                                   
                                    <div className="w:auto column-image">
                                        <img src="https://images.unsplash.com/photo-1614511576014-4cea695123aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="unspalsh" />
                                    </div>
                                
                                </div>
                            </div>
                            
                        </div>
                
                </div>
            </div>
        </div>
        </>
    )
}