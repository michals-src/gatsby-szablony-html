import React from 'react';


export default {
  title: 'Form/Textfield',
};

export const _Default = () => {
    return (
      <div className="prefix--container">
          
          <div className="prefix--mb-5">
            <p className="h5">Text input</p>
            <div className="form:group form:is-loading form:icons-has">
                
                <div className="icon form:icons-is-left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="Warstwa_2" data-name="Warstwa 2"><path d="M17.25,10.5h-1A4.39,4.39,0,0,0,12,6a4.39,4.39,0,0,0-4.25,4.5h-1A5.38,5.38,0,0,1,12,5,5.38,5.38,0,0,1,17.25,10.5Z"/><path d="M17.5,19H6.5A1.5,1.5,0,0,1,5,17.5v-6A1.5,1.5,0,0,1,6.5,10h11A1.5,1.5,0,0,1,19,11.5v6A1.5,1.5,0,0,1,17.5,19Zm-11-8a.5.5,0,0,0-.5.5v6a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-6a.5.5,0,0,0-.5-.5Z"/><rect x="6.75" y="10" width="1" height="1"/></g></svg>
                </div>
                <input type="text" value="Esse veniam nisi et sint ullamco ad aute reprehenderit cillum labore magna do nisi adipisicing." name="form-textfield" className="prefix--form-input" />
                <div className="icon form:icons-is-right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="Warstwa_3" data-name="Warstwa 3"><polygon points="10.5 15.71 7.15 12.35 7.85 11.65 10.5 14.29 16.15 8.65 16.85 9.35 10.5 15.71"/></g></svg>
                </div>

            </div>
                
          </div>
          <div className="prefix--mb-5">
            <p className="h5">Text input disabled</p>
            <div className="form:input-is-loading">
                <input type="text" value="Aliquip commodo dolor qui proident esse Lorem minim." name="form-textfield" className="prefix--form-input" disabled />
            </div>
          </div>
          <div className="prefix--mb-12 mt-3">
              <div className="tx:is-1 mt-2 mb-1">Labels, help lines for input control</div>
              <label className="prefix--form-label" for="form-text-storybook">Simple label</label>
              <div className="prefix--form-input-pre-line">form-text-input-preline</div>
              
              <div className="form:input-is-loading">
                <input  className="prefix--form-input" id="form-text-storybook" type="text" name="form-textfield" />
              </div>
              <span className="prefix--form-validation-feedback">form-validation-feedback</span>
          </div>
          <div className="prefix--mb-5">
            <div className="tx:is-1 mt-2 mb-1">Read only control</div>
              <input readonly="true" value="Aliqua mollit labore officia reprehenderit sint incididunt mollit eiusmod nulla minim ex occaecat proident." type="text" name="form-textfield" className="prefix--form-input" />
          </div>
          <div className="prefix--mb-5">
            <div className="tx:is-1 mt-2 mb-1">Sizes</div>
              <input placeholder="Magna elit magna ad reprehenderit aute qui labore consequat consectetur cupidatat." type="text" name="form-textfield" className="prefix--form-input prefix--form-text-input-sm mb-1" />
              <input type="text" name="form-textfield" className="mb-1 prefix--form-input prefix--form-text-readonly" />
              <input type="text" name="form-textfield" className="prefix--form-input prefix--form-text-input-lg prefix--form-text-readonly" />
          </div>

      </div>
  )
};

_Default.story = {
    name: 'Textfield',
};
