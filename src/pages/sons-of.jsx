import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {sonFull} from '../pics'

class SonOfPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Sons Of | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Sons of"]} backgroundPath={sonFull}/>
        </div>
      </Layout>
    );
  }
}

export default SonOfPage;
