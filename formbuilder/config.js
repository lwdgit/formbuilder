//参考
//ui https://github.com/mozilla-services/react-jsonschema-form#custom-css-class-names
export default {
  projectName: process.env.PROJECT_NAME || "Formbuilder",
  server: {
    remote: process.env.SERVER_URL,
    bucket: "formbuilder",
  },
  appURL: process.env.APP_URL || window.location.origin + window.location.pathname,
  fieldList: [
    {
      id: "text",
      icon: "text-color",
      label: "单行文字",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        description: "",
        default: ""
      },
      uiSchema: {
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            description: {type: "string", title: "默认值"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    {
      id: "multilinetext",
      icon: "align-left",
      label: "多行文字",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        description: "",
        default: ""
      },
      uiSchema: {
        "ui:widget": "textarea",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            description: {type: "string", title: "默认值"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    {
      id: "number",
      icon: "check",
      label: "数字",
      jsonSchema: {
        type: "integer",
        title: "Edit me", 
        default: false, //minimum  用该动态生成
      },
      uiSchema: {
        "ui:widget": "updown",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    {
      id: "checkbox",
      icon: "check",
      label: "开关",
      jsonSchema: {
        type: "boolean",
        title: "Edit me",
        default: false,
      },
      uiSchema: {
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    {
      id: "multiple-checkbox",
      icon: "check",
      label: "多项选择",
      jsonSchema: {
        type: "array",
        title: "A multiple choices list",
        items: {
          type: "string",
          enum: ["choice 1", "choice 2", "choice 3"],
        },
        uniqueItems: true,
      },
      uiSchema: {
        "ui:widget": "checkboxes",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "选项",
              items: {
                type: "string"
              },
              default: ["choice 1", "choice 2", "choice 3"],
            }
          }
        },
      },
      formData: {}
    },
    {
      id: "radiobuttonlist",
      icon: "list",
      label: "单项选择",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        enum: ["option 1", "option 2", "option 3"],
      },
      uiSchema: {
        "ui:widget": "radio",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "选项",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },
    {
      id: "select",
      icon: "chevron-down",
      label: "下拉框",
      jsonSchema: {
        type: "string",
        format: "string",
        title: "Edit me",
        enum: ["option 1", "option 2", "option 3"],
      },
      uiSchema: {
        "ui:widget": "select",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "选项",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },
    {
      id: "date",
      icon: "calendar",
      label: "日期",
      jsonSchema: {
        type: "string",
        format: "date",
        title: "Edit me",
      },
      uiSchema: {
        "ui:widget": "alt-date",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            required: {type: "boolean"}
          }
        },
      },
      formData: {}
    },
    {
      id: "date-time",
      icon: "calendar",
      label: "日期-时间",
      jsonSchema: {
        type: "string",
        format: "date-time",
        title: "Edit me",
      },
      uiSchema: {
        "ui:widget": "alt-datetime",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "标题"},
            required: {type: "boolean"}
          }
        },
      },
      formData: {}
    },


  ],
};
