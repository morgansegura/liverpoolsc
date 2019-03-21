import React from "react";
import Hero from "../components/Hero";

const HomePageTemplate = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage;
  console.log(prismicHomepage);
  return (
    <React.Fragment>
      <div className="container">
        <Hero />
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </div>
    </React.Fragment>
  );
};

export default HomePageTemplate;
