/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unlike Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Showing empty liked Restaurant', ({ I }) => {
  I.dontSee('.movie-item');
});

Scenario('Unlike one restaurant', async ({ I }) => {
  I.seeElement('.content__heading');
  I.amOnPage('/');

  I.waitForElement('a.detail-btn', 3);
  I.seeElement('a.detail-btn');

  const firstRestaurant = locate('a.detail-btn').first();
  const firstRestaurantsName = await I.grabTextFrom('.restaurant-title');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');

  const unlikedRestaurantsTitles = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantsName, unlikedRestaurantsTitles);

  I.seeElement('a.detail-btn');
  await I.grabTextFrom('.restaurant-title');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.movie-item');
});
