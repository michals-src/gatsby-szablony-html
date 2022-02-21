import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Modal',

};

export const _Default = () => {
    return (
        <>

            <div className="prefix--container">
                <div className="modal">
                    <div className="modal-curtain"></div>
                    <div className="modal-card">
                        <div className="modal-card-heading">
                            <h6>Est ea ullamco elit ut laborum quis irure nulla consequat.</h6>
                            
                        </div>
                        <div className="modal-card-content">
                            <p>Magna irure anim sunt nulla veniam. Velit deserunt pariatur elit deserunt deserunt eiusmod commodo dolor anim amet dolor. Enim est consectetur Lorem do exercitation sint elit fugiat Lorem ad adipisicing eiusmod.</p>
                            <p>Sizes of button</p>
                            <button type="button" className="button button:green button:is-sm">Small</button>
                            <button type="button" className="button button:green">Normal</button>
                            <button type="button" className="button button:green button:is-lg">Large</button>
                        </div>
                        <div className="modal-card-footer">
                            <small className="pr-1">Written by Laur Polson</small>
                            <button type="button" className="button button:orange button:is-sm">See more stories</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}