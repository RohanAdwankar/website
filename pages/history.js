import { NextSeo } from 'next-seo';
import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Timeline from '../components/Timeline/Timeline';

import history from '../data/history';
import styles from '../styles/pages/History.module.scss';

function History() {
  return (
    <Layout>
      <NextSeo
        title="History | ACM at UCLA"
        description="As a student chapter of the international Association for Computing Machinery, ACM at UCLA is the largest Computer Science student organization at UCLA and in Southern California. We welcome students of all backgrounds and skill levels to join our community and share our love for technology!"
        openGraph={{
          images: [
            {
              url: 'https://www.uclaacm.com/images/logo.png',
              width: 1200,
              height: 1200,
              alt: 'The ACM at UCLA logo',
            },
          ],
          site_name: 'ACM at UCLA',
        }}
      />
      <div className={styles['history-page']}>
        <Banner decorative/>
        <div className={'content-section'}>
          <h1>History of ACM at UCLA</h1>
          <Timeline history={history} />
        </div>
      </div>
    </Layout>
  );
}

export default History;
