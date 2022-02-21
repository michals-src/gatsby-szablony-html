import React from 'react'

import '../../../scss/global.scss'

import Sitenavbar from './site-navbar';
import Page_hero from './page-hero';

import Pricing_cards from './pricing/cards';

export default function Pricing() {
    return (
        <>
            <div className="w5-max m-auto">
                <Sitenavbar />
            </div>
            <Page_hero name="Choose your plan" label="If you are unsure which pricing plan to choose, then register for a 14-day free trial to start building your business." />
            <Pricing_cards />
            {/* <Page_Hero />
            <Pricing_pricing />
            <About_about /> */}
        </>
    )
}