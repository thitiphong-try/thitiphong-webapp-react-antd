import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect, useState } from 'react'

export default function Cards(props) {
    console.log(props);

    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);

        setList(props.data);

        setLoading(true);
    }, [props.data]);

    return (
        <>
            {loading ?
                <div
                    style={{
                        paddingLeft: props.cardPaddingLeft,
                        paddingRight: props.cardPaddingRight,
                        paddingTop: props.cardPaddingTop,
                        paddingBottom: props.cardPaddingBottom,
                        textAlign: props.textLocal
                    }}
                >
                    <img alt="example" src={list.img} style={{ width: '100%', borderRadius: props.radius }} />
                    <Meta
                        title={<div className='title-sz-bl-t3'>{list.title}</div>}
                        style={{ paddingLeft: '7%', paddingRight: '7%', paddingTop: props.textPaddingTop }}
                        description={<span className='desc-t1'>{list.description}</span>}
                    />
                </div>
                : []
            }
        </>
    )
}
