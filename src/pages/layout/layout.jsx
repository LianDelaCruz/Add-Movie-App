import React, { Fragment } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Outlet } from "react-router-dom";

class Layout extends React.Component {
 
  render() {
    return (
      <Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Layout;