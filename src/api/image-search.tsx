//api.unsplash.com/search/photos?page=1&per_page=20&query=office&client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4
import { ResponseSearchedImage } from "@/types/new";
type UrlType = string;

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const pageNumber = `page=${getRandomInt(30)}`;
const numberPerPage = `per_page=20`;
const apiKey = `client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4`;
const baseUrl: UrlType = `https://api.unsplash.com/search/photos?${pageNumber}&${numberPerPage}`;

export async function getSearchedImages(params: string) {
  const url: UrlType = `${baseUrl}&query=${params}&${apiKey}`;
  try {
    const response = await fetch(url);
    const data: ResponseSearchedImage = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
