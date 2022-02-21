import React,  {useState} from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Steps',

};

export const _Default = () => {
    
    const [ step_state, set_step_state ] = useState(0);
    const $steps = Array(4).fill("");

    return (
        <>

            <div className="prefix--container">
                <div className="my-3">

                    <div className="steps">
                        <div className="steps:item steps:i-is-active">
                            <a className="steps:link">Step 1</a>
                        </div>
                        <div className="steps:item">
                            <a className="steps:link">Step 2</a>
                        </div>
                        <div className="steps:item">
                            <a className="steps:link">Step 3</a>
                        </div>
                        <div className="steps:item">
                            <a className="steps:link">Step 4</a>
                        </div>
                    </div>
                    
                </div>
                <div className="my-3">

                    <div className="steps">
                    {
                        $steps.map( ($value, $key) => {
                            let $state = ( step_state >= $key ) ? ( step_state == $key ) ? "is-active" : "is-filled" : "";

                            return (
                                <div key={$key} className={`steps:item ` + $state }>
                                    <a className="steps:link steps:has-icon">
                                    <span className="steps:icon">
                                        <i class="fas fa-box-open"></i>
                                    </span>
                                    <span>Step {$key + 1}</span>
                                    </a>
                                </div>
                            );
                        })
                    }
                    </div>
                    
                    <div className="d:is-flex f:jc-space-around mt-4">
                    <button role="button" className="button button:outline button:blue" onClick={() => {
                        if( step_state > 0 ){
                           set_step_state( step_state - 1 );
                        }
                    }}>Poprzedni</button>
                    <button role="button" className="button button:outline button:blue" onClick={() => {
                        if( step_state < 4 ){
                            set_step_state( step_state + 1 );
                        }
                    }}>Następny</button>
                    </div>
                </div>
            </div>

        </>
    )
}