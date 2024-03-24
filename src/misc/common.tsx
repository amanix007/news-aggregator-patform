import { NewsSources } from "../config/constants";
import api from "../services";

export const searchInNewsapi = async (queryString: string) => {
  try {
    const { data } = await api.get(
      `${NewsSources.newsapi.baseURL}/everything?q=${queryString}&apiKey=${NewsSources.newsapi.apiKey}&page=1&pageSize=10`
    );
    return data;
  } catch (error) {
    return api.handleError(error);
  }
};
export const searchIntheGurdian = async (queryString: String) => {
  try {
    const { data } = await api.get(
      `${NewsSources.theguardian.baseURL}/search?q=${queryString}&api-key=${NewsSources.theguardian.apiKey}`
    );
    return data;
  } catch (error) {
    return api.handleError(error);
  }
};
export const searchInNyTimes = async (queryString: String) => {
  try {
    const { data } = await api.get(
      `${NewsSources.nytimes.baseURL}/search/v2/articlesearch.json?q=${queryString}&api-key=${NewsSources.nytimes.apiKey}`
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
  console.log(
    "newsapiResponse,theguardianResponse,nytimesResponse",
    newsapiResponse,
    theguardianResponse,
    nytimesResponse
  );
  let categoryList = [];
  let dateRange = [];
  let articleList = [];

  return { categoryList, dateRange, articleList };
};
