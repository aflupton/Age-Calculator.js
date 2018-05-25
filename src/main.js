import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AgeCalculator } from './age.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
  });
});
