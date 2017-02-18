import React from "react";
import config from "../config";

export default function RecordCreated(props) {

  // Issue #130 - Change title back to project name after submitting the form
  document.title = config.projectName;

  return (
    <div>
      <h3>提交成功!</h3>
      感谢, 数据已提交!
    </div>
  );
}
