import React from 'react'

import '../../../scss/global.scss'

import Sitenavbar from './site-navbar';
import Page_hero from './page-hero';

import Contact_details from './contact/details';
import Contact_form from './contact/form';

export default function Contact() {
    return (
        <>
            <div className="w5-max m-auto">
                <Sitenavbar />
            </div>
            <Page_hero name="Cennik" />
            <div className="w5-max m-auto p10-y">
                <div className="row">
                    <div className="col col6">
                        <Contact_form />
                    </div>
                    <div className="col col6 p5-l">
                        <Contact_details />
                    </div>
                </div>
            </div>
        </>
    )
}