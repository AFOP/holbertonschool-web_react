import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(() => {
  const countElement = $('#count');
  let count = parseInt(countElement.text());
  count++;
  countElement.text(`${count} clicks on the button`);
}, 300);

$(document).ready(function() {
  const body = $('body');
  body.append('<p>Holberton Dashboard</p>');
  body.append('<p>Dashboard data for the students</p>');
  body.append('<button id="start-btn">Click here to get started</button>');
  body.append('<p id="count"></p>');
  body.append('<p>Copyright - Holberton School</p>');

  $('#start-btn').click(updateCounter);
});
