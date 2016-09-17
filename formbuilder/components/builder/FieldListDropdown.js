import React, { Component } from "react";
import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";

import {Dropdown, MenuItem}  from "react-bootstrap"

import config from "../../config";

export default class FieldListDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldList: config.fieldList
    };
  }

  handleFieldListAction(fieldIndex, event) {
    const fieldList = this.state.fieldList;

    fieldIndex = parseInt(fieldIndex, 10);

    if (typeof fieldList[fieldIndex] != "undefined") {
      const field = fieldList[fieldIndex];

      if (this.props.currentFieldName !== false) {
        this.props.switchField(this.props.currentFieldName, field);
      } else {
        this.props.addField(field);
      }

    }
  }

  render () {
    return (
      <Dropdown dropup={this.props.currentFieldName == false} id="split-button-dropup" className={this.props.className}>
        <Dropdown.Toggle bsStyle={this.props.bsStyle}>
          {this.props.children}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.state.fieldList.map((field, index) => {
            return <MenuItem key={index}
                eventKey={index}
                onSelect={this.handleFieldListAction.bind(this)}
                ><i className={`glyphicon glyphicon-${field.icon}`} />
                {field.label}
              </MenuItem>
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

FieldListDropdown.defaultProps = {
  bsStyle: "default",
  currentFieldName: false
}