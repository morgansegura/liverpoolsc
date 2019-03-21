import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
// import PreviewCompatibleImage from './PreviewCompatibleImage'
// import { scrollHeader } from '../helpers/helpers'

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
          <header id="headerMain" className="header unfill">
            <div className="header__inner container">
              <div className="row no-gutters align-items-center">
                <div className="header__branding col-12 col-md">
                  <Link to="/">
                    <div className="header__logo" />
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </>
      );
    }}
  />
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
