import React from 'react'

import '../../../scss/global.scss'

import Site_navbar from '../components/site-navbar';
import Site_footer from '../components/site-footer';
import Page_hero from '../components/page-hero';

import Contact_form from '../components/contact/form';
import Contact_details from '../components/contact/details';


export default function About() {
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
                <div className="w4-max m-auto p-gaps">
                    <div className="m10-t">
                        <Contact_details />
                    </div>
                    <div className="m10-y">
                        <Contact_form />
                    </div>
                </div>
            </div>
            
            <Site_footer />
        </>
    )
}