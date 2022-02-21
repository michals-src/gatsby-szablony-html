import React from 'react'

export default {
    title: 'Example/Button',
    component: abc
  };

const abc = () => {
   
    const containerStyle = { margin: '0 auto', maxWidth: '1170px', backgroundColor: '#eee', padding: '50px' }
    const sectionStyle = { marginBotton: '100px', backgroundColor: '#fff', padding: '25px', border: '1px solid #aaa' }
    const contentStyle = { margin: '40px 0 50px 0' }

    const Row = ({children, ...props}) => {
        return <div className="row" {...props}>{children}</div>
    }

    return (
        <>
            <div style={containerStyle}>
                <section style={sectionStyle}>
                    <h1>Typograph</h1>

                    <div style={contentStyle}>
                        <h3>Kolory</h3>
                        <Row>
                            <div className="col">
                                <div>#FFFFFF</div>
                            </div>
                            <div className="col">
                                <div>#FFFFFF</div>
                            </div>
                            <div className="col">
                                <div>#FFFFFF</div>
                            </div>
                        </Row>
                    </div>



                </section>
            </div>

            

        </>
    )
}