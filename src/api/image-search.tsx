//api.unsplash.com/search/photos?page=1&per_page=20&query=office&client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4
import { ResponseSearchedImage } from "@/types/response-searched-image";
type UrlType = string;

const numberPerPage = `per_page=20`;
const apiKey = `client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4`;
const baseUrl: UrlType = `https://api.unsplash.com/search/photos?${numberPerPage}`;

export async function getSearchedImages(
  params: string,
  pageNumber: number = 1
) {
  const url: UrlType = `${baseUrl}&query=${encodeURIComponent(
    params
  )}&page=${pageNumber} &${apiKey}`;
  try {
    const response = await fetch(url);
    const data: ResponseSearchedImage = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
