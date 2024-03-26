/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.waitForElement('a.detail-btn', 3);
  I.seeElement('a.detail-btn');

  const firstRestaurant = locate('a.detail-btn').first();
  const firstRestaurantName = await I.grabTextFrom('.restaurant-title');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.movie-item', 3);
  I.seeElement('.movie-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);
});
