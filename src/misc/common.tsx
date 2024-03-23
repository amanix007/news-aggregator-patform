import api from "../services";

export const searchInNewsapi =await (query: string)=> {
  try {
    const { data } = await api.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=a3e91e6ebec046db85c5df6e4202b9ca`);
    return data.response;
  } catch (error) {
    return api.handleError(error);
  }


}