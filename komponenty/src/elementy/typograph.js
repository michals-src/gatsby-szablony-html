import React from 'react'

export default function Typograph() {

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
                        <h3>Czcionki</h3>

                            <div>
                                <Row>
                                    <div className="col-4" style={{paddingRight: '15px'}}>Nazwa Czcionki</div>
                                    <div className="col-8">Laboris sint sunt proident eiusmod eu qui qui ex minim dolor minim amet.</div>
                                </Row>
                            </div>
                            
                    </div>

                    <div style={contentStyle}>
                        <Row>
                           <div className="col">
                            <h3>Nagłówki rozmiary</h3>
                                <div style={contentStyle}>
                                    <h1>Heading 1</h1>
                                    <h2>Heading 2</h2>
                                    <h3>Heading 3</h3>
                                    <h4>Heading 4</h4>
                                    <h5>Heading 5</h5>
                                    <h6>Heading 6</h6>
                                </div>
                           </div>
                           <div className="col">
                            <h3>Heading build</h3>
                                <div style={contentStyle}>
                                    <div className="px--heading-label">
                                        <span>.px--heading-label</span>
                                    </div>
                                    <h1 className="px--heading-1">Heading 1</h1>
                                    <div className="px--heading-helpText">
                                        <span>.px--heading-helpText</span>
                                    </div>
                                </div>
                           </div>
                        </Row>
                    </div>

                    <div style={contentStyle}>
                        <h3>Text</h3>
                        <Row>
                            <div className="col">
                              <h3>Rozmiary</h3>
                                <div style={contentStyle}>

                                    <div><p>XXL text</p></div>
                                    <div><p>XL text</p></div>
                                    <div><p>L text</p></div>
                                    <div><p>Normal text</p></div>
                                    <div><p>SM text</p></div>
                                    <div><p>XS text</p></div>

                                    <div><p>Broken text</p></div>
                                    <div><p>Underlined text</p></div>
                                    <div><p>Underlined text</p></div>

                                </div>
                            </div>
                            <div className="col">
                              <h3>Style</h3>
                                <div style={contentStyle}>
                                    <div><p><span>Broken text</span></p></div>
                                    <div><p><span>Underlined text</span></p></div>
                                </div>
                            </div>
                            <div className="col">
                              <h3>Link</h3>
                                <div style={contentStyle}>
                                    <div><a href="#">Normal Link</a></div>
                                    <div><a href="#">Button Link</a></div>
                                    <div>Elit fugiat <span><a href="#">Inline text Link</a></span> aliqua pariatur culpa exercitation consectetur sint elit aliquip laborum.</div>
                                </div>
                            </div>
                        </Row>
                    </div>
                   
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