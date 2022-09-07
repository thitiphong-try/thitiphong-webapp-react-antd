/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import "./Header.css";
import { Avatar, Button, Col, Drawer, Menu, Row } from "antd";
import { useWindowDimensions } from '../window/getWindowDimensions';

import { Icon } from '@iconify/react';

export default function Header() {

    const { width } = useWindowDimensions();

    const [state, setState] = useState({
        current: 'mail',
        visible: false
    });

    const onMenuDrawer = (status) => {
        setState({
            visible: status,
        });
    };

    const genRightMenu = () => {
        return (
            <Menu mode="inline">
                <Menu.Item
                    key="1"
                    onClick={() => { }}
                >
                    Explore products
                </Menu.Item>

                <Menu.Item
                    key="2"
                    onClick={() => { }}
                >
                    Product design
                </Menu.Item>

                <Menu.Item
                    key="3"
                    onClick={() => { }}
                >
                    Pricing
                </Menu.Item>

                <Menu.Item
                    key="4"
                    onClick={() => { }}
                >
                    Logout
                </Menu.Item>
            </Menu>
        );
    };

    const genLeftMenu = (mode) => {
        return (
            <center>
                {mode === "drawer"}
                <Row
                    style={{
                        marginTop: 5,
                        paddingLeft: (width > 1100 ? '10%' : '5%'),
                        paddingRight: (width > 1100 ? '10%' : '5%')
                    }}
                >
                    <Col span={8}>
                        <Button
                            type='link'
                            size='large'
                            style={{ color: "black" }}
                            onClick={() => { }}
                        ><span className="menu-handle">Explore products</span></Button>
                    </Col>
                    <Col span={8}>
                        <Button
                            type='link'
                            size='large'
                            style={{ color: "black" }}
                            onClick={() => { }}
                        ><span className="menu-handle">Product design</span></Button>
                    </Col>
                    <Col span={8}>
                        <Button
                            type='link'
                            size='large'
                            style={{ color: "black" }}
                            onClick={() => { }}
                        ><span className="menu-handle">Pricing</span></Button>
                    </Col>
                </Row>
            </center>
        )
    }

    const genProfileDisplay = () => {
        return (
            <div
                style={{
                    paddingTop: 6,
                    cursor: "pointer",
                    display: (width > 480 ? 'block' : 'none')
                }}
            // onClick={() => {}}
            >
                <Avatar
                    style={{ float: "right", border: "1px solid #E5E5E5" }}
                    // className="mt-1"
                    size={40}
                    src={`./assets/profile.png`}
                />

                <div
                    style={{
                        float: "right",
                        paddingRight: 10,
                        marginTop: 0
                    }}
                >
                    <Button type='text' size='large'>Logout</Button>
                </div>
            </div>
        );
    };

    return (
        <div className='layout-header'>
            <nav
                className="header"
                style={{ backgroundColor: "white" }}
            >
                <Row style={{ paddingLeft: (width > 1100 ? '10%' : '5%'), paddingRight: (width > 1100 ? '10%' : '5%') }}>
                    <Col xs={12} sm={12} md={5} lg={4} xl={4} xxl={4} >
                        <img
                            src={"./assets/logo-full.png"}
                            style={{ paddingTop: 8, cursor: 'pointer' }}
                            onClick={() => {

                            }}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={19} lg={20} xl={20} xxl={20} >
                        <Row>
                            {width > 950 ?
                                <Col
                                    span={18}
                                    style={{ paddingTop: 0, paddingBottom: 0 }}
                                >
                                    <div
                                        style={{
                                            display: (width > 950 ? 'block' : 'none')
                                        }}
                                    >
                                        {genLeftMenu()}
                                    </div>
                                </Col>
                                : []
                            }

                            <Col
                                span={width > 950 ? 6 : 24}
                                style={{ paddingTop: 0, paddingBottom: 0, height: 50 }}
                            >
                                <div style={{ marginTop: -1 }}>
                                    <Button
                                        type="link"
                                        onClick={() => onMenuDrawer(true)}
                                        style={{
                                            height: 50,
                                            width: 55,
                                            borderRadius: 0,
                                            marginTop: 1,
                                            float: 'right'
                                        }}
                                    >
                                        <div
                                            style={{
                                                marginTop: 5,
                                                // marginLeft: -5
                                            }}
                                        >
                                            <Icon
                                                icon={(width > 480 ? "akar-icons:chevron-down" : "charm:menu-hamburger")}
                                                color={(width > 480 ? "black" : "#0097ec")}
                                                width="24"
                                                height="24"
                                            />
                                        </div>
                                    </Button>

                                    <Drawer
                                        title={
                                            <>
                                                <span>BetterGoods</span>
                                                <Icon
                                                    icon="heroicons-outline:x" width="30"
                                                    height="25"
                                                    style={{
                                                        marginTop: -2,
                                                        float: "right",
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={() => onMenuDrawer(false)}
                                                />
                                            </>
                                        }
                                        placement="right"
                                        closable={false}
                                        onClose={() => onMenuDrawer(false)}
                                        visible={state.visible}
                                        drawerStyle={{ padding: "0px", zIndex: 2002 }}
                                    >
                                        {genRightMenu()}
                                    </Drawer>

                                    {genProfileDisplay()}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </nav>
        </div>
    )
}
