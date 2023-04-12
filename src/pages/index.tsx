import { useEffect, useState } from "react";
import { ResponseImage } from "@/types/response-image";
import { ResponseSearchedImage } from "@/types/new";
import { getImages } from "@/api/images-landing";
import { getSearchedImages } from "@/api/image-search";
import { getImageRandom } from "@/api/image-random";

export default function Home() {
  const [images, setImages] = useState<ResponseImage[]>();
  const [imageRandom, setImageRandom] = useState<ResponseImage>();
  // const [searchImages, setSearchImages] = useState();

  useEffect(() => {
    getImages().then((data) => {
      setImages(data);
    });
  }, []);

  useEffect(() => {
    getSearchedImages("cat").then((data) => {
      console.log(data);
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
      <div className="flex justify-end gap-4 min-w-full pr-10 pb-10">
        <input
          onChange={(e) => {
            // setSearchImages(e.target.value);
          }}
          className=" h-9 rounded bg-slate-100 border-slate-400 border-2 px-2"
          type="text"
          placeholder="Search Image"
        />
        <div className="flex justify-end gap-4">
          <button
            className="rounded bg-slate-300 border-slate-400 border-2 p-1 h-9"
            onClick={() => {
              getImageRandom().then((data) => {
                setImageRandom(data);
              });
            }}
          >
            Random Photos
          </button>
          {imageRandom && (
            <button
              className="rounded bg-slate-300 border-slate-400 border-2 p-1 mb-6"
              onClick={() => {
                setImageRandom(undefined);
              }}
            >
              Get Back
            </button>
          )}
        </div>
      </div>

      {imageRandom ? (
        <img src={imageRandom.urls.thumb} />
      ) : (
        <div className="columns-5 gap-6">{imagesRender}</div>
      )}
    </main>
  );
}
