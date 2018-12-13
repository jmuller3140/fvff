import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {threeYearsFull} from '../pics'
class ThreeYearsPage extends Component {
  render() {
    return (
      <Layout>
        <div className="threeYears-container">
          <Helmet title={`In Three Years | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["In Three Years"]} backgroundPath={threeYearsFull}/>
        </div>
      </Layout>
    );
  }
}

export default ThreeYearsPage;
