import React from 'react';

export default function Contact_form(){
    return (
        <div className="site-content-contact--form">
            <div className="row">
                <div className="col12 col5-lg">
                    <h6 className="text9">We believe in the power of simple communication.</h6>
                    <h3>Feel free to contact for any questions or Help!</h3>
                    <p className="m3-t">We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.</p>
                </div>
                <div className="col12 col6-lg offset1-lg">
                    <form action="">
                        <div className="form-item">
                            <label htmlFor="contact-name" className="form-label">Imię</label>
                            <input id="contact-name" type="text" className="form-input"/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="contact-email" className="form-label">Email</label>
                            <input id="contact-email" type="email" className="form-input"/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="contact-text" className="form-label">Treść</label>
                            <textarea id="contact-text" type="text" className="form-input" />
                        </div>
                        <button className="button">Wyślij wiadomość</button>
                    </form>
                </div>
            </div>
        </div>
    )
}