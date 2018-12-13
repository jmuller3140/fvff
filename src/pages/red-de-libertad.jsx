import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {redLibertadFull} from '../pics'

class RedPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Red de Libertad | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Red de Libertad"]} backgroundPath={redLibertadFull}/>
        </div>
      </Layout>
    );
  }
}

export default RedPage;
