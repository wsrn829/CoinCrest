import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies } from '../components';

const { Title } = Typography;

const Homepage = () => {
   const { data, isFetching } = useGetCryptosQuery(10);
   const globalStats = data?.data?.stats;

   if(isFetching) return <Loader />;

   console.log(data);

  return (
    <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row gutter={[32, 32]}>
            <Col span={12}><Statistic title="total Cryptocurrencies" value={globalStats?.total} /></Col>
            <Col span={12}><Statistic title="total Exchanges" value={globalStats ? millify(globalStats.totalExchanges) : 0} /></Col>
            <Col span={12}><Statistic title="total Market Cap" value={globalStats ? millify(globalStats.totalMarketCap) : 0} /></Col>
            <Col span={12}><Statistic title="total 24h Volume" value={globalStats ? millify(globalStats.total24hVolume) : 0} /></Col>
            <Col span={12}><Statistic title="total Markets" value={globalStats ? millify(globalStats.totalMarkets) : 0} /></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 Cryptocurrencies In The World</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified />
        {/* <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
        </div> */}
        {/* <News simplified /> */}
    </>
  )
};

export default Homepage;
