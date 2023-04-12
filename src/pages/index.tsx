import { useEffect, useState } from "react";
import { ResponseImage } from "@/types/response-image";
import { getImages } from "@/api/images-landing";
import { getSearchedImages } from "@/api/image-search";
import { getImageRandom } from "@/api/image-random";

export default function Home() {
  const [images, setImages] = useState<ResponseImage[]>();
  const [imageRandom, setImageRandom] = useState<ResponseImage>();
  const [querySearchedImage, setQuerySearchedImage] = useState<string>();
  const [counterPage, setCounterPage] = useState<number>(1);

  useEffect(() => {
    getImages(counterPage).then((data) => {
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
      <div className="flex justify-end gap-4 min-w-full pb-10 pr-10">
        <input
          onChange={(e) => {
            setQuerySearchedImage(e?.target?.value);
          }}
          className=" h-9 rounded bg-slate-100 border-slate-400 border-2 px-2"
          type="text"
          placeholder="Search Image"
        />

        <div className="flex justify-end gap-4">
          <button
            className="rounded bg-slate-300 border-slate-400 border-2 p-1 h-9"
            onClick={() => {
              if (querySearchedImage) {
                getSearchedImages(querySearchedImage).then((data) => {
                  setImages(data?.results);
                });
              }
            }}
          >
            Search
          </button>
          <button
            className="rounded bg-slate-300 border-slate-400 border-2 p-1 h-9"
            onClick={() => {
              getImageRandom().then((data) => {
                setImageRandom(data);
              });
            }}
          >
            Random Photo
          </button>

          {imageRandom && (
            <button
              className="rounded bg-slate-300 border-slate-400 border-2 p-1"
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

      <div className="flex justify-center min-w-full pt-20">
        {!imageRandom && (
          <button
            className="rounded  bg-slate-300 border-slate-400 border-2 p-1"
            onClick={() => {
              setCounterPage(counterPage + 1);

              getImages(counterPage).then((data) => {
                let newPhotos: ResponseImage[] = [];
                if (images) {
                  newPhotos = [...images];
                }

                if (data) {
                  newPhotos = [...newPhotos, ...data];
                }
                setImages(newPhotos);
              });
            }}
          >
            Load More
          </button>
        )}
      </div>
    </main>
  );
}
