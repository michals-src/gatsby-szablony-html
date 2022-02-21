import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Tooltip',

};

export const _Default = () => {
    return (
        <>

            <div style={{ padding: "100px" }}>
                
                <div className="grid:r">
                    <div className="grid:col grid:c-6@md">
                        <div className="m:b-1">
                            <span className="tooltip tooltip:is-top" aria-label="Top">
                                <a href="#">Tooltip for link</a>
                            </span>
                        </div>
                        <div className="m:b-1">
                            <span className="tooltip tooltip:is-bottom" aria-label="Bottom">Tooltip bottom</span>
                        </div>
                        <div className="m:b-1">
                            <span className="tooltip tooltip:is-left" aria-label="Left">Tooltip left</span>
                        </div>
                        <div className="m:b-1">
                            <span className="tooltip tooltip:is-right" aria-label="Right">Tooltip right</span>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}