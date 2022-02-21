import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Navbar',

};

export const _Default = () => {
    return (
        <>
            <div style={{marginTop: "50px", marginBottom: "1000px"}}>
                <nav className="navbar small-device">

                    <div className="navbar-header">
                        <div className="navbar-tapmenu">
                            <div className="navbar-tapmenu-items">
                                <div className="navbar-tapmenu-item"></div>
                                <div className="navbar-tapmenu-item"></div>
                                <div className="navbar-tapmenu-item"></div>
                            </div>
                        </div>
                        <div className="navbar-brand">
                            <a href="#">Brand</a>
                        </div>
                    </div>

                    <div className="navbar-nav-list">
                        <div className="navbar-end">
                            <ul className="navbar-nav-list-items">
                                <li className="navbar-nav-list-item has-dropdown-fluid">
                                    <a className="has-dropdown" href="#">Homepage</a>
                                    <div className="navbar-nav-dropdown is-fluid">
                                        <div className="navbar-nav-dropdown-items prefix--row">
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                               </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Docs</a>
                                    <div className="navbar-nav-dropdown">
                                        <div className="navbar-nav-dropdown-items">
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Dashboard</h6>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Information</h6>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Security</h6>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Pricing</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Works</a>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>

                            <ul className="navbar-nav-list-items">
                                <li className="navbar-nav-list-item">
                                    <a className="is-neutral" href="#"><button role="button" className="prefix--button prefix--button-icon prefix--button-plain">
                                        <span className="prefix--icon"><i class="fab fa-facebook-square"></i></span>
                                    </button></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>



            <div style={{marginTop: "100px", marginBottom: "100px"}}>
                <nav className="navbar">

                    <div className="navbar-header">
                        <div className="navbar-tapmenu"></div>
                        <div className="navbar-brand">
                            <a href="#">Brand</a>
                        </div>
                    </div>

                    <div className="navbar-nav-list">
                        <div className="navbar-start">
                            <ul className="navbar-nav-list-items">
                                <li className="navbar-nav-list-item has-dropdown-fluid">
                                    <a className="has-dropdown" href="#">Homepage</a>
                                    <div className="navbar-nav-dropdown is-fluid">
                                        <div className="navbar-nav-dropdown-items prefix--row">
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Dashboard</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="navbar-nav-list-item has-dropdown-fluid">
                                    <a href="#">Docs</a>
                                    <div className="navbar-nav-dropdown is-fluid">
                                        <div className="navbar-nav-dropdown-items prefix--row">
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Personal</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Security</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Information</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item prefix--col prefix--col-6">
                                                <a href="#">
                                                    <h5>Addons</h5>
                                                    <div className="navbar-nav-list-item-label">Adipisicing occaecat ea incididunt eu dolore cupidatat ipsum sunt occaecat elit occaecat quis in adipisicing.</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                              
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Works</a>
                                    <div className="navbar-nav-dropdown">
                                        <ul className="navbar-nav-dropdown-items">
                                            <li className="navbar-nav-dropdown-item"><a href="#">Toshiba</a></li>
                                            <li className="navbar-nav-dropdown-item"><a href="#">Samsung</a></li>
                                            <li className="navbar-nav-dropdown-item"><a href="#">Sony</a></li>
                                            <li className="navbar-nav-dropdown-item"><a href="#">Apple</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-nav-list-items">
                                
                                <a className="navbar-nav-list-item" href="#">News</a>
                                <a className="navbar-nav-list-item" href="#">Generic</a>
                                <div className="navbar-nav-list-item">
                                    <a className="is-neutral" href="#">
                                        <button style={{padding: "40px"}} className="prefix--button prefix--button-outline prefix--button-icon">
                                            <span className="prefix--icon"><i class="fab fa-facebook-square"></i></span>
                                        </button>
                                    </a>
                                </div>
                                
                            </div>
                        </div>

                    </div>

                </nav>
            </div>

            <div style={{marginTop: "300px", marginBottom: "300px"}}>
                <nav className="navbar">

                    <div className="navbar-header">
                        <div className="navbar-tapmenu"></div>
                        <div className="navbar-brand">
                            <a href="#">Brand</a>
                        </div>
                    </div>

                    <div className="navbar-nav-list">
                        <div className="navbar-start">
                            <ul className="navbar-nav-list-items">
                                <li className="navbar-nav-list-item">
                                    <a className="has-dropdown" href="#">Homepage</a>
                                    <div className="navbar-nav-dropdown">
                                        <div className="navbar-nav-dropdown-items">
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Dashboard</h6>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Information</h6>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Security</h6>
                                                </a>
                                            </div>
                                            <div className="navbar-nav-dropdown-item">
                                                <a href="#">
                                                    <h6>Pricing</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Docs</a>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Works</a>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <ul className="navbar-nav-list-items">
                                <li className="navbar-nav-list-item">
                                    <a className="is-neutral" href="#"><button role="button" className="prefix--button prefix--button-icon prefix--button-plain">
                                        <span className="prefix--icon"><i class="fab fa-facebook-square"></i></span>
                                    </button></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>

            <div style={{marginTop: "300px", marginBottom: "300px"}}>
                <nav className="navbar">

                    <div className="navbar-header">
                        <div className="navbar-tapmenu"></div>
                        <div className="navbar-brand">
                            <a href="#">Brand</a>
                        </div>
                    </div>

                    <div className="navbar-nav-list">
                        <div className="navbar-end">
                            <ul className="navbar-nav-list-items">
                                <li className="navbar-nav-list-item">
                                    <a className="has-dropdown" href="#">Homepage</a>
                               </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Docs</a>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Works</a>
                                </li>
                                <li className="navbar-nav-list-item">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>

                            <ul className="navbar-nav-list-items">
                                <li className="navbar-nav-list-item">
                                    <a className="is-neutral" href="#"><button role="button" className="prefix--button prefix--button-icon prefix--button-plain">
                                        <span className="prefix--icon"><i class="fab fa-facebook-square"></i></span>
                                    </button></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>


        </>
    )
}