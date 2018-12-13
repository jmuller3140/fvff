import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {cuerdasFull} from '../pics'

class CuerdasPage extends Component {
  render() {
    return (
      <Layout>
        <div className="cuerdas-container">
          <Helmet title={`Cuerdas | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Cuerdas"]} backgroundPath={cuerdasFull}/>
        </div>
      </Layout>
    );
  }
}

export default CuerdasPage;
