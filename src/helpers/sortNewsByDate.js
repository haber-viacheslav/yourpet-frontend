export const sortNewsByDate = news => {
  news.sort((a, b) => {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB - dateA;
  });

  return news;
};
