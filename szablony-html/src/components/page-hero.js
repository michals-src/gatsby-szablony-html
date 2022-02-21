import React from 'react';

export default function Page_hero({
    name,
    label = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque fuga quod magnam voluptatem nulla natus suscipit soluta quis deserunt!",

}) {
    return (
        <>
            <div className="site-header-hero--page">
                <div className="site-header-hero--page-image">
                    <img src="https://images.unsplash.com/photo-1615770949303-a4eb0ba7aa2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" alt=""/>
                </div>
                <div className="site-header-hero--page-content">
                    <div className="w2-max p5-x">
                        <p className="text3 text1-line">Always focus on what benefits our customers.</p>
                        <p className="text8">Let’s collaborate and make an impact.</p>
                    </div>
                </div>
            </div>

            {/* <div className="w5-max m-auto">
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
            </div> */}
        </>
    )
}