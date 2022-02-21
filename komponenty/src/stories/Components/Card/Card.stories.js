import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Card',

};

export const _Default = () => {
    return (
        <>

            <div className="w:max-4 m-a">

                <div className="grid:r">
                    <div className="m:b-3 grid:c grid:c-6@md">
                        
                        <div className="card">

                            <div className="card-image-fluid">
                                <img src="https://selleads.pl/static/bench-accounting-ziwuqMZNRvs-unsplash-1ba23c9f035477bb9684032f462f0f70.jpg" alt="Hello there" />
                            </div>
                            <div className="d:is-flex f:ai-center f:jc-center h:min-2 h:min-5@md">
                                <div className="p-3">
                                    <h4 className="t:white">Simple card</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                   
                    <div className="m:b-3 grid:c grid:c-6@md">
                                                
                        <div className="card">

                            <div className="card-header">
                                <h5>Quis elit velit duis quis mollit.</h5>
                            </div>
                            <div className="card-image-fluid">
                                <img src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1833&q=80" alt="Hello there" />
                            </div>
                            <div className="card-content">
                                <p>Eu ex aliquip sunt cupidatat laborum dolor consequat non duis nulla qui. Non anim dolore nulla qui fugiat ad voluptate commodo pariatur ullamco quis consequat aliquip fugiat. Magna consequat sint nisi do incididunt elit ullamco quis anim consectetur laborum. Fugiat reprehenderit sunt pariatur non ex. Aute fugiat laboris do laborum ut mollit sit qui commodo. Lorem consequat ut eiusmod voluptate laborum cupidatat laboris cupidatat proident duis aliquip ullamco velit ipsum. Aliqua anim exercitation aliqua officia nisi elit do.</p>
                                <p>Laboris ipsum elit in dolore cillum. Ad culpa sunt sunt consectetur anim ut adipisicing proident nostrud commodo ad aliquip. Id elit Lorem anim eiusmod laboris minim ex occaecat fugiat dolore exercitation nostrud. Minim sint nisi sunt incididunt eu cillum et.</p>
                            </div>
                            <div className="card-footer">
                                Follow us on <a href="#">Slack</a>
                            </div>
                            <div className="card-action">
                                <a className="button button:plain">See my profile</a>
                                <a className="button button:plain">Upgrade</a>
                            </div>

                        </div>
                        
                    </div>
                
                    <div className="m:b-3 grid:c grid:c-6@md">
                                                
                        <div className="card br:is-1 sh:is-3/7">

                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1614540648095-3b1a0bf29570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Hello there" />
                            </div>
                            <div className="card-header">
                                Voluptate proident sunt culpa excepteur duis.
                            </div>
                            <div className="card-content">
                                <p style={{marginTop: "0"}}>Laboris ipsum elit in dolore cillum. Ad culpa sunt sunt consectetur anim ut adipisicing proident nostrud commodo ad aliquip. Id elit Lorem anim eiusmod laboris minim ex occaecat fugiat dolore exercitation nostrud. Minim sint nisi sunt incididunt eu cillum et.</p>
                            </div>
                            <div className="card-footer">
                                Follow us on <a href="#">Slack</a>
                            </div>
                            <div className="card-action">
                                <a className="button button:plain">See my profile</a>
                                <a className="button button:plain">Upgrade</a>
                            </div>

                        </div>
                        
                    </div>
                
                    <div className="m:b-3 grid:c grid:c-6@md">
                                                
                        <div className="card">

                            <div className="card-header">
                                <h5>Quis elit velit duis quis mollit.</h5>
                            </div>
                            <div className="card-content">
                                <p>Eu ex aliquip sunt cupidatat laborum dolor consequat non duis nulla qui. Non anim dolore nulla qui fugiat ad voluptate commodo pariatur ullamco quis consequat aliquip fugiat. Magna consequat sint nisi do incididunt elit ullamco quis anim consectetur laborum. Fugiat reprehenderit sunt pariatur non ex. Aute fugiat laboris do laborum ut mollit sit qui commodo. Lorem consequat ut eiusmod voluptate laborum cupidatat laboris cupidatat proident duis aliquip ullamco velit ipsum. Aliqua anim exercitation aliqua officia nisi elit do.</p>
                                <p>Laboris ipsum elit in dolore cillum. Ad culpa sunt sunt consectetur anim ut adipisicing proident nostrud commodo ad aliquip. Id elit Lorem anim eiusmod laboris minim ex occaecat fugiat dolore exercitation nostrud. Minim sint nisi sunt incididunt eu cillum et.</p>
                            </div>
                            <div className="card-footer">
                                Follow us on <a href="#">Slack</a>
                            </div>
                            <div className="card-action">
                                <a className="button button:plain">See my profile</a>
                                <a className="button button:plain">Upgrade</a>
                            </div>

                        </div>
                        
                    </div>
                
                    <div className="m:b-3 grid:c grid:c-6@md">
                                                
                        <div className="card">

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
                        
                    </div>
                
                </div>
                
            </div>

        </>
    )
}