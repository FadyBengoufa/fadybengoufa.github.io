export const fetchArticles = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getArticles`
  );

  const data = await res.json();
  const articles = data.articles;

  return articles;
};
