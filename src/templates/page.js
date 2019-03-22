import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <React.Fragment>
      <div className="container content__wrapper">
        <div className="row">
          <aside className="col-12 col-md-3">
            <section className="aside widget">
              <h4 className="widget__title">Upcoming Events</h4>
              Calendar events here
            </section>
          </aside>
          <div className="col-12 col-md-9 content">
            <h1>{data.title.text}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
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
