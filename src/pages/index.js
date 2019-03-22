import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SplashPageTemplate from '../templates/splash-page'
import HomePageTemplate from '../templates/home-page'

// import SEO from '../components/seo'
import { overlayClose, smoothScroll } from '../helpers/helpers'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSplashPage: false,
      bodyClassList: ' is--mobile-nav mobile-nav--is-closed',
    }
  }
  componentDidMount() {
    // Implement smmoth scrooling
    smoothScroll()
    // function to close overlay on container click or esc key
    overlayClose(document.querySelector('.overlay'))
    // add classes to the body tag
    const body = document.getElementsByTagName('body')[0]
    body.className += this.state.bodyClassList
  }
  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        {this.state.showSplashPage === true ? (
          <SplashPageTemplate />
        ) : (
          <Layout>
            <HomePageTemplate data={this.props.data} />
          </Layout>
        )}
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    prismicHomepage {
      slugs
      uid
      id
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
