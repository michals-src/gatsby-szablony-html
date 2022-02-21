import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Nav',

};

export const _Default = () => {
    return (
        <>

            <div className="prefix--row">
              
                <div className="prefix--col prefix--col-md-6">

                    <nav className="nav">
                        <p className="nav-label">Section 1</p>
                        <ul>
                            <li>
                                <a className="is-active" href="#">General</a>
                                <ul>
                                    <li>
                                        <a className="is-active" href="#">About</a>
                                        <ul>
                                            <li><a href="#">Personal information</a></li>
                                            <li><a href="#">Global</a></li>
                                            <li><a href="#">Addons</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="is-active" href="#">Security</a>
                                        <ul>
                                            <li><a href="#">Add phone number</a></li>
                                            <li><a href="#">Update email</a></li>
                                            <li><a href="#">New secret code</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Top 10</a></li>
                            <li><a href="#">Users</a></li>
                        </ul>
                        <p className="nav-label">Manage</p>
                        <ul>
                            <li><a href="#">Finances</a></li>
                            <li><a href="#">Time</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">Meetings</a></li>
                        </ul>
                    </nav>

                </div>
            
              
                <div className="prefix--col prefix--col-md-3">

                    <nav className="nav nav-fill">
                        <p className="nav-label">Section 1</p>
                        <ul>
                            <li>
                                <a className="is-active" href="#">
                                    <span className="prefix-icon prefix-icon-text-right"><span><i class="fab fa-angellist"></i></span></span>
                                    General
                                </a>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Security</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Top 10</a></li>
                            <li><a href="#">Users</a></li>
                        </ul>
                        <p className="nav-label">Manage</p>
                        <ul>
                            <li><a href="#">Finances</a></li>
                            <li><a href="#">Time</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">Meetings</a></li>
                        </ul>
                    </nav>

                </div>
            
            </div>

        </>
    )
}