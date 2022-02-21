import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Badges',

};

export const _Default = () => {
    return (
        <>

        <div className="w:max-4 m:auto">
            <div className="m:y-2">
                <div className="badge m:r-1"><span>9</span></div>
                <div className="badge badge:blue m:r-1"><span>99</span></div>
                <div className="badge badge:orange m:r-1"><span>999</span></div>
                <div className="badge badge:green m:r-1"><span>9999</span></div>
                <div className="badge badge:red m:r-1"><span>99999</span></div>
            </div>
            <div className="m:b-4">
                <div className="badge badge:is-outline m:r-1"><span>9</span></div>
                <div className="badge badge:blue badge:is-outline m:r-1"><span>99</span></div>
                <div className="badge badge:orange badge:is-outline m:r-1"><span>999</span></div>
                <div className="badge badge:green badge:is-outline m:r-1"><span>9999</span></div>
                <div className="badge badge:red badge:is-outline m:r-1"><span>99999</span></div>
            </div>

            <div className="tx:is-1"><code>Nav</code> component with custome badge</div>
            <p className="m:t-0">Used as count, informing about amount of something</p>

            <div>
                <div className="nav border:is-1 shadow:is-1/8 b-radius:is-1 p:y-2">
                    <div className="nav-label p:x-2">Simple navigation</div>
                    <ul>
                        <li>
                            <a href="#" className="p:x-2">
                                Messages
                                <div className="badge"><span>99+</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="p:x-2">
                                Tasks
                                <div className="badge badge:blue"><span>6</span></div>
                            </a>
                        </li>
                    </ul>
                    <div className="nav-label p:x-2">Simple navigation</div>
                    <ul>
                        <li>
                            <a href="#" className="p:x-2">
                                Private
                                <div className="badge"><span>99+</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="p:x-2">
                                Best only
                                <div className="badge"><span>99+</span></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    )
}