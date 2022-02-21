import React from 'react';

const $memebers = [
    'Sadia Gardiner',
    'Cienna Davies',
    'Krish Irvine',
];

const Member = () => {
    return (
        $memebers.map( ($name, $key) => {
            return (
                <div key={$key} className="col col6 col4-md m5-b m0-b-md">
                    <div className="card site-content-about--team-member">
                        <div className="site-content-about--team-member-image card-image">
                            <img src="https://images.unsplash.com/photo-1586459023690-8bda067ff1bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1827&q=80" alt="" />
                        </div>
                        <div className="card-content">
                            <h5 className="m1-b">{ $name }</h5>
                            <div className="text9 m0-t m4-b badge">Stanowisko</div>
                            <div className="site-content-about--team-member-socials d-is-flex flex-fd-row">
                                <div className="site-content-about--team-member-socials-item">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.93,5.69V7.14h4.14l-.71,3.66H12.93V23.36H8.66V10.8H6.93V7.14H8.66V4.94a4.58,4.58,0,0,1,1-3.23,4,4,0,0,1,3-1.07h4.37V4.45H13.85a.78.78,0,0,0-.69.35A1.65,1.65,0,0,0,12.93,5.69Z"/></svg>
                                    </a>
                                </div>
                                <div className="site-content-about--team-member-socials-item">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.38,0H6.62A6.63,6.63,0,0,0,0,6.62V17.38A6.63,6.63,0,0,0,6.62,24H17.38A6.63,6.63,0,0,0,24,17.38V6.62A6.63,6.63,0,0,0,17.38,0Zm4.49,17.38a4.5,4.5,0,0,1-4.49,4.49H6.62a4.5,4.5,0,0,1-4.49-4.49V6.62A4.5,4.5,0,0,1,6.62,2.13H17.38a4.5,4.5,0,0,1,4.49,4.49V17.38ZM12,5.82A6.18,6.18,0,1,0,18.18,12,6.18,6.18,0,0,0,12,5.82Zm0,10.23A4.05,4.05,0,1,1,16.05,12,4,4,0,0,1,12,16.05ZM18.44,4a1.57,1.57,0,0,0-1.56,1.56,1.59,1.59,0,0,0,.46,1.11,1.58,1.58,0,0,0,2.21,0A1.59,1.59,0,0,0,20,5.57,1.57,1.57,0,0,0,18.44,4Z"/></svg>
                                    </a>
                                </div>
                                <div className="site-content-about--team-member-socials-item">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24.05,4.49a10.22,10.22,0,0,1-2.85.79,5,5,0,0,0,2.18-2.74,10,10,0,0,1-3.14,1.2A4.93,4.93,0,0,0,11.7,7.13a5.22,5.22,0,0,0,.11,1.13A14,14,0,0,1,1.63,3.07,5,5,0,0,0,3.15,9.7,4.75,4.75,0,0,1,.91,9.09v.06a5,5,0,0,0,4,4.87,4.9,4.9,0,0,1-1.29.17,4.16,4.16,0,0,1-.94-.09,5,5,0,0,0,4.62,3.46,9.91,9.91,0,0,1-6.13,2.11A9.23,9.23,0,0,1,0,19.61a13.92,13.92,0,0,0,7.58,2.22A14,14,0,0,0,21.59,7.71c0-.22,0-.43,0-.64A9.67,9.67,0,0,0,24.05,4.49Z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default function About_team() {
    return (
        <>
            <div className="site-content-about--team-header">
                <div className="m5-b">
                    <div className="w4-max m-auto">
                        <div className="w2-max p3-x">
                            <p className="text-uppercase m0-b">nasz zespół</p>
                            <h1 className=" text-400-is text4-md text2-line m3-b">
                                To właśnie my tworzymy zespół
                            </h1>
                            <p className="text7">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore similique cum dicta libero atque provident?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w4-max m-auto">
                <div className="row p3-x p0-x-xl">
                    <Member />
                </div>
            </div>

        </>
    )
}