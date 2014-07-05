
$(document).ready(function() {
  "use strict";

  var list = [];

  function getStudents(cb) {
    $.ajax({
      url: "http://localhost:3030/students",
      type: "GET"
    }).done(function(data) {
      cb(data);
    });
  }

  function listStudents(list) {
    var templateSource = $("#table-template").html(),
          template = Handlebars.compile(templateSource),
          tableHTML = template({
            list: list
          });
      $("#table").html(tableHTML);
  }

  function addStudent(student) {
    $.ajax({
      url: "http://localhost:3030/student",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(student)
    });
  }

  function getStudent(facultyNumber, cb) {
    $.ajax({
      url: "http://localhost:3030/student/" + facultyNumber,
      type: "GET",
    }).done(function(data) {
      cb(data);
    });
  }

  function deleteStudent(facultyNumber) {
    $.ajax({
      url: "http://localhost:3030/student/" + facultyNumber,
      type: "DELETE"
    });
  }

  getStudents(function(data){
      list = data;
      listStudents(list);
    });

  $(document).on("click", "#list", function() {
    getStudents(function(data){
      list = data;
      listStudents(list);
    });
  });

  $(document).on("click", "#create", function() {
    var name = $("#name").val(),
        facNum = $("#faculty-number").val(),
        courses = $("#courses").val();
    var student = {
      facultyNumber: facNum,
      name: name,
      courses: courses
    };
    addStudent(student);
  });

  $(document).on("click", "#delete", function() {
    var facNum = $("#faculty-number").val();
    deleteStudent(facNum);
  });

  $(document).on("click", "#update", function() {
    getStudent($("#faculty-number").val(), function(student) {
      $("#name").val(student.name);
      $("#courses").val(student.courses);
    });
  });
});

