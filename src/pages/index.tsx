import { useEffect, useState } from "react";
import { getImages } from "@/api/images-landing";
import { ImagesObjectType } from "../types/images-landing";

export default function Home() {
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
