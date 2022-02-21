import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Avatar',

};

export const _Default = () => {
    return (
        <>

            <div className="w:max-3 m:auto">
                <div className="collection">
                    <div className="collection:item">
                        Simple collection item
                    </div>
                    <a className="collection:item collection:action">
                        <span className="f:auto">Saved exercises</span>
                        <span className="badge">8</span>
                    </a>
                </div>
            </div>

        </>
    )
}