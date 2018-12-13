import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {birdPainterFull} from '../pics'

class BirdPainterPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`The  Bird Painter | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["The Bird Painter"]} backgroundPath={birdPainterFull}/>
        </div>
      </Layout>
    );
  }
}

export default BirdPainterPage;
