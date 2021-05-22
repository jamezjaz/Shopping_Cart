import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
} from './cartActionTypes';

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});

export const subtractQuantity = (id) => ({
  type: SUB_QUANTITY,
  id,
});

export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  id,
});
