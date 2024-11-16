import React from "react";

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  published: string;
}

const NewsList: React.FC = () => {
  const articles = Array.from({ length: 30 }, (_, index) => ({
    id: `${index + 1}`,
    title: `Random News ${index + 1}`,
    description: `This is the description for Random News ${index + 1}.`,
    url: `https://example.com/news/${index + 1}`,
    image: `https://picsum.photos/400/300?random=${index + 1}`,
    published: new Date().toISOString(),
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 p-4">
      {articles.map((article) => (
        <a
          key={article.id}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NewsList;
