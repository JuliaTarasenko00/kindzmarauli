export const popularDishes = (state) => state.dishes.popularDishes;

export const specificsDishes = (state) => state.dishes.specifics;

export const loading = (state) => state.dishes.isLoading;

export const filterDish = (state) => state.dishes.filteredDishes;

export const dishWithBasket = (state) => state.basket.basketDishes;

export const price = (state) => state.basket.totalPrice;

export const isError = (state) => state.auth.error;

export const getToken = (state) => state.auth.token;

export const dataUser = (state) => state.auth.user;

export const authorized = (state) => state.auth.authentication;

export const role = (state) => state.auth.role;

export const listDishes = (state) => state.dishes.dishes;
