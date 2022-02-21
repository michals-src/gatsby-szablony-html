import React from 'react';

import $history_1_picture_unsplash from '../../assets/images/image-about-history-1-unspalsh.jpg';
import $history_picture_unsplash from '../../assets/images/florian-klauer-mk7D-4UCfmg-unsplash.jpg';

export default function About_history() {
    return (
        <div className="row row0-gap">
            <div className="col col12 col5-md p0-r">
                <div className="site-content-about--history-image site-content-about--history-image-1">
                    <img src={$history_1_picture_unsplash} alt=""/>
                </div>
            </div>
            <div className="col col15 col3-md p0-l">
                <div className="site-content-about--history-image site-content-about--history-image-2">
                    <img src={$history_picture_unsplash} alt=""/>
                </div>
            </div>
            <div className="col col12 col4-md">
                <div className="w1-max d-is-flex flex-ai-center h100">
                    <div className="p5-x">
                        <div className="m3-b">
                            <p className="m0-b text-uppercase">Rozwój naszej firmy</p>
                            <h2 className="text-400-is">Lorem ipsum dolor sit amet.</h2>
                        </div>
                        <p className="text8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem expedita pariatur asperiores! Natus, doloremque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}