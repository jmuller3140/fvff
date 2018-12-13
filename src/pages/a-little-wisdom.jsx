import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {wisdomFull} from '../pics'

class WisdomPage extends Component {
  render() {
    return (
      <Layout>
        <div className="wisdom-container">
          <Helmet title={`A Little Wisdom | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["A Little Wisdom"]} backgroundPath={wisdomFull} />
        </div>
      </Layout>
    );
  }
}

export default WisdomPage;
