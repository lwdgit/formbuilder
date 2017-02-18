import React from "react";
import { Link } from "react-router";


export default function Header(props) {
  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">表单设计工具</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/faq">FAQ</Link></li>
          <li><a href="https://kinto.readthedocs.io/en/latest/overview.html">我们的价值观</a></li>
          <li><a href="https://github.com/wwj718/formbuilder_client">SDK</a></li>
        </ul>
      </div>
    </div>
  </div>);
}
