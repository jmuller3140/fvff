import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled, { createGlobalStyle } from "styled-components";

import Home from "../components/Home/Home";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Home />
        </div>
      </Layout>
    );
  }
}

export default Index;
