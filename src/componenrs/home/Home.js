/* eslint-disable array-callback-return */
import { Col, Image, Row, Spin } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react'
import Cards from '../../containers/Card/Cards';
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';
import { useWindowDimensions } from '../../containers/window/getWindowDimensions';

const cardInfo1 = [
    {
        img: "./assets/how-it-work-1.png",
        title: "1. Lorem ipsum oder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        img: "./assets/how-it-work-2.png",
        title: "2.Odee lorem ipsum",
        description: "Velit risus semper proin ac, aliquam tristique justo vulputate augue."
    },
    {
        img: "./assets/how-it-work-3.png",
        title: "3. Yopus orem ipsum oder",
        description: "Maecenas ultricies amet justo, egestas enim tempus diam leo."
    },
    {
        img: "./assets/how-it-work-4.png",
        title: "4. Momu ipsum lorem",
        description: "Mauris odio fames porta fames facilisis cursus enim."
    },
]

const cardInfo2 = [
    {
        img: "./assets/power-up-2.png",
        title: "Yopus orem ipsum oder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum est facilisi mi sec ultrices."
    },
    {
        img: "./assets/power-up-3.png",
        title: "Odee lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum est facilisi mi sec ultrices."
    }
]

export default function Home() {

    const { width } = useWindowDimensions();
    const [loading, setLoading] = useState(false);

    useEffect(() => {

    }, []);

    const clickThroughRateImg = () => {
        return (
            <Col xs={24} sm={24} md={12} lg={10} style={{ width: '100%' }}>
                <center>
                    <Image
                        src={"error"}
                        fallback={"./assets/click-through-rate.png"}
                    />
                </center>
            </Col>
        );
    }

    const group1 = () => {
        return (
            <div className='board-t1'>
                <Row style={{ paddingLeft: (width > 1100 ? '10%' : '5%'), paddingRight: (width > 1100 ? '10%' : '5%'), paddingTop: 0 }}>
                    {width <= 768 ? clickThroughRateImg() : []}
                    <Col xs={24} sm={24} md={12} lg={14} style={{ paddingTop: '6%' }}>
                        <div className='title-sz-bl-t1'>Height click-through rates for your product</div>
                        <span className='desc-t1'>Dont't stop tracking your product and better analyze your customers just too easy steps.</span>
                    </Col>
                    {width > 768 ? clickThroughRateImg() : []}
                </Row>
            </div>
        );
    }

    const group2 = () => {
        return (
            <div className='board-t2'>
                <Row
                    style={{
                        paddingLeft: (width > 1100 ? '10%' : '5%'),
                        paddingRight: (width > 1100 ? '10%' : '5%')
                    }}
                >
                    <Col span={24} style={{ textAlign: "center", paddingBottom: '2%' }}>
                        <div className='title-sz-bl-t2'>How BetterGoods works?</div>
                        <span className='desc-t1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum est facilisimi sed nec ultrices. Ullamcorper ut proin arcu mi vel erat.</span>
                    </Col>

                    {cardInfo1.map((val, index) =>
                        <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6} xxl={4}>
                            {console.log(val)}
                            <Cards
                                data={val}
                                cardPaddingLeft={0}
                                cardPaddingRight={0}
                                cardPaddingTop={0}
                                cardPaddingBottom={0}
                                radius={10}
                            />
                        </Col>
                    )}

                </Row>
            </div>
        );
    }

    const group3 = () => {
        return (
            <div className='board-t3'>
                <Row
                    style={{
                        paddingLeft: (width > 1100 ? '10%' : '5%'),
                        paddingRight: (width > 1100 ? '10%' : '5%')
                    }}
                >
                    <Col span={24}>
                        <div className='title-sz-bl-t2'>Power-up your performance</div>
                    </Col>
                    {width > 768 ?
                        <>
                            <Col span={24}>
                                <label className='desc-t1'>Augue pellentesque egestas ipsum justo, dictum commodo in erat à.  Vel bibendum consectetur convallis faucibus velit elementum lacus, ac.  Rhoncus, risus tellus convallis gravida.  Vestibulum odia dapibus ut laoreet.  Quis aliquam massa areu commodo enim aenean eget at tellus.  Blandit viverra nascetur amet tristique nunc laoreet.  Massa elit semper nec eleifend tristique tristique.  Tempor eu euismod tincidunt vestibulum nulla curabitur habitant.  Site consectetur et amet scelerisque adipiscing in sed adipiscing neque imperdiet in sed et imperdiet gravida facilisi morbi.</label>
                            </Col>
                            <Col span={24} style={{ paddingTop: '4%' }}>
                                <label className='desc-t1'>Egestas lectus amet volutpat turpis orci neque purus elementum.  Eu ultrices laoreet facilisis diam sit elementum nunc egestas maecenas.  At nisl ut amet, cursus ac imperdiet mauris ridiculus dapibus.  Praesent vitae, eu nunc auctor ut pharetra.  Adipiscing amet in commodo duis gravida sem mi.  Consectetur et at sagittis vulputate sed orci viverra sem amet: Tristique sit rhoncus sit enim cras consectetur quam vel interdum.</label>
                            </Col>
                        </>
                        :
                        <Col span={24}>
                            <label className='desc-t1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Purus ipsum est facilisi mi sed nec ultrices.  Ullamcorper ut proin arcu mi vel erat.</label>
                        </Col>
                    }
                </Row>
            </div>
        );
    }

    const group4 = () => {
        return (
            <div
                className='board-t4'
                style={{ paddingTop: (width > 768 ? "2%" : 0) }}
            >
                <Row
                    style={{
                        paddingLeft: (width > 1100 ? '10%' : (width > 768 ? '5%' : 0)),
                        paddingRight: (width > 1100 ? '10%' : (width > 768 ? '5%' : 0)),
                        paddingTop: 0
                    }}
                >
                    {cardInfo2.map((val, index) =>
                        <Col key={index} xs={24} sm={24} md={12} lg={12}>
                            {console.log(val)}
                            <Cards
                                data={val}                                                                          // information
                                cardPaddingLeft={width > 768 ? (index === 0 ? 0 : 10) : 0}                          // size
                                cardPaddingRight={width > 768 ? ((cardInfo2.length - 1) === index ? 0 : 10) : 0}    // size
                                cardPaddingTop={(width > 768 ? 10 : 0)}                                            // size
                                cardPaddingBottom={50}                                                              // size
                                radius={0}                                                                          // size
                                textLocal={"center"}                                                                // left, right, center
                                textPaddingTop={16}                                                                 // size
                            />
                        </Col>
                    )}
                </Row>
            </div>
        );
    }

    return (
        <>
            <Header />
            <Content style={{ backgroundColor: "#F5F5F5" }}>
                <div className='layout-body'>
                    <div
                    // style={{ paddingLeft: (width > 1100 ? '10%' : '5%'), paddingRight: (width > 1100 ? '10%' : '5%'), paddingTop: 0 }}
                    >
                        {!loading ?
                            <>
                                {group1()}
                                {group2()}
                                {group3()}
                                {group4()}
                            </>
                            :
                            <div style={{ padding: '20%' }}>
                                <center><Spin size='large' ></Spin></center>
                            </div>
                        }
                    </div>
                </div>
            </Content>
            <Footer />
        </>
    )
}
