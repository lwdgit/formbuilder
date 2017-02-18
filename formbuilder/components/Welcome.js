import React from "react";


export default function Welcome(props) {
  const createNewForm = () => {
    props.resetForm(() => {
      props.history.pushState(null, "/builder");
    });
  };

  return (
    <div>
      <div className="jumbotron background">
        <div className="container">
        <h1>快速创建表单/问卷</h1>
        <p>
            帮助你 <strong>轻松创建</strong>在线问卷/表单.
        </p>
        <p><button type="button" onClick={createNewForm} className="btn btn-primary btn-lg">开始创建</button></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-eye-close"></i> 隐私问题 </h3>
          <p>使用 <a href="https://github.com/wwj718/formbuilder">formbuilder</a>, 你无需将数据交到第三方服务商手中.</p>
          <p>随时可以将它部署到你自己的服务器上</p>
        </div>
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-heart-empty"></i> 开源</h3>
          <p>源码开放，期待你的好点子，欢迎一起来改进它</p>
          <p>项目采用 Apache 2.0 licenses</p>
        </div>
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-saved"></i> 无需注册</h3>
          <p>无需创建账号: 创建好表单，将生成的链接分享给他人即可, 分分钟搞定!</p>
        </div>
        </div>
      </div>
    </div>
  );
}
