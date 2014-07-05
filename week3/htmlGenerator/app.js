"use strict";

var _ = require("lodash");

var htmlGenerator = {
    link : function(data) {
      var l = "<a href=\"<%= link %> title=\"<%= title %>\"><%= text %></a>";
      return _.template(l, {
        link: data.href,
        title: data.title,
        text: data.label
      });
    },
    paragraph: function(data) {
      var p = "<p><%= name %></p>";
      return _.template(p, {
        name: data.label
      });
    },
    list: function(data) {
      var children = [];
      data.children.forEach(function(x) {
        children.push(x.label);
      });
      var l = "<<%= type %>><% _(items).forEach(function(item) { %><li><%= item %></li><% }); %></<%= type %>>";
      var parsedHtml = _.template(l, {
        type: data.type,
        items: children
      });
      return parsedHtml;
    },
    tag: function(data) {
      var att = "id= \"<%= id %>\" class= \"<%= clas %>\"";
      var newId = "";
      var newClass = "";
      var parsedAtt = "";
      var parsedHtml = "<<%= tag %> <%= attr %>> <%= data %> </<%= tag %>>";
      if(typeof data.attributes === "object") {
        data.attributes.forEach(function(x) {
          if(x.key === "class")
          {
            newClass = x.value;
          } else {
            newId = x.value;
          }
        });
      }
      if(newId !== "" && newClass !== "") {
        parsedAtt = _.template(att, {
          id: newId,
          clas: newClass
        });
      }else if(newId !== "") {
        att = "id= \"<%= id %>\"";
        parsedAtt = _.template(att, {
          id: newId
        });
      }else if(newClass !== "") {
        att = "class= \"<%= clas %>\"";
        parsedAtt = _.template(att, {
          clas: newClass
        });
      } else {
        parsedHtml = "<<%= tag %>> <%= data %> </<%= tag %>>";
      }
      return _.template(parsedHtml, {
        tag: data.tagName,
        data: data.data,
        attr: parsedAtt
      });
    }
};

var element = htmlGenerator.tag({
    tagName: "div",
    data: htmlGenerator.tag({
        tagName: "h1",
        data: "Hello!"
    }),
    attributes: [{
        key: "class",
        value: "container"
    }, {
        key: "id",
        value: "main-container"
    }]
});

console.log(element);
