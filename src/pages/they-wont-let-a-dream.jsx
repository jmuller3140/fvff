import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {dreamFull} from '../pics'

class DreamPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`They Won't Let a Dream | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["They Wont Let a Dream"]} backgroundPath={dreamFull}/>
        </div>
      </Layout>
    );
  }
}

export default DreamPage;
