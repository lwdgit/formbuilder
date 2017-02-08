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
          <p>With <a href="http://www.kinto-storage.org">Kinto</a>, you are not giving Google or any other giants your data.</p>
          <p>Our goal is not to host all the forms of the world, so we try to make it easy for you to <a href="https://kinto.readthedocs.io/en/stable/tutorials/install.html">host your own servers</a>.</p>
        </div>
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-heart-empty"></i> 开源</h3>
          <p>All the code we write is <a href="https://github.com/kinto/formbuilder">written in the open</a> and we try to be
          the most inclusive as we can to welcome your ideas.</p>
          <p>Kinto and the formbuilder are released under Apache 2.0 licenses</p>
        </div>
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-saved"></i> 无需注册</h3>
          <p>You don't need an account to create a new form: just create and give it to your friends, it's a matter of minutes!</p>
        </div>
        </div>
      </div>
    </div>
  );
}
