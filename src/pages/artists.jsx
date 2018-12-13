import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Artists from "../components/Artists/Artists";
import config from "../../data/SiteConfig";

class ArtistsPage extends Component {
  render() {
    return (
      <Layout>
        <div className="contact-container">
          <Helmet title={`Artists | ${config.siteTitle}`} />
          <Artists />
        </div>
      </Layout>
    );
  }
}

export default ArtistsPage;
