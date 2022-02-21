import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Text',

};

export const _Default = () => {

    const $text_small_size = Array(4).fill("");
    const $text_large_size = Array(4).fill("");

    return (
        <>

            <div className="w:max-3@lg p:gaps m:auto">
                <div className="text:is-4">Text sizes</div>
                <div className="text:is-2 m:b-5">Wersja testowa, należy wprowadzić normalizację oraz wprowadzić większą różnorodność rozmiarów</div>
                <div>
                    <div className="m:b-5">
                        <div className="text:is-1">Mniejsze rozmiary tekstu</div>

                        {
                            $text_small_size.map( ($v, $key) => {
                                return (
                                <div key={$key} className={`d:is-inline-block m-1 p:3`}>
                                    <div className={`text:is-`+($key+1)+` t:teal-4`}>Aa</div>
                                    <code>.text:is-{$key+1}</code>
                                </div>
                                )
                            })
                        }
                    
                    </div>

                    <div>
                        <div className="text:is-1">Większe rozmiary tekstu</div>
                        
                        {
                            $text_large_size.map( ($v, $key) => {
                                return (
                                    <div key={$key} className={`d:is-inline-block m-1 p:x-3`}>
                                        <div className={`text:is-`+($key+5)+` t:teal-4`}>Aa</div>
                                        <code>.text:is-{$key+5}</code>
                                    </div>
                                )
                            })
                        }
                    
                    </div>
                </div>
                <div className="m:t-5">
                    <div className="grid:r">
                        <div className="grid:c grid:c-6">
                            <div className="text:is-3 m:b-1">Text weights</div>

                            <div className="text:300">Aa - light</div>
                            <div className="text:400">Aa - normal</div>
                            <div className="text:500">Aa - medium</div>
                            <div className="text:700">Aa - bold</div>
                            <div className="text:800">Aa - xbold</div>
                        </div>
                        <div className="grid:c grid:c-6">
                            <div className="text:is-3 m:b-1">Text styles</div>

                            <div className="text:underline">Consectetur voluptate ad velit anim ipsum amet laborum id ad.</div>
                            <div className="text:strike">Text line-through</div>
                            <div className="text:bold">Text bold</div>
                            <div className="text:italic">Text italic</div>
                            <div className="text:capitalize">Text capitalized</div>
                            <div className="text:uppercase">Text uppercase</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}