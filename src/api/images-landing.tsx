import { ResponseImage } from "../types/response-image";

type UrlType = string;

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const pageNumber = `page=${getRandomInt(30)}`;
const numberPerPage = `per_page=20`;
const apiKey = `client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4`;
const url: UrlType = `https://api.unsplash.com/photos?${pageNumber}&${numberPerPage}&${apiKey}`;

export async function getImages() {
  try {
    const response = await fetch(url);
    const data: ResponseImage[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
