import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {murgaFull} from '../pics'

class MurgaPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Murga | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Murga"]} backgroundPath={murgaFull}/>
        </div>
      </Layout>
    );
  }
}

export default MurgaPage;
