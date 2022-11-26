import React from 'react'
import { Card } from 'antd';
import './createTest.css'

const addTest = () => {
  return (
    <div>
       <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    
    </div>
  )
}

export default addTest
