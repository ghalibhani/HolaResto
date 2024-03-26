/* eslint-disable no-shadow */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Restaurant terbaik</h2>
        <div id="movies" class="movies">
        </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#movies');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
