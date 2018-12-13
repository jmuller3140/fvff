import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {voicesBeyondFull} from '../pics'

class VoicesPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Voices Beyond the Wall | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Voices Beyond the Wall"]} backgroundPath={voicesBeyondFull}/>
        </div>
      </Layout>
    );
  }
}

export default VoicesPage;
