import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Pagination',

};

export const _Default = () => {
    return (
        <>

            <ul className="pagination">

                <li className="is-start"><a href="#">Prev</a></li>
                <li className="is-end disabled"><span>Next</span></li>

                <li className="is-active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <div className="pagination:divider"><span>...</span></div>
                <li><a href="#">8</a></li>
                
            </ul>

            <ul className="pagination pagination:outline d:is-flex f:jc-space-between">

                <li className="is-start"><a href="#">Prev</a></li>
                <li className="is-end disabled"><span>Next</span></li>

                <div className="d:is-flex f:fd-row">
                    <li className="is-active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <div className="pagination:divider"><span>...</span></div>
                    <li><a href="#">8</a></li>
                </div>
                
            </ul>

        </>
    )
}