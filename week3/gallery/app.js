"use strict";

var _ = require("lodash");

var groceries = [{
    type: "fruit",
    name: "banana",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/166px-Banana-Single.jpg"
}, {
    type: "fruit",
    name: "apple",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/160px-Red_Apple.jpg"
}, {
    type: "fruit",
    name: "grape",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/217px-Table_grapes_on_white.jpg"
}, {
    type: "fruit",
    name: "watermelon",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/96px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg"
}, {
    type: "vegetable",
    name: "potato",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/220px-Patates.jpg"
}, {
    type: "vegetable",
    name: "carrot",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-037.jpg/218px-13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-037.jpg"
}, {
    type: "vegetable",
    name: "turnip",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/218px-Turnip_2622027.jpg"
}, {
    type: "vegetable",
    name: "lettuce",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/320px-Iceberg_lettuce_in_SB.jpg"
}];

var groupedGroceries = _.groupBy(groceries, function(obj) {
  return obj.type;
});

var parse = function(data) {
  var template = ["<div class=\"col-xs-4\">",
                "<h3>", "<%= name %>", "</h3>",
                "<img src=\"", "<%= image %>", "\">",
                "<p>Type:", "<%= type %>", "</p>",
                "</div>"
        ];

};

console.log(groupedGroceries);
