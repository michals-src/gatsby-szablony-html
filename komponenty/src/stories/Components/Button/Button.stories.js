import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Button',

};

export const _Default = () => {
    const $colors = [ 'blue', 'green', 'orange', 'red', 'black', 'white' ];

    return (

        <div className="prefix--container">
            <div className="prefix--row">
                <div className="prefix--col-md-12">
                    <div className="prefix--mb-10">
                        <button className="button">Button</button>
                        <button className="button button:gradient">Button</button>
                        <button className="button button:outline">Button</button>
                        <button className="button button:plain">Button</button>
                        <button className="button"><span className="icon"><i class="fas fa-address-card"></i></span></button>
                        <button className="button"><span className="icon"><i class="fas fa-address-card"></i></span><span>Adress card</span></button>
                    </div>

                    {
                        $colors.map( $color => {
                            return (
                                <div className="prefix--mb-10">
                                    <button className={`button button:`+$color}>Button</button>
                                    <button className={`button button:gradient button:`+$color}>Button</button>
                                    <button className={`button button:outline button:`+$color}>Button</button>
                                    <button className={`button button:plain button:`+$color}>Button</button>
                                    <button className={`button button:icon button:`+$color}><span className="icon"><i class="fas fa-address-card"></i></span></button>
                                    <button className={`button button:icon button:`+$color}><span className="icon"><i class="fas fa-address-card"></i></span><span>Adress card</span></button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="prefix--col-md-12">
                    <div className="prefix--mb-10">
                        <button disabled className="button">Button</button>
                        <button disabled className="button button:gradient">Button</button>
                        <button disabled className="button button:outline">Button</button>
                        <button disabled className="button button:plain">Button</button>
                        <button disabled className="button button:icon"><span className="icon"><i class="fas fa-address-card"></i></span></button>
                        <button disabled className="button button:icon"><span className="icon"><i class="fas fa-address-card"></i></span><span>Adress card</span></button>
                    </div>


                    {
                        $colors.map( $color => {
                            return (
                                <div className="prefix--mb-10">
                                    <button disabled className={`button button:`+$color}>Button</button>
                                    <button disabled className={`button button:gradient button:`+$color}>Button</button>
                                    <button disabled className={`button button:outline button:`+$color}>Button</button>
                                    <button disabled className={`button button:plain button:`+$color}>Button</button>
                                    <button disabled className={`button button:icon button:`+$color}><span className="icon"><i class="fas fa-address-card"></i></span></button>
                                    <button disabled className={`button button:icon button:`+$color}><span className="icon"><i class="fas fa-address-card"></i></span><span>Adress card</span></button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}