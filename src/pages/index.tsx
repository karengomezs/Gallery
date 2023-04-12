import { useEffect, useState } from "react";
import { getImages } from "@/api/images-landing";
import { ResponseImage } from "@/types/image-random";
import { getImageRandom } from "@/api/image-random";

export default function Home() {
  const [images, setImages] = useState<ResponseImage[]>();
  const [imageRandom, setImageRandom] = useState<ResponseImage>();

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
      <button
        className="rounded"
        onClick={() => {
          getImageRandom().then((data) => {
            setImageRandom(data);
          });
        }}
      >
        Random Photos
      </button>

      {imageRandom ? (
        <img src={imageRandom.urls.thumb} />
      ) : (
        <div className="columns-5 gap-6">{imagesRender}</div>
      )}
    </main>
  );
}
