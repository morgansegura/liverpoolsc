import React, { Component } from "react";
import { animateText } from "../helpers/helpers";
import { StaticQuery, graphql } from "gatsby";

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    animateText(
      document.getElementsByClassName("word"),
      document.createElement("span")
    );
  }
  componentDidUpdate() {}

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeroQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <section id="home" className="hero parallax__hero bg__hero-text">
              Hero
            </section>
          );
        }}
      />
    );
  }
}
