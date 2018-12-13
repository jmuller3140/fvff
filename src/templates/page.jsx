import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layout"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id

    }
  }
`;
