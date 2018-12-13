import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {forgottenFull} from '../pics'
class ForgottenPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Forgotten Huts| ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Forgotten Huts"]} backgroundPath={forgottenFull}/>
        </div>
      </Layout>
    );
  }
}

export default ForgottenPage;
