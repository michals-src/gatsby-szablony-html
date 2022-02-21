import React from 'react';

export default {
  title: 'Form/Checkbox',
};

export const _Default = () => {
  return (
      <div className="prefix--container">
          
          <div className="prefix--mb-5">
              <div className="prefix--mb-7">
                  <p className="h5">Text input</p> 
              </div>
              
              <div className="form:checkbox prefix--mb-5">
                  <input id="check1" type="checkbox" className="form:checkbox-input" />
                  <label for="check1" className="form:checkbox-label"><span>Checkbox</span></label>
              </div>

              <div className="form:checkbox prefix--mb-5">
                  <input checked id="check1" type="checkbox" className="form:checkbox-input" />
                  <label for="check1" className="form:checkbox-label"><span>Checkbox</span></label>
              </div>

              <div className="form:checkbox prefix--mb-5">
                  <input disabled="disabled" id="check1" type="checkbox" className="form:checkbox-input" />
                  <label for="check1" className="form:checkbox-label"><span>Checkbox</span></label>
              </div>

              <div className="form:checkbox prefix--mb-5">
                  <input checked disabled="disabled" id="check1" type="checkbox" className="form:checkbox-input" />
                  <label for="check1" className="form:checkbox-label"><span>Checkbox</span></label>
              </div>
              
          </div>

      </div>
  )
};

_Default.story = {
    name: 'Checkbox',
};
