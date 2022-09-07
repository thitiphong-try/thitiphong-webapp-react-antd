/* eslint-disable jsx-a11y/alt-text */
import { Button, Col, Image, Row } from 'antd';
import React from 'react';
import { useWindowDimensions } from '../window/getWindowDimensions';

import "./Footer.css";

export default function Footer() {

    const { width } = useWindowDimensions();

    return (
        <div className='layout-footer'>
            <nav
                style={{
                    backgroundColor: "white",
                    color: "white",
                    paddingTop: (width > 710 ? 24 : 40),
                    paddingBottom: (width > 710 ? 24 : 40)
                }}
            >
                <Row style={{ paddingLeft: (width > 1100 ? '10%' : '5%'), paddingRight: (width > 1100 ? '10%' : '5%') }}>
                    <Col span={(width > 710 ? 4 : 24)}>
                        <div style={{ paddingTop: -3 }}>
                            <img src="./assets/logo-alone.png" width={60} />
                        </div>
                    </Col>
                    <Col span={(width > 710 ? 12 : 24)}>
                        <div style={{ paddingTop: (width > 710 ? 0 : 18) }}>
                            <Button
                                type='link'
                                size='large'
                                style={{ 
                                    color: "black", 
                                    display: (width > 710 ? "inline-block" : "block"), 
                                    paddingLeft: (width > 710 ? "" : 0), 
                                    paddingRight: (width > 710 ? "" : 0) 
                                }}
                                onClick={() => { }}
                            ><span className="menu-handle">Ornare</span></Button>
                            <Button
                                type='link'
                                size='large'
                                style={{ 
                                    color: "black", 
                                    display: (width > 710 ? "inline-block" : "block"), 
                                    paddingLeft: (width > 710 ? "" : 0), 
                                    paddingRight: (width > 710 ? "" : 0) 
                                }}
                                onClick={() => { }}
                            ><span className="menu-handle">Accumsan</span></Button>
                            <Button
                                type='link'
                                size='large'
                                style={{ 
                                    color: "black", 
                                    display: (width > 710 ? "inline-block" : "block"), 
                                    paddingLeft: (width > 710 ? "" : 0),
                                    paddingRight: (width > 710 ? "" : 0) 
                                }}
                                onClick={() => { }}
                            ><span className="menu-handle">Mattis</span></Button>
                        </div>
                    </Col>
                    <Col span={(width > 710 ? 8 : 24)}>
                        <div style={{ paddingTop: (width > 710 ? 2 : 18), float: (width > 710 ? "right" : "left") }}>
                            <span style={{ paddingRight: 24 }}>
                                <Image fallback="./assets/facebook-logo.png" src="error" width={35} />
                            </span>
                            <span style={{ paddingRight: 24 }}>
                                <Image fallback="./assets/twitter-logo.png" src="error" width={35} />
                            </span>
                            <span style={{ paddingRight: 24 }}>
                                <Image fallback="./assets/instagram-logo.png" src="error" width={35} />
                            </span>
                            <span style={{  }}>
                                <Image fallback="./assets/youtube-logo.png" src="error" width={35} />
                            </span>
                        </div>
                    </Col>
                </Row>
            </nav>
        </div>
    )
}
