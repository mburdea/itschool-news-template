export const addToFavorites = (news) => ({
  type: 'ADD_TO_FAVORITES',
  payload: news,
});

export const removeFromFavorites = (newsId) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: newsId,
});
