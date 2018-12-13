import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {

    return (
      <Layout>
        <div className="tag-container">
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */

