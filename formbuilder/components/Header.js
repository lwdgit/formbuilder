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
          <li><Link target="_blank" to="/faq">FAQ</Link></li>
          <li><a target="_blank" href="https://kinto.readthedocs.io/en/latest/overview.html">我们的价值观</a></li>
          <li><a target="_blank" href="https://github.com/wwj718/formbuilder_client">SDK</a></li>
          <li><a target="_blank" href="http://blog.just4fun.site">我的博客</a></li>
        </ul>
      </div>
    </div>
  </div>);
}
