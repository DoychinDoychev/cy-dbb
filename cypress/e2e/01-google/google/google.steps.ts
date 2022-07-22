import { GooglePage } from './google.page';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const googlePage = new GooglePage();

Given('I open the google page', () => {
  googlePage.navigateToHome();
});

Then('I am on the google main page', () => {
  googlePage.foo();
});

When('I type {string}', (searchQuery) => {
  googlePage.search(searchQuery);
});

Then('search results are displayed', () => {
  googlePage.validateSearchResultCount();
});

And('there is a result from {string}', (resultsFrom) => {
  googlePage.validateSearchResultContains(resultsFrom);
});
