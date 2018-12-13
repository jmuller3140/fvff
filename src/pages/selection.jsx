import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Selection from "../components/Selection/Selection";
import config from "../../data/SiteConfig";

class SelectionPage extends Component {
  render() {
    return (
      <Layout>
        <div className="contact-container">
          <Helmet title={`Selection | ${config.siteTitle}`} />
          <Selection />
        </div>
      </Layout>
    );
  }
}

export default SelectionPage;
