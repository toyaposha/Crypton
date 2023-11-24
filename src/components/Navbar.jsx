import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../img/photo_2023-11-23_17-20-41.jpg'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'> 
            <Avatar src={icon} size="large" />
            <Typography.Title className='logo' level={2}>
                <Link to='/'> Crypton</Link>
            </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar