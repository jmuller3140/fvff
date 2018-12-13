import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {criteriaFull} from '../pics'

class CriteriaPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Criteria | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Criteria"]} backgroundPath={criteriaFull}/>
        </div>
      </Layout>
    );
  }
}

export default CriteriaPage;
