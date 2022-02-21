import React from 'react';

export default {
  title: 'Form/Switch',
};

export const _Default = () => {
  return (
      <div className="prefix--container">
          
          <div className="prefix--mb-5">
              <div className="tx:is-1 mb-2">Form switch check</div>
              
              <div className="form:item">
                <div className="form:checkbox form:switch">
                    <input id="check1" type="checkbox" className="form:checkbox-input" />
                    <label for="check1" className="form:checkbox-label"><span>Switching by checkbox</span></label>
                </div>
              </div>
              <div className="form:item">
                <div className="form:checkbox form:switch">
                    <input checked id="check2" type="checkbox" className="form:checkbox-input" />
                    <label for="check2" className="form:checkbox-label"><span>Checked switch</span></label>
                </div>
              </div>
              <div className="form:item">
                <div className="form:checkbox form:switch">
                    <input disabled id="check3" type="checkbox" className="form:checkbox-input" />
                    <label for="check3" className="form:checkbox-label"><span>Disabled switch</span></label>
                </div>
              </div>
              
          </div>

      </div>
  )
};

_Default.story = {
    name: 'Switch',
};
