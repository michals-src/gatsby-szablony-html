import React from 'react'

export default function Grid() {

    const $breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];
    const $prefix = 'prefix'
    const $columns = 12
    let $cols = [];

    return (
        <>
            <div className="prefix--row">

                <div className="prefix--col-md cyan-10">.prefix--col-md</div>
                <div className="prefix--col-md cyan-10">.prefix--col-md</div>

                <div className="prefix--col-12 cyan-10">.prefix--col-12</div>
                <div className="prefix--col-11 cyan-20">.prefix--col-12</div>
                <div className="prefix--col-1 cyan-20">.prefix--col-12</div>
                <div className="prefix--col-10 cyan-30">.prefix--col-12</div>
                <div className="prefix--col-2 cyan-30">.prefix--col-12</div>
                <div className="prefix--col-9 cyan-40">.prefix--col-12</div>
                <div className="prefix--col-3 cyan-40">.prefix--col-12</div>
                <div className="prefix--col-8 cyan-50">.prefix--col-12</div>
                <div className="prefix--col-4 cyan-50">.prefix--col-12</div>
                <div className="prefix--col-7 cyan-60">.prefix--col-12</div>
                <div className="prefix--col-5 cyan-60">.prefix--col-12</div>
                <div className="prefix--col-6 cyan-70">.prefix--col-12</div>
                <div className="prefix--col-6 cyan-70">.prefix--col-12</div>

            </div>
        </>
    )
}