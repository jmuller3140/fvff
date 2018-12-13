import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {crisisFull} from '../pics'

class CrisisPage extends Component {
  render() {
    return (
      <Layout>
        <div className="crisis-container">
          <Helmet title={`Crisis | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Crisis"]} backgroundPath={crisisFull}/>
        </div>
      </Layout>
    );
  }
}

export default CrisisPage;
