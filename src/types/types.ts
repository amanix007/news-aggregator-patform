import { NewsSources } from "../config/constants";


interface ProfileInterface {
  role: "admin" | "user"
}
export interface AdminInterface extends ProfileInterface {
  id: string;
  qustion: string;
  role: "admin"

}
export interface userInterface extends ProfileInterface {
  id: string;
  role: "user"

}

export interface AuthInterface {

  authenticated: boolean;
  roleType: "admin" | "user" | "";
}
export type NewSourcesTypes = "newsapi" | "theguardian" | "nytimes"
export interface ArticleInterface {
  title: string;
  date: string;
  urlToImage: string;
  apiDataSource: NewSourcesTypes;
}



