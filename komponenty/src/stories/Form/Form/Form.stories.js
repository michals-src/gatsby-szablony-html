import React from 'react';

export default {
  title: 'Form/Form',
};

export const _Default = () => {
  return (
    <div className="prefix--container">
        
        <div className="prefix-form">

          <div className="mb-15">
            <form>
                <div className="form:item">
                    
                  <div className="form:item-collection">

                    <div className="form:select">
                      <select className="form:select-input">
                        <option>Select ...</option>
                      </select>
                    </div>

                    <input className="form:input" type="text" />

                    <button className="button button:blue">Send nudes</button>

                  </div>

                </div>
                
            </form>
          </div>

          <div className="mb-15">
            <form>
                <div className="form:item">
                    <label className="form:label">Username</label>
                    <input className="form:input" type="text" />
                    <p className="form:help-line">Cillum qui sit proident culpa ut magna Lorem mollit amet nisi mollit in.</p>
                </div>
                <div className="form:item">
                    <label className="form:label">Password</label>
                    <div className="form:help-line">Enter your password from registration or write your secret code instead.</div>
                    <div className="form:group form:icons-has-left">
                      <div className="icon form:icons-is-left">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="Warstwa_2" data-name="Warstwa 2"><path d="M17.25,10.5h-1A4.39,4.39,0,0,0,12,6a4.39,4.39,0,0,0-4.25,4.5h-1A5.38,5.38,0,0,1,12,5,5.38,5.38,0,0,1,17.25,10.5Z"/><path d="M17.5,19H6.5A1.5,1.5,0,0,1,5,17.5v-6A1.5,1.5,0,0,1,6.5,10h11A1.5,1.5,0,0,1,19,11.5v6A1.5,1.5,0,0,1,17.5,19Zm-11-8a.5.5,0,0,0-.5.5v6a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-6a.5.5,0,0,0-.5-.5Z"/><rect x="6.75" y="10" width="1" height="1"/></g></svg>
                      </div>
                      <input className="form:input" type="password" />
                    </div>
                    <div className="form:help-line">Do you forgot your password ? <a href="#">Reset it now !</a>.</div>
                </div>
            </form>
          </div>

          <div className="prefix--mb-15">
            <form>
            
                <div className="form:item">
                  <input data-valid="valid" className="form:input" type="text" />
                  <span className="form:help-line form:is-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>

                <div className="form:item">
                  <input data-valid="invalid" className="form:input" type="text" />
                  <span className="form:help-line form:is-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>

                <div className="form:item">
                  <div className="form:select form:is-valid">
                    <select data-valid="valid" className="form:select-input">
                      <option>Hello world</option>
                    </select>
                  </div>
                  <span className="form:help-line form:is-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>


                <div className="form:item">
                  <div className="form:select form:is-invalid">
                    <select data-valid="invalid" className="form:select-input">
                      <option>Hello world</option>
                    </select>
                  </div>
                  <span className="form:help-line form:is-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>

                <div className="form:item">
                  <div className="form:checkbox form:is-valid">
                    <input data-valid="valid" className="form:checkbox-input" type="checkbox" />
                    <label className="form:checkbox-label">
                      <span>Checkbox</span>
                    </label>
                  </div>
                  <span className="form:help-line form:is-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>

                <div className="form:item">
                  <div className="form:checkbox form:is-invalid">
                    <input data-valid="invalid" className="form:checkbox-input" type="checkbox" />
                    <label className="form:checkbox-label">
                      <span>Checkbox</span>
                    </label>
                  </div>
                  <span className="form:help-line form:is-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>

                <div className="form:item">

                  <div className="form:radio-button form:is-valid">
                      <input data-valid="valid" id="check-text1" name="check-test" type="radio" className="form:radio-button-input" />
                      <label for="check-text1" className="form:radio-button-label">
                          <div className="form:radio-button-check"></div>
                          <span>Radio button</span>
                      </label>
                  </div>
                  <span className="form:help-line form:is-feedback">Wszystko jest ok</span>

                </div>

                <div className="form:item">

                  <div className="form:radio-button form:is-invalid">
                    <input data-valid="invalid" name="check-test" className="form:radio-button-input" type="radio" />
                    <label for="check-test" className="form:radio-button-label">
                      <div className="form:radio-button-check"></div>
                      <span>Checkbox</span>
                    </label>
                  </div>
                  <span className="form:help-line form:is-feedback">Field is required</span>

                </div>

            </form>
          </div>

        </div>

    </div>
  )
};

_Default.story = {
    name: 'Form',
};
