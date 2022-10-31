export function getNewsList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  return apiResponse.response.results.map(result => {
    return {
      id: result.id,
      thumbnail: result.fields.thumbnail,
      title: result.fields.headline,
      description: result.fields.trailText,
    };
  });
}

export function getNewsDetails(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return {};
  }

  const { webPublicationDate, fields } = apiResponse.response.content;

  return {
    date: webPublicationDate,
    title: fields.headline,
    description: fields.trailText,
    image: fields.main,
    content: fields.body,
    author: fields.byline,
    thumbnail: fields.thumbnail,
  };
}
