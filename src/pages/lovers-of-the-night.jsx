import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {loversFull} from '../pics'

class LoversPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Lovers | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Lovers of the Night"]} backgroundPath={loversFull}/>
        </div>
      </Layout>
    );
  }
}

export default LoversPage;
