import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Assurance Specialist</title>
        <meta property="og:title" content="Direct Assurance Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
