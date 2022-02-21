import React from 'react';
import { Link } from 'gatsby';

export default function Site_navbar() {

    const $site_pages = [
        ['Home', '/'],
        ['O nas', "/about"],
        ['Zespół', "/team"],
        ['Nasz proces', "/our-process"],
        ['Usługi', "/services"],
        ["Cennik", "/pricing"],
        ["Kontakt", "/contact"]
    ];

    return (
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

                            {
                                $site_pages.map( ($page, $key) => {
                                    
                                    let $cn = ($page[0] === "Home") ? "is-active" : "x";

                                    return (
                                        <div key={$key} className="navbar-list-item">
                                            <Link className={$cn} to={$page[1]}>
                                                {$page[0]}
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
