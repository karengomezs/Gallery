import { ResponseImage } from "../types/response-image";
type UrlType = string;
const apiKey = `client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4`;
const urlRandom: UrlType = `https://api.unsplash.com/photos/random?${apiKey}`;

export async function getImageRandom() {
  try {
    const response = await fetch(urlRandom);
    const data: ResponseImage = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
