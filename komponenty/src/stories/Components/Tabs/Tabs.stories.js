import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Tabs',

};

export const _Default = () => {
    return (
        <>

           <div className="prefix--container">
               <div style={{ marginBottom: "100px" }}>
                    <div className="prefix-tabs">
                        <ul>
                            <li><a href="#">Tab 1</a></li>
                            <li><a href="#">Tab 2</a></li>
                            <li><a href="#">Tab 3</a></li>
                            <li><a href="#">Tab 4</a></li>
                        </ul>
                    </div>
               </div>

               <div style={{ marginBottom: "100px" }}>
                    <div className="prefix-tabs">
                        <ul className="is-center">
                            <li><a href="#">Tab 1</a></li>
                            <li><a href="#">Tab 2</a></li>
                            <li><a href="#">Tab 3</a></li>
                            <li><a href="#">Tab 4</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginBottom: "100px" }}>
                    <div className="prefix-tabs">
                        <ul className="is-right">
                            <li><a href="#">Tab 1</a></li>
                            <li><a href="#">Tab 2</a></li>
                            <li><a href="#">Tab 3</a></li>
                            <li><a href="#">Tab 4</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginBottom: "100px" }}>
                    <div className="prefix-tabs">
                        <ul className="is-fill">
                            <li><a href="#">Tab 1</a></li>
                            <li><a href="#">Tab 2</a></li>
                            <li><a href="#">Tab 3</a></li>
                            <li><a href="#">Tab 4</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginBottom: "100px" }}>
                    <div className="prefix-tabs">
                        <ul className="is-tab">
                            <li><a href="#">Tab 1</a></li>
                            <li><a className="is-active" href="#">Tab 2</a></li>
                            <li><a href="#">Tab 3</a></li>
                            <li><a href="#">Tab 4</a></li>
                        </ul>
                    </div>
                </div>

           </div>

        </>
    )
}