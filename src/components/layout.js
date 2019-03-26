import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import MenuHeader from './Menus/menuHeader'
import SEO from './seo'

import '../assets/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <SEO title="Hello" />
          <Helmet>
            <script src="//code.iconify.design/1/1.0.0-rc7/iconify.min.js" />
          </Helmet>
          <div id="wrapperMain" className="wrapper">
            <Header />
            <main id="contentMain" className="main">
              {children}
            </main>
            <Footer />
            <MenuHeader />
            <div id="overlay__results">
              <div className="overlay" />
            </div>
          </div>
          <div id="overlay__results">
            <div className="overlay" />
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
