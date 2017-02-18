import React from "react";

export default function URLDisplay(props) {
  const onClick = (e) => {
    e.target.select();
  };

  const icon = props.type === "admin" ? "eye-close" : "bullhorn";
  const label = props.type == "admin" ? "管理链接" : "表单链接";
  const glyphicon = `glyphicon glyphicon-${icon}`;

  return (
    <div>
      <div className="input-group input-group-lg">
        <span className="input-group-addon">{label} <i className={glyphicon} /></span>
        <input onClick={onClick} type="text" className="form-control" defaultValue={props.url} />
      </div>
    </div>
  );
}
