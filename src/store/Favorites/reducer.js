export const initialState = {
  favorites: [],
};

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const exists = state.favorites.find(favorite => {
        return favorite.id === action.payload.id;
      });
      if (exists) {
        return state;
      } else {
        const newState = {
          favorites: [action.payload, ...state.favorites],
        };

        return newState;
      }
    }

    case 'REMOVE_FROM_FAVORITES': {
      return {
        favorites: state.favorites.filter(favorite => {
          return favorite.id !== action.payload;
        }),
      };
    }

    default: {
      return state;
    }
  }
}
