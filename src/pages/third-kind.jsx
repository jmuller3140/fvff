import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {thirdKindFull} from '../pics'

class ThirdKindPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Third Kind | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Third Kind"]} backgroundPath={thirdKindFull}/>
        </div>
      </Layout>
    );
  }
}

export default ThirdKindPage;
