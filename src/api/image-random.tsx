type UrlType = String;

const url = `https://api.unsplash.com/photos/random?client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4`;

export async function getImageRandom() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
