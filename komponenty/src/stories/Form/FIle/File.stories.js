import React from 'react';

export default {
  title: 'Form/File',
};

export const _Default = () => {
  return (
      <div className="prefix--container">
          
          <div className="prefix--mb-5">
              <div className="prefix--mb-7">
                  <p className="h5">File input</p> 
              </div>
              
              <div className="w:is-1">
                <div className="form:file prefix--mb-5">
                    <input id="file1" type="file" className="form:file-input" />
                    <div for="file1" className="form:file-label"><span>Select avatar</span></div>
                </div>
              </div>

              
          </div>

      </div>
  )
};

_Default.story = {
    name: 'Checkbox',
};
