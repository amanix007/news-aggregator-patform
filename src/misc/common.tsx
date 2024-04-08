import { NewsSources } from "../config/constants";
import api from "../services";
import { ArticleInterface } from "../types/types";

export const searchInNewsapi = async (queryString: string, from: string) => {
  try {
    const { data } = await api.get(
      `${NewsSources.newsapi.baseURL}/everything?q=${queryString}&apiKey=${NewsSources.newsapi.apiKey}&page=1&pageSize=10&from=${from}&sortBy=publishedAt`
    );
    
    return data;
  } catch (error) {
    return api.handleError(error);
  }
};
export const searchIntheGurdian = async (queryString: string) => {
  try {
    const { data } = await api.get(
      `${NewsSources.theguardian.baseURL}/search?q=${queryString}&api-key=${NewsSources.theguardian.apiKey}&show-fields=thumbnail`
    );
    return data;
  } catch (error) {
    return api.handleError(error);
  }
};
export const searchInNyTimes = async (queryString: string,begin_date:string,end_date:string) => {
  try {
    const { data } = await api.get(
      `${NewsSources.nytimes.baseURL}/search/v2/articlesearch.json?q=${queryString}&api-key=${NewsSources.nytimes.apiKey}&begin_date=${begin_date}&end_date=${end_date}`
    );
    return data;
  } catch (error) {
    return api.handleError(error);
  }
};

export const responseSerialiser = ({
  newsapiResponse,
  theguardianResponse,
  nytimesResponse,
}) => {
  const newsapiArticles = parseNewsAPIresponse(newsapiResponse);
  const theguardianArticles = parseTheGuardianResponse(theguardianResponse);
  const nyTimesArticles = parseNytimesResponse(nytimesResponse);

  const articleList: ArticleInterface[] = [
    ...newsapiArticles,
    ...theguardianArticles,
    ...nyTimesArticles,
  ];

  return articleList;
};

const parseNewsAPIresponse = (response: any): ArticleInterface[] => {
  const articles: ArticleInterface[] = response.articles.map((a: any) => {
    return {
      title: a.title,
      date: a.publishedAt,
      urlToImage: a.urlToImage,
      apiDataSource: NewsSources.newsapi.key,
    };
  });

  return articles;
};
const parseTheGuardianResponse = (response: any): ArticleInterface[] => {
  const articles: ArticleInterface[] = response.response.results.map(
    (a: any) => {
      return {
        title: a.webTitle,
        date: a.webPublicationDate,
        urlToImage: a.fields.thumbnail,
        apiDataSource: NewsSources.theguardian.key,
      };
    }
  );

  return articles;
};
const parseNytimesResponse = (response: any): ArticleInterface[] => {
  console.log("response",response)
  const articles: ArticleInterface[] = response.response.docs.map((a: any) => {
    return {
      title: a.headline.main,
      date: a.pub_date,
      urlToImage: `https://www.nytimes.com/${a.media[0].url}`,
      apiDataSource: NewsSources.nytimes.key,
    };
  });

  return articles;
};
