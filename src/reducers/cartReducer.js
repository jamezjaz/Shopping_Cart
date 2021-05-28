import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
} from '../actions/cartActionTypes';

const initialState = {
  items: [
    {
      id: 1,
      title: 'Winter body',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 110,
      img: 'https://raw.githubusercontent.com/AyaBellazreg/React-Shopping-Cart/master/Shopping-Cart/src/images/item1.jpg',
    },
    {
      id: 2,
      title: 'Adidas',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 80,
      img: 'https://raw.githubusercontent.com/AyaBellazreg/React-Shopping-Cart/master/Shopping-Cart/src/images/item2.jpg',
    },
    {
      id: 3,
      title: 'Vans',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 120,
      img: 'https://raw.githubusercontent.com/AyaBellazreg/React-Shopping-Cart/master/Shopping-Cart/src/images/item3.jpg',
    },
    {
      id: 4,
      title: 'White',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 260,
      img: 'https://raw.githubusercontent.com/AyaBellazreg/React-Shopping-Cart/master/Shopping-Cart/src/images/item4.jpg',
    },
    {
      id: 5,
      title: 'Cropped-sho',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 160,
      img: 'https://raw.githubusercontent.com/AyaBellazreg/React-Shopping-Cart/master/Shopping-Cart/src/images/item5.jpg',
    },
    {
      id: 6,
      title: 'Blues',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 90,
      img: 'https://raw.githubusercontent.com/AyaBellazreg/React-Shopping-Cart/master/Shopping-Cart/src/images/item6.jpg',
    },
    {
      id: 7,
      title: 'Photographer Backpacker',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 155,
      img: 'https://cdn.pixabay.com/photo/2016/01/19/18/02/photographer-1150033__340.jpg',
    },
    {
      id: 8,
      title: 'Electric Iron',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 105,
      img: 'https://cdn.pixabay.com/photo/2014/07/27/17/29/ironing-403074_960_720.jpg',
    },
    {
      id: 9,
      title: 'Fernando Arcos',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 125,
      img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 10,
      title: 'Winter Jacket',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 115,
      img: 'https://images.pexels.com/photos/1781627/pexels-photo-1781627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  // switch (action.type)
  switch (action.type) {
    case ADD_TO_CART: {
      const addedItem = state.items.find((item) => item.id === action.id);
      // check if the action id exists in the addedItems
      const existedItem = state.addedItems.find((item) => action.id === item.id);

      if (existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      }
      addedItem.quantity = 1;
      // calculating the total
      const newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
    case REMOVE_ITEM: {
      const itemToRemove = state.addedItems.find((item) => action.id === item.id);
      const newItems = state.addedItems.filter((item) => action.id !== item.id);

      // calculating the total
      const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      // console.log(itemToRemove);
      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
      };
    }
    case ADD_QUANTITY: {
      const addedItem = state.items.find((item) => item.id === action.id);
      addedItem.quantity += 1;
      const newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case SUB_QUANTITY: {
      const addedItem = state.items.find((item) => item.id === action.id);
      // if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        const newItems = state.addedItems.filter((item) => item.id !== action.id);
        const newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: newItems,
          total: newTotal,
        };
      }
      addedItem.quantity -= 1;
      const newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case ADD_SHIPPING:
      return {
        ...state,
        total: state.total + 5,
      };
    case SUB_SHIPPING:
      return {
        ...state,
        total: state.total - 5,
      };
    default:
      return state;
  }

  // if (action.type === ADD_TO_CART) {
  //   const addedItem = state.items.find((item) => item.id === action.id);
  //   // console.log(addedItem);
  //   // check if the action id exists in the addedItems
  //   const existedItem = state.addedItems.find((item) => action.id === item.id);
  //   if (existedItem) {
  //     addedItem.quantity += 1;
  //     return {
  //       ...state,
  //       total: state.total + addedItem.price,
  //     };
  //   }
  //   addedItem.quantity = 1;
  //   // calculating the total
  //   const newTotal = state.total + addedItem.price;
  //   return {
  //     ...state,
  //     addedItems: [...state.addedItems, addedItem],
  //     total: newTotal,
  //   };
  // }
  // if (action.type === REMOVE_ITEM) {
  //   const itemToRemove = state.addedItems.find((item) => action.id === item.id);
  //   const newItems = state.addedItems.filter((item) => action.id !== item.id);

  //   // calculating the total
  //   const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
  //   console.log(itemToRemove);
  //   return {
  //     ...state,
  //     addedItems: newItems,
  //     total: newTotal,
  //   };
  // }
  // if (action.type === ADD_QUANTITY) {
  //   const addedItem = state.items.find((item) => item.id === action.id);
  //   addedItem.quantity += 1;
  //   const newTotal = state.total + addedItem.price;
  //   return {
  //     ...state,
  //     total: newTotal,
  //   };
  // }
  // if (action.type === SUB_QUANTITY) {
  //   const addedItem = state.items.find((item) => item.id === action.id);
  //   // if the qt == 0 then it should be removed
  //   if (addedItem.quantity === 1) {
  //     const newItems = state.addedItems.filter((item) => item.id !== action.id);
  //     const newTotal = state.total - addedItem.price;
  //     return {
  //       ...state,
  //       addedItems: newItems,
  //       total: newTotal,
  //     };
  //   }
  //   addedItem.quantity -= 1;
  //   const newTotal = state.total - addedItem.price;
  //   return {
  //     ...state,
  //     total: newTotal,
  //   };
  // }
  // if (action.type === ADD_SHIPPING) {
  //   return {
  //     ...state,
  //     total: state.total + 5,
  //   };
  // }
  // if (action.type === SUB_SHIPPING) {
  //   return {
  //     ...state,
  //     total: state.total - 5,
  //   };
  // }
  // return state;
};

export default cartReducer;
