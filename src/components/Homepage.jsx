import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import News from './News';
import Cryptocurrencies from './Cryptocurrencies';
const Hompage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalstats = data?.data?.stats ;
  if(isFetching) return ('Fetching...');

  // console.log(data)
  return (
    <>
    <Typography.Title className='heading' level ={2}>
      Global Crypto Stats
    </Typography.Title>
    <Row>
      <Col span={12}><Statistic title="Total cryptos" value=
      {globalstats?.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={globalstats?.totalExchanges}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalstats?.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h volume" value={millify(globalstats?.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets " value={globalstats?.totalMarkets}/></Col>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalstats?.totalCoins}/></Col>
    </Row>
    <div className='coin-heading-container'>
      <Typography.Title level={2}>
        Top 10 cryptos
      </Typography.Title>
      <Typography.Title level={4}><Link to= '/cryptocurrencies'> Show more</Link>
     </Typography.Title>
     <Cryptocurrencies simplified ={true}/>
    </div>
    <div className='coin-heading-container'>
      <Typography.Title level={2}>
        Latest News
      </Typography.Title>
      <Typography.Title level={4  }><Link to= '/News'> Show more</Link>
     </Typography.Title>
     <News simplified ={true}/>
    </div>
    </>
  )
}

export default Hompage