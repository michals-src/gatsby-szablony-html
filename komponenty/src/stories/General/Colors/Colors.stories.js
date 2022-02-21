import React from 'react';
import '../../../scss/global.scss'


export default {
  title: 'Theme/Colors',
};

export const _Default = () => {
    const $colors = [
      'blue',
      'cyan',
      'teal',
      'green',
      'purple',
      'red',
      'orange',
      'pink',
      'yellow',
  ]

  return (
      <>
      <div className="row">
          {$colors.map(($color) => {
              
              let $items = [];

              for( let $i = 0; $i < 9; $i++ ){
                  let $index = ($i+1) * 10;
                  let $a = $color + '-' + $index;

                  $items.push(<div className={$a} >{$color}-{$index}</div>);
              }
              
              console.log($items)

              return (
                  <>
                      <div className="col-sm-4">
                          { $items.map(($item, $index) => {
                              return $item;
                          }) }
                      </div>
                  </>
              )
          })}

        </div>
      </>
  )
};

_Default.story = {
    name: 'Colors',
};
