import React from 'react'

import '../../../scss/global.scss'

import Sitenavbar from './site-navbar';
import Page_hero from './page-hero';

import Services_cards    from './services/cards';
import Services_process    from './services/process';
import Services_pricing    from './services/pricing';

export default function Services() {
    return (
        <>
            <div className="site-header">
                <div className="w5-max m-auto">
                    <Sitenavbar />
                </div>
                <Page_hero name="Usługi" />
            </div>
            <div className="site-content">
                <div className="site-content-services--cards">
                    <Services_cards />
                </div>
                <div className="site-content-services--process">
                    <Services_process />
                </div>
                <div className="site-content-pricing--cards-preview">
                    <Services_pricing />
                </div>
            </div>
            <div className="site-footer"></div>

            
            
            
            {/* <Testimonials_testimonials /> */}
        </>
    )
};