import React from 'react';

export default function Portfolio_standard(){
    return (
        <div className="site-content-portfolio--standard">



            <div className="m5-t m1-b">
                <div className="site-content-section--header">
                    <div className="w100 w3-max-lg">
                        <p className="text5 text4-md text2-line">
                            Our Latest Projects
                        </p>
                    </div>
                </div>
            </div>

           <div className="m5-b">
                <div className="tabs">
                    <ul>
                        <li className="text8"><a href="#">Tab 1</a></li>
                        <li className="text8"><a href="#">Tab 2</a></li>
                        <li className="text8"><a href="#">Tab 3</a></li>
                        <li className="text8"><a href="#">Tab 4</a></li>
                    </ul>
                </div>
           </div>

            <div className="row">
                <div className="col col12 col4-lg">
                    <div className="site-content-portfolio--card">
                        <div className="site-content-portfolio--card-image">
                            <img src="http://7oroof.com/demos/lamba/assets/images/portfolio/grid/2.jpg" alt=""/>
                            <div className="site-content-portfolio--card-image-hover">
                                <div className="icon32">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </div>
                                <div className="site-content-portfolio--card-info">
                                    <div className="p3">
                                        <h6 className="m0-b m1-t">Baby Tshirt Branding</h6>
                                        <p className="text9">branding,print</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}