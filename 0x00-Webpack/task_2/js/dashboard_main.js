import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css';  // Import the CSS file

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = debounce(updateCounter, 300);

$('body').append('<div id="logo"></div>'); // Add logo div
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#clickButton').on('click', debouncedUpdateCounter);
