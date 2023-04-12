import { useEffect, useState } from "react";

interface ImagesObjectType {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  sponsorship: {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: null;
      twitter_username: string;
      portfolio_url: string;
      bio: string;
      location: null;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string;
        paypal_email: null;
      };
    };
  };
  topic_submissions: unknown;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: null;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: null;
    };
  };
}

export default function Home() {
  type UrlType = string;
  const pageNumber = `page=4`;
  const numberPerPage = `per_page=10`;
  const apiKey = `client_id=lMfe_skeTgApsSyvLqIUzUXEjSVHD6oJUauK2CdOS-4`;
  const url: UrlType = `https://api.unsplash.com/photos?${pageNumber}&${numberPerPage}&${apiKey}`;

  async function getImages() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const [images, setImages] = useState<ImagesObjectType[]>();

  useEffect(() => {
    getImages().then((data) => {
      setImages(data);
    });
  }, []);

  const imagesRender = images?.map((image) => {
    return (
      <img
        className="w-full  mb-6"
        key={image.id}
        src={image.urls.thumb}
        alt=""
      />
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="columns-3 gap-6">{imagesRender}</div>
    </main>
  );
}
