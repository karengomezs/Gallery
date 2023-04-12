import { ResponseImage } from "./response-image";

export interface ResponseSearchedImage {
  total: number;
  total_pages: number;
  results: ResponseImage[];
}
