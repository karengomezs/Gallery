import { useEffect, useState } from "react";
import { getImages } from "@/api/images-landing";
import { ResponseImage } from "@/types/image-random";

export default function Home() {
  const [images, setImages] = useState<ResponseImage[]>();
  // const [imageRandom, setImageRandom] = useState();

  useEffect(() => {
    getImages().then((data) => {
      setImages(data);
    });
  }, []);

  // useEffect(() => {
  //   getImageRandom().then((data) => {
  //     console.log(data);
  //   });
  // }, []);

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
      {/* <button
        className="rounded"
        onClick={() => {
          getImageRandom().then((data) => {
            setImages(data);
          });
        }}
      >
        Random Photos
      </button> */}
      <div className="columns-5 gap-6">{imagesRender}</div>
    </main>
  );
}
