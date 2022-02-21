import React from 'react';
import '../../../scss/global.scss';

export default {
  title: 'UI/Breadcumb',

};

export const _Default = () => {
    return (
        <>

            <ul className="prefix-breadcumb">
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
                <li><a href="#">Page 4</a></li>
            </ul>

            <ul className="prefix-breadcumb is-small">
                <li><a href="#"><span className="prefix-icon"><span className="fa fa-address-book"></span></span>Page 1</a></li>
                <li><a href="#"><span className="prefix-icon"><span className="fa fa-amazon"></span></span>Page 2</a></li>
                <li><a href="#"><span className="prefix-icon"><span className="fa fa-android"></span></span>Page 3</a></li>
                <li><a href="#"><span className="prefix-icon"><span className="fa fa-amilia"></span></span>Page 4</a></li>
            </ul>

            <ul className="prefix-breadcumb is-medium is-center">
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
                <li><a href="#">Page 4</a></li>
            </ul>

            <ul className="prefix-breadcumb is-large is-right">
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
                <li><a href="#">Page 4</a></li>
            </ul>

        </>
    )
}