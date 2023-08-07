import React from 'react';

import $site_page_image from '../images/site-page.png';

export default function Page_hero({
    name,
    label = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque fuga quod magnam voluptatem nulla natus suscipit soluta quis deserunt!",

}) {
    return (
        <>
            <div className="w5-max m-auto">
                <div className="site-header-page--hero">
                    <div className="w3-max m7-t">
                        <div className="p5-l">
                            <h1 className="text1 m2-b site-header-page--hero-name text-400-is">{name}</h1>
                            <h4 className="text-400-is site-header-page--hero-introduce">
                                {label}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}