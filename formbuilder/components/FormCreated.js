import React, { Component } from "react";
import ClipboardButton from "react-clipboard.js";
import {getFormID, getFormURL, getAdminURL} from "../utils";
import URLDisplay from "./URLDisplay";

export default class FormCreated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  onClipboardCopied() {
    this.setState({copied: true});
  }

  render() {
    const adminToken = this.props.params.adminToken;
    const formID = getFormID(adminToken);

    const userformURL = getFormURL(formID);
    const adminURL = getAdminURL(adminToken);

    const twitterText = `I've just created a form, it is at ${userformURL}!`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;

    const emailSubject = `Hi，我刚创建了一个表单`;
    const emailBody = `Hi,

我刚创建了一个表单，它的链接为:

    ${userformURL}

麻烦帮我填下:)
`;

    const emailUrl = `mailto:?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;
    return (
      <form>
        <h3>恭喜，表单已创建完成!</h3>
        <h5>提醒:将以下数据存到你本地，它们是你访问表单的<code>凭证</code></h5>
        <div className="form-group">
          <ul className="list-inline">
            <li><button className="btn btn-link"><i className="glyphicon glyphicon-send" />
              <a href={emailUrl}> 邮件发送</a></button>
            </li>
            <li><button className="btn btn-link"><i className="glyphicon glyphicon-cloud" />
              <a href={twitterUrl}> Tweet it</a></button>
            </li>
            <li>
            <ClipboardButton
              className="btn btn-link"
              data-clipboard-text={userformURL}
              onSuccess={this.onClipboardCopied.bind(this)}>
              <i className="glyphicon glyphicon-copy" /> <a>{this.state.copied ? "Copied!" : "复制到剪贴板"}</a>
            </ClipboardButton>
            </li>
          </ul>
          <URLDisplay url={userformURL} />
          <URLDisplay url={adminURL} type="admin" />
          <hr/>
          <h3>API接口</h3>
          <p>除了直接下载最近提交的表单数据，我们还允许你以其他方式获取数据</p>
          <p>当前表单数据的凭证(adminToken)为：<code>{adminToken}</code></p>
          <h4>使用curl/httpie</h4>
          <code>curl {process.env.SERVER_URL}buckets/formbuilder/collections/{formID}/records -u form:{adminToken}| python -m json.tool</code>
          <p>或者</p>
          <code>http --auth form:{adminToken} {process.env.SERVER_URL}buckets/formbuilder/collections/{formID}/records </code>
          <h4>以编程的方式处理</h4>
          <p>当然,你也可以使用我的<a href="https://github.com/wwj718/formbuilder_client">formbuilder_client</a>,在你的程序里集成它</p>
        </div>
      </form>
    );
  }
}
