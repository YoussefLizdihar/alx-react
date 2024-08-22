// Import jQuery and Lodash
import $ from 'jquery';
import debounce from 'lodash/debounce';


let count = 0;

// Function to update the counter and display it
function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}
const debouncedUpdateCounter = debounce(updateCounter, 300); // Adjust debounce time as needed

// Add elements
$('body').append('<p>Holberton Dashboard</p>');

$('body').append('<p>Dashboard data for the students</p>');

$('body').append('<button id="clickButton">Click here to get started</button>');

$('body').append('<p id="count"></p>');

$('body').append('<p>Copyright - Holberton School</p>');

// Bind the debounced updateCounter function to the button click event
$('#clickButton').on('click', debouncedUpdateCounter);
