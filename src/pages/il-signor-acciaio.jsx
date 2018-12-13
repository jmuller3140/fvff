import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {signoreFull} from '../pics'

class IlSignorePage extends Component {
  render() {
    return (
      <Layout>
        <div className="ilSignore-container">
          <Helmet title={`Il Signore Acciaio | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Il Signor Acciaio"]} backgroundPath={signoreFull}/>
        </div>
      </Layout>
    );
  }
}

export default IlSignorePage;
