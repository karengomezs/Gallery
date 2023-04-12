import { ImagesObjectType } from "../types/images-landing";

type UrlType = string;
const pageNumber = `page=4`;
const numberPerPage = `per_page=10`;
const apiKey = `client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4`;
const url: UrlType = `https://api.unsplash.com/photos?${pageNumber}&${numberPerPage}&${apiKey}`;

export async function getImages() {
  try {
    const response = await fetch(url);
    const data: ImagesObjectType[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
