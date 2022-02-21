import React from 'react'

import '../../../scss/global.scss'

import Site_navbar from '../components/site-navbar';
import Site_footer from '../components/site-footer';
import Pricing_cards from '../components/pricing/cards';
import Testimonials from '../components/shared/testimonials';

export default function Services() {
    return (
        <>
            <div className="site-header">
                <div className="w5-max m-auto p-gaps">
                    <Site_navbar />
                </div>
            </div>
            
            <div className="site-content">
                <div className="w4-max m-auto p-gaps m5-t">
                    <Pricing_cards />
                </div>
                <div className="m10-y">
                    <Testimonials />
                </div>
            </div>

            <Site_footer />
        </>
    )
};