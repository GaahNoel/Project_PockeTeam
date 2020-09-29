import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';

import './styles.css';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>PockeTeam - Home</title>
      </Helmet>
      <Header />

      <div className="Home" />
    </div>
  );
}
