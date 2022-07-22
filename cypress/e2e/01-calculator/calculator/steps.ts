import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let first = 0;
let second = 0;
let result = 0;

Given('I have entered <first> into <second> the calculator', (data) => {
  console.log('data', data);
  // cy.log('num', num.rawtable);
  // console.log('num', num);
  // console.log('num', num.rawTable);
  // first = +rawTable[1][0];
  // console.log('first', first);
});

And('I have entered <second> into the calculator', ({ rawTable }) => {
  console.log('rawTable', rawTable);
  second = +rawTable[1][0];
});

When('I press add', () => {
  // googlePage.search(searchQuery);
  result = first + second;
  console.log(result);
});

Then('The <result> should be on the screen', ({ rawTable }) => {
  // cy.log('num', num);
  // {rawTable: [[first], [50]]}
  expect(+rawTable[1][0]).equal(result);
});

// Then('search results are displayed', () => {
//   googlePage.validateSearchResultCount();
// });

// And('there is a result from {string}', (resultsFrom) => {
//   googlePage.validateSearchResultContains(resultsFrom);
// });
