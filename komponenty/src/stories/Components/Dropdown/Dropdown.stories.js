import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Dropdown',

};

export const _Default = () => {
    return (
        <>

            <div className="h:wh-6">
                <div className="dropdown dropdown:is-active">
                    <button className="button dropdown:button">Simple dropdown</button>
                    <ul className="dropdown:menu">
                        <li><a className="dropdown:item">Settings.</a></li>
                        <li><a className="dropdown:item">Account details</a></li>
                        <li><a className="dropdown:item">Get news from friends</a></li>
                        <li><a className="dropdown:item">Send start</a></li>
                        <li><a className="dropdown:item">Update</a></li>
                        <li><a className="dropdown:item">Select color</a></li>
                    </ul>
                </div>
                <p>Elit aute duis ullamco quis deserunt. Esse commodo id est minim laboris et est consequat ut cupidatat aute nulla adipisicing sunt. Esse velit excepteur irure consectetur est est. Duis et cillum laborum quis veniam non consectetur sunt.</p>
            </div>

            <div className="h:wh-10">
                <div className="dropdown dropdown:is-active">
                    <button className="button dropdown:button">Simple dropdown</button>
                    <ul className="dropdown:menu has-dividers">
                        <div className="dropdown:label">General</div>
                        <li><a className="dropdown:item">Settings.</a></li>
                        <li><a className="dropdown:item">Account details</a></li>
                        <li><a className="dropdown:item">Get news from friends</a></li>
                        <div className="dropdown:divider"></div>
                        <div className="dropdown:label">Groups</div>
                        <li><a className="dropdown:item">Send start</a></li>
                        <li><a className="dropdown:item">Update</a></li>
                        <li><a className="dropdown:item">Select color</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}