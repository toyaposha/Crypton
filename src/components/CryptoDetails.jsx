import React from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, Select} from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from 'millify';
import {useGetCryptoDetailsQuery} from '../services/cryptoApi';
import LineChart from './LineChart';
import { useGetCryptoHistoryQuery } from '../services/cryptoApi';
import { useState } from 'react';


const {Title, Text} = Typography;
const {Option } = Select;




const CryptoDetails = () => {
  const {coinId} = useParams();
  
  const { data, isFetching} = useGetCryptoDetailsQuery(coinId)
  const [timeperiod, setTimeperiod]= useState('7d')
   const {data: coinHistory} = useGetCryptoHistoryQuery({coinId, timeperiod})
 


  const cryptoDetails=data?.data?.coin;
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  return (
    <Col className='coin-detail-container'  >
      <Col className='coin-heading-container'>
        <Title level={2} className='coin-name'>
             {cryptoDetails?.name} {cryptoDetails?.symbol}
        </Title>
        <p>{cryptoDetails?.name} Live price in US Dollar (USD). View value statistics, market cap and supply </p>
      </Col>
      <Select defaultValue="7d" className='select-timeperiod' placeholder=" Select time period" onChange={(value)=>setTimeperiod(value)}>
        {
          time.map((date, i) => <Option key={i}>{date}</Option>)
        }
      </Select>
      <LineChart coinHistory={coinHistory} currentPrice={cryptoDetails?.price} coinName={cryptoDetails?.name}/>
       <div className='flex-cont'>
        <Col className='stats-container' lg={12}>
         <Col className='coin-value-statistics'>
             <Col className='coin-value-statistics-heading'>
               <Title level={4} className='coin-details-heading'>
                     {cryptoDetails?.name} value statistics
               </Title>
               <p> 
                An overview showing the statistics of {cryptoDetails?.name} such as the base, the rank and tranding volume
               </p>
               
             </Col>
              {stats.map(({icon, title, value}) =>(
                <Col className='coin-stats' key={title}>
                   <Col className='coin-stats-name'> 
                     <Text> {icon}</Text>
                     <Text>{title}</Text>
                    </Col>
                      <Text className='stats'>{value} </Text>
                </Col>

              ))}
          </Col>
        </Col>
        <Col className='other-stats-info' lg={12}>
         <Col className='coin-value-statistics'>
             <Col className='coin-value-statistics-heading'>
               <Title level={4} className='coin-details-heading'>
                     {cryptoDetails?.name} other value statistics
               </Title>
               <p> 
                An overview showing the statistics of {cryptoDetails?.name} such as the base, the rank and tranding volume
               </p>
               
             </Col>
              {genericStats.map(({icon, title, value}) =>(
                <Col className='coin-stats' key={title}>
                   <Col className='coin-stats-name'> 
                     <Text> {icon}</Text>
                     <Text>{title}</Text>
                    </Col>
                      <Text className='stats'>{value} </Text>
                </Col>

              ))}
          </Col>
        </Col>
        <Col className='coin-desc-link'>
         <Row>
           <Title level={3} className='coin-details-heading'>
             What is {cryptoDetails?.name} ?
            </Title>
             <p>{cryptoDetails?.description}</p>
         </Row> 
             <Col className='coin-links'>
                <Title level={3} className='coin-details-heading'>
                      What is {cryptoDetails?.name} ?
                </Title>
                {
                  cryptoDetails?.links?.map((link) => (
                    <Row>
                      <Title level={5}>
                         { link.type}
                      </Title>
                       <a href={link.url} target='__blank'>
                        { link.name}
                       </a>
                    </Row>
                  ))
                }
             </Col>
        </Col>
        </div>
    </Col>
  )
}

export default CryptoDetails