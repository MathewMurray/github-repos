'use strict';

const searchURL = 'https://api.github.com/users/';

function getNews(searchTerm) {
 
  fetch(searchURL + searchTerm + '/repos')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
    displayResults(responseJson);
}

function displayResults(responseJson) {
    $('.results').append(`${responseJson}`);

}

//watch for the form submission
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //capture the value of the user's input
    const searchTerm = $('#js-search-term').val();
    getNews(searchTerm);
  });
}

$(watchForm);