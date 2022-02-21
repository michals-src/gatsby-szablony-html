import React from 'react';

export default function Contact_form(){
    return (
        <div className="site-content-contact--form">
            <div className="m5-y text-center">
                <div className="text5 text4-md">Ready to get started ?</div>
                <p className="text8">Ask away! we will response within 24 hours</p>
            </div>
            <div className="row">
                <form action="">
                    <div className="row">
                        <div className="col col12 col4-lg">
                            <div className="form-item">
                                <label htmlFor="contact-name" className="form-label">Imię</label>
                                <input id="contact-name" type="text" className="form-input"/>
                            </div>
                        </div>
                        <div className="col col12 col4-lg">
                            <div className="form-item">
                                <label htmlFor="contact-email" className="form-label">Email</label>
                                <input id="contact-email" type="email" className="form-input"/>
                            </div>
                        </div>
                        <div className="col col12 col4-lg">
                            <div className="form-item">
                                <label htmlFor="contact-email" className="form-label">Temat</label>
                                <input id="contact-subject" type="text" className="form-input"/>
                            </div>
                        </div>
                        <div className="col col12">
                            <div className="form-item">
                                <label htmlFor="contact-text" className="form-label">Treść</label>
                                <textarea id="contact-text" type="text" className="form-input" rows="10" />
                            </div>
                        </div>
                    </div>
                    <button className="button">Wyślij wiadomość</button>
                </form>
            </div>
        </div>
    )
}