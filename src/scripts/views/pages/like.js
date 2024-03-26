/* eslint-disable no-new */
// /* eslint-disable no-new */
// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';

// const Like = {
//   async render() {
//     return `
//     <div class="content">
//       <h2 class="content__heading">Your Favorit restaurant</h2>
//       <div id="movies" class="movies">

//       </div>
//     </div>
//   `;
//   },

//   async afterRender() {
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
//     const restaurantsContainer = document.querySelector('#movies');

//     restaurants.forEach((restaurant) => {
//       restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
//     });
//   },
// };

// export default Like;

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
