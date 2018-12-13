import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
