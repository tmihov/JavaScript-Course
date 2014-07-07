$(document).ready(function() {
  "use strict";

  function getStudents(cb) {
    $.ajax({
      url: "http://localhost:3030/students",
      type: "GET"
    }).done(cb);
  }

  function listStudents() {
    getStudents(function(data) {
      var templateSource = $("#table-template").html(),
            template = Handlebars.compile(templateSource),
            tableHTML = template({
              list: data
            });
        $("#table").html(tableHTML);
    });
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
    }).done(cb);
  }

  function deleteStudent(facultyNumber) {
    $.ajax({
      url: "http://localhost:3030/student/" + facultyNumber,
      type: "DELETE"
    });
  }

  $(document).on("click", "#list", function() {
    listStudents();
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
    listStudents();
  });

  $(document).on("click", "#delete", function() {
    var facNum = $("#faculty-number").val();
    deleteStudent(facNum);
    listStudents();
  });

  $(document).on("click", "#update", function() {
    getStudent($("#faculty-number").val(), function(student) {
      $("#name").val(student.name);
      $("#courses").val(student.courses);
    });
    listStudents();
  });

  listStudents();
});

