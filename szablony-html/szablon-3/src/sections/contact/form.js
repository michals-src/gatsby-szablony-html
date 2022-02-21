import React from 'react';

export default function Contact_form() {
    return (
        <>
            <div>
                <div className="text3 text2-line m3-b">Napisz do nas</div>
                <div className="form">
                    <div className="row">
                        <div className="col col6">
                            <div className="form-item">
                                <label htmlFor="" className="form-label">Imię i nazwisko</label>
                                <input type="text" className="form-input"/>
                            </div>
                        </div>
                        <div className="col col6">
                            <div className="form-item">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-input"/>
                            </div>
                        </div>
                        <div className="col col12">
                            <label htmlFor="" className="form-label">Treść wiadomości</label>
                            <textarea type="text" className="form-input" rows="8" />
                        </div>
                    </div>
                </div>

                <p className="m3-t">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae assumenda, optio quibusdam ut expedita non quam rem recusandae! Rem perferendis eos eligendi, quidem praesentium minus dolorum rerum possimus commodi.</p>
                
            </div>
        </>
    )
}