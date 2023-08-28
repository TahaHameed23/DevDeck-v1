import React from 'react'
import { Space, Spin } from 'antd';
import { SpaceCompactItemContext } from 'antd/es/space/Compact';
import './common.scss';

function Loader() {
  return (
    <div className='loader'>
        <Space size='middle' >
            <Spin size='large' />
            <p>Loading, please wait...</p>
        </Space>
    </div>
  )
}

export default Loader