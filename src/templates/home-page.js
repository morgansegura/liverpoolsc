import React from 'react'

const HomePageTemplate = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  console.log(prismicHomepage)
  return (
    <React.Fragment>
      <div className="container content__wrapper content__wrapper__with-sidebar">
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </div>
    </React.Fragment>
  )
}

export default HomePageTemplate
