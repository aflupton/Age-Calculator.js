import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Age } from './age.js';
import { Date } from './date.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();


  });
});
