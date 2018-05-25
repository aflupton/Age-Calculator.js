import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Age } from './age.js';
import { Date } from './date.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    let currentDate = $("#currentDate").val();
    let otherDate = $("#otherDate").val();
    let outputDate = Date.calculateDate(currentDate, otherDate);
    let currentAge = $("#curAge").val();
    let outputAge = Age.calculateAge(currentAge);

    $("#outputDiv").show();
    $("#outputDate").append("<li>" + outputDate + "</li>");
    $("#outputAge").append("<li>" + outputAge + "</li>");
  });
});
