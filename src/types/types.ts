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





export interface NewsAPIresponseInterface {
  status: string
  totalResults: number
  articles: NewsAPIArticle[]
}

export interface NewsAPIArticle {
  source: NewsAPISource
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface NewsAPISource {
  id?: string
  name: string
}


export interface TheGurdianAPIresponseInterface {
  response: TheGurdianAPIresponseObjectInterface
}

export interface TheGurdianAPIresponseObjectInterface {
  status: string
  userTier: string
  total: number
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  orderBy: string
  results: TGResult[]
}

export interface TGResult {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  fields: TgFields
  isHosted: boolean
  pillarId: string
  pillarName: string
}

export interface TgFields {
  thumbnail: string
}






export interface NytApiResponseInterface {
  status: string
  copyright: string
  response: NytResponse
}

export interface NytResponse {
  docs: NytDoc[]
  meta: NytMeta
}

export interface NytDoc {
  abstract: string
  web_url: string
  snippet: string
  lead_paragraph: string
  source: string
  multimedia: NytMultimedum[]
  headline: NytHeadline
  keywords: NytKeyword[]
  pub_date: string
  document_type: string
  news_desk: string
  section_name: string
  subsection_name?: string
  byline: NytByline
  type_of_material: string
  _id: string
  word_count: number
  uri: string
  print_section?: string
  print_page?: string
}

export interface NytMultimedum {
  rank: number
  subtype: string
  caption: any
  credit: any
  type: string
  url: string
  height: number
  width: number
  legacy: NytLegacy
  subType: string
  crop_name: string
}

export interface NytLegacy {
  xlarge?: string
  xlargewidth?: number
  xlargeheight?: number
  thumbnail?: string
  thumbnailwidth?: number
  thumbnailheight?: number
  widewidth?: number
  wideheight?: number
  wide?: string
}

export interface NytHeadline {
  main: string
  kicker?: string
  content_kicker: any
  print_headline?: string
  name: any
  seo: any
  sub: any
}

export interface NytKeyword {
  name: string
  value: string
  rank: number
  major: string
}

export interface NytByline {
  original: string
  person: NytPerson[]
  organization?: string
}

export interface NytPerson {
  firstname: string
  middlename?: string
  lastname: string
  qualifier: any
  title: any
  role: string
  organization: string
  rank: number
}

export interface NytMeta {
  hits: number
  offset: number
  time: number
}
