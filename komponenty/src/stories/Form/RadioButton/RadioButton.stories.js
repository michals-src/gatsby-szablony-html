import React from 'react';


export default {
  title: 'Form/RadioButton',
};

export const _Default = () => {
    return (
      <div className="prefix--container">
          
          <div className="prefix--row">
              <div className="prefix--col-md-4">
                  
                  <div className="prefix--mb-5">
                      <div className="prefix--mb-7">
                          <p className="h5">Radio button</p> 
                      </div>
                      
                      <div className="prefix--radio-button prefix--mb-5">
                          <input id="check1" type="radio" className="prefix--radio-button-input" />
                          <label for="check1" className="prefix--radio-button-label">
                              <div className="prefix--radio-button-check"></div>
                              <span>Radio button</span>
                          </label>
                      </div>

                      <div className="prefix--radio-button prefix--mb-5">
                          <input checked id="check2" type="radio" className="prefix--radio-button-input" />
                          <label for="check2" className="prefix--radio-button-label">
                              <div className="prefix--radio-button-check"></div>
                              <span>Checked radio button</span>
                          </label>
                      </div>

                      <div className="prefix--radio-button prefix--mb-5">
                          <input disabled id="check3" type="radio" className="prefix--radio-button-input" />
                          <label for="check3" className="prefix--radio-button-label">
                              <div className="prefix--radio-button-check"></div>
                              <span>Checked radio button</span>
                          </label>
                      </div>

                      <div className="prefix--radio-button prefix--mb-5">
                          <input disabled checked id="check4" type="radio" className="prefix--radio-button-input" />
                          <label for="check4" className="prefix--radio-button-label">
                              <div className="prefix--radio-button-check"></div>
                              <span>Checked disabled radio button</span>
                          </label>
                      </div>
                      
                  </div>

              </div>
              <div className="prefix--col-md-8">
                  
                  <div className="prefix--radio-button prefix--mb-5">
                      <input id="check-text1" name="check-test" type="radio" className="prefix--radio-button-input" />
                      <label for="check-text1" className="prefix--radio-button-label">
                          <div className="prefix--radio-button-check"></div>
                          <span>Radio button</span>
                      </label>
                  </div>
                  
                  <div className="prefix--radio-button prefix--mb-5">
                      <input id="check-text2" name="check-test" type="radio" className="prefix--radio-button-input" />
                      <label for="check-text2" className="prefix--radio-button-label">
                          <div className="prefix--radio-button-check"></div>
                          <span>Radio button</span>
                      </label>
                  </div>
                  
                  <div className="prefix--radio-button prefix--mb-5">
                      <input data-valid="valid" id="check-text3" name="check-test" type="radio" className="prefix--radio-button-input" />
                      <label for="check-text3" className="prefix--radio-button-label">
                          <div className="prefix--radio-button-check"></div>
                          <span>Radio button</span>
                      </label>
                  </div>
                  
                  <div className="prefix--radio-button prefix--mb-5">
                      <input data-valid="invalid" id="check-text4" name="check-test" type="radio" className="prefix--radio-button-input" />
                      <label for="check-text4" className="prefix--radio-button-label">
                          <div className="prefix--radio-button-check"></div>
                          <span>Radio button</span>
                      </label>
                  </div>

              </div>
          </div>

      </div>
  )
};

_Default.story = {
    name: 'RadioButton',
};
