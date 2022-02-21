import React from 'react'

import '../../../scss/global.scss'

import Site_navbar from '../components/site-navbar';
import Site_footer from '../components/site-footer';
import Page_hero from '../components/page-hero';

import Services_solutions from '../components/services/solutions';
import Services_features from '../components/services/features';
import Companies from '../components/shared/companies';


export default function Services() {
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

                <div className="m10-y">
                    <div className="site-content-services--solutions-wrapper">
                        <div className="w4-max m-auto p-gaps">
                            <Services_solutions />
                        </div>
                    </div>
                </div>

                <div className="m10-y">
                    <div className="w4-max m-auto p-gaps">
                        <Services_features />
                    </div>
                </div>

                <div className="m10-t">
                    <Companies/>
                </div>


            </div>

            <Site_footer />
            {/* <Services_solutions /> */}
            {/* <Testimotials /> */}
            {/* <Contact_form /> */}
        </>
    )
};