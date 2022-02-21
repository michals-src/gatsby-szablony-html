import React from 'react';

const $cards = Array(8).fill("");

const Card = () => {
    return (
        <div className="col col6 col3-lg site-content-services--cards-item">
            <div>
                <p className="text-uppercase m0-b">overline</p>
                <div className="text7 text6-md text5-lg m1-b">
                    Nazwa oferowanej usługi
                </div>
            </div>
            <div>
                <p className="text9 text8-md">Veniam laboris nostrud ex laboris cillum labore voluptate amet et est duis.</p>
            </div>
        </div>
    )
}

export default function Services_cards() {
    return (
        <>
            <div className="w5-max m-auto p1-y">
                <div className="m5-y p3-x">
                    <div className="row">
                            {
                                $cards.map( ($cards, $key) => {
                                    return <Card />
                                })
                            }
                    </div>
                </div>
            </div>
        </>
    )
}