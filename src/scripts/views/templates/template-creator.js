import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster lazyload" loading="lazy" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
    <h3>Information</h3>
  <h4>Address</h4>
  <p>${restaurant.address} , Kota ${restaurant.city}</p>
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
  <h4>Categories</h4>
  <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
  </div>

  <div class="detail-food">
    <h4>Foods</h4>
    <ul>
      ${restaurant.menus.foods
    .map((food, i) => `
      <li>
          <p>${i + 1}) ${food.name}</p>
      </li>
      `)
    .join('')}
    </ul>
  </div>
  
  <div class="detail-drink">
    <h4>Drinks</h4>
    <ul>
      ${restaurant.menus.drinks
    .map(
      (drink, i) => `
      <li>
          <p>${i + 1}) ${drink.name}</p>
      </li>
      `,
    )
    .join('')}
    </ul>
  </div>

  <div class="movie__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  
  <div class="detail-review">
    <h3 class="review-tag">Customer Reviews</h3>
    ${restaurant.customerReviews
    .map(
      (review) => `
    <div class="detail-review-item">
        <div class="review-header">
          <p class="review-name">${review.name}</p>
          <p class="review-date">${review.date}</p>
        </div>
        <div class="review-body">
          ${review.review}
        </div>
    </div>
    `,
    )
    .join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster lazyload" loading="lazy" alt="${restaurant.name}"
           data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3 class="restaurant-title">${restaurant.name}</h3>
      <p>${restaurant.description}</p>
      <br>
      <a class="detail-btn" href="/#/detail/${restaurant.id}">Detail Restaurant</a>
    </div>
    
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
