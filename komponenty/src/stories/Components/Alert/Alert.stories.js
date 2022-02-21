import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Alert',

};

export const _Default = () => {

    const $colors = [ 'default', 'blue', 'green', 'orange', 'red' ];

    return (
        <>

            <div className="prefix--row">
                
                <div className="prefix--col prefix--col-md-6">
                    
                    {$colors.map( ($color, $key) => {
                        let $cN = ($color === "default") ? "" : $color;
                        return (
                            <div key={$key} className={`alert mb-3 alert:`+ $cN }>
                                <header className="alert:header">Hello {$color}</header>
                                <div className="alert:content">
                                    Eiusmod excepteur minim magna cillum elit id et occaecat sunt culpa sint culpa. <a href="#">External site</a> 
                                </div>
                            </div>
                        )
                    })}

                </div>
       
                
                <div className="prefix--col prefix--col-md-6">
                    
                {$colors.map( ($color, $key) => {
                        let $cN = ($color === "default") ? "" : $color;
                        return (
                            <div key={$key} className={`alert mb-3 alert:is-outline alert:`+ $cN }>
                                <header className="alert:header">Hello {$color}</header>
                                <div className="alert:content">
                                    Eiusmod excepteur minim magna cillum elit id et occaecat sunt culpa sint culpa. <a href="#">External site</a> 
                                </div>
                            </div>
                        )
                    })}


                </div>
       
            </div>

        </>
    )
}