import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {jesusFull} from '../pics'

class JesusPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Jesus the Gift of a Life | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Jesus the Gift of a Life"]} backgroundPath={jesusFull}/>
        </div>
      </Layout>
    );
  }
}

export default JesusPage;
