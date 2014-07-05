"use strict";

$(document).ready(function() {

  var groupBy = function(groupingFunction, arr) {
  var result = {};

  arr.forEach(function(student){
    if(result[groupingFunction(student)]) {
      result[groupingFunction(student)].push(student);
    }
    else {
      result[groupingFunction(student)] = [student];
    }
  });
  return result;
};

var find = function(predicate, arr) {
  var result = arr.filter(function(x){
    if(predicate(x)) {
      return x;

    }
  });
  return result[0];
};

var contains = function(element, arr) {
  var result = arr.some(function(el){
    return el === element ;
    }
  );
  return result;
};

  var allStudents = [];





  $.getJSON("http://localhost:3000/students", function(students, textStatus) {
      console.log(textStatus);
      console.log(students);
      allStudents = students;

      var studentsContent = "";

      students.forEach(function(student) {
        studentsContent += ["<tr id=\"", student.id.toString(), "\">",
                              "<td>", student.id, "</td>",
                              "<td>", student.name, "</td>",
                              "<td>", student.course, "</td>",
                            "</tr>"].join("");
      });


      var table = ["<table class='table'>",
                      "<thead>",
                        "<tr>",
                          "<th>", "Id", "</th>",
                          "<th>", "Name", "</th>",
                          "<th>", "Course", "</th>",
                        "</tr>",
                      "</thead>",
                      "<tbody>",
                      studentsContent,
                      "</tbody>",
                   "</table>"].join("");

      $(".table-container").append(table);

      //alert("Students came. Open your console and remove this alert!");
      //start here


  });

  $("#group-btn").on("click", function() {
    var studentsContent = "";

    var grouped_students = groupBy(function(student) {
                                  return student.course;}, allStudents);

    Object.keys(grouped_students).forEach(function(key){
      var current_students = grouped_students[key];
      current_students.forEach(function(current_student){
        studentsContent += ["<tr id=\"", current_student.id.toString(), "\">",
                              "<td>", current_student.id, "</td>",
                              "<td>", current_student.name, "</td>",
                              "<td>", current_student.course, "</td>",
                            "</tr>"].join("");
      });
      var table = ["<table class='table'>",
                      "<thead>",
                        "<tr>",
                          "<th>", "Id", "</th>",
                          "<th>", "Name", "</th>",
                          "<th>", "Course", "</th>",
                        "</tr>",
                      "</thead>",
                      "<tbody>",
                      studentsContent,
                      "</tbody>",
                   "</table>"].join("");

      $(".table-container").append(table);
      studentsContent = "";
    });


  });


  $("#search-btn").on("click", function() {
    var searched = $("#search-box").val();

    var found = find(function(x) {
      return contains(searched, x.name.split(" ")
        );} , allStudents);

    var tr = document.getElementById(found.id.toString());
    tr.setAttribute("class", "success");
  });
});
