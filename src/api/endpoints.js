const API_KEY = 'cce4027e-faf6-4eb5-ba9b-491c9b8f3571';

const API_URL = 'https://content.guardianapis.com';

export function getNewsCategoriesEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

  return `${API_URL}/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `${API_URL}/${newsId}${queryParams}`;
}
