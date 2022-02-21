import React from 'react'

import '../../../scss/global.scss'

import Site_navbar from '../components/site-navbar';
import Site_footer from '../components/site-footer';
import Services_solutions from '../components/services/solutions';
import Testimonials from '../components/shared/testimonials';
import Contact_form from '../components/contact/form';

export default function Services() {
    return (
        <>
            <div className="site-header">
                <div className="w5-max m-auto p-gaps">
                    <Site_navbar />
                </div>
            </div>
            
            <div className="site-content">
                <div className="m5-t">
                    <Services_solutions />
                </div>

                <div className="m10-t">
                    <Testimonials />
                </div>

                <div className="w4-max m-auto p-gaps">
                    <div className="m10-y">
                        <Contact_form />
                    </div>
                </div>
            </div>

            <Site_footer />
            {/* <Services_solutions /> */}
            {/* <Testimotials /> */}
            {/* <Contact_form /> */}
        </>
    )
};