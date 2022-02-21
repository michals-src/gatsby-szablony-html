import React from 'react';

export default {
  title: 'Form/Select',
};

export const _Default = () => {
    return (
      <div className="prefix--container">
          
          <div className="prefix--select mb-5">
              <select className="prefix--select-input">
                  <option>Value 1</option>
              </select>
          </div>

          <div className="form:input-is-loading">
            <div className="prefix--select mb-5">
                <select className="prefix--select-input">
                    <option>Value 1</option>
                </select>
            </div>
          </div>
          
          <div className="prefix--select">
              <select disabled className="prefix--select-input">
                  <option>Value 1</option>
              </select>
          </div>

      </div>
  )
};

_Default.story = {
    name: 'Select',
};
