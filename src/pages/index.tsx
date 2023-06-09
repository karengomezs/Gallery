import { useState } from "react";
import { ResponseImage } from "@/types/response-image";
import { getImages } from "@/api/images-landing";
import { getSearchedImages } from "@/api/image-search";
import { Button } from "@/components/Button";
import Link from "next/link";

export const getServerSideProps = async () => {
  const response = await getImages(1);

  return { props: { response } };
};

type Props = { response?: ResponseImage[] };

export default function Home(props: Props) {
  const [images, setImages] = useState<ResponseImage[] | undefined>(
    props.response
  );
  const [querySearchedImage, setQuerySearchedImage] = useState<string>();
  const [counterPage, setCounterPage] = useState<number>(1);

  const imagesRender = images?.map((image) => {
    return (
      <div key={image.id} className="max-w-[200px]">
        <img
          className="rounded-md h-full object-cover"
          src={image.urls.small}
          loading="lazy"
        />
      </div>
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center px-20 pb-10 bg-slate-200">
      <nav className="bg-gray-900 w-screen px-40 py-5 mb-10 flex gap-4 justify-between">
        <div className="flex gap-3">
          <input
            onChange={(e) => {
              setQuerySearchedImage(e?.target?.value);
            }}
            className=" h-9 rounded bg-slate-100 border-slate-700 border-2 px-2"
            type="text"
            placeholder="Search Image"
          />

          <Button
            name="Search"
            onclick={() => {
              if (querySearchedImage) {
                getSearchedImages(querySearchedImage).then((data) => {
                  setImages(data?.results);
                  setCounterPage(1);
                });
              }
            }}
          />

          <Link href="/random">
            <Button name="Random Photo" />
          </Link>
        </div>

        <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-400 font-mono font-semibold">
          <h1>FastGallery</h1>
        </div>
      </nav>

      <div className="flex flex-wrap justify-center gap-3">{imagesRender}</div>

      <div className="flex justify-center min-w-full pt-10">
        <Button
          name="Load More"
          onclick={() => {
            const nextPage = counterPage + 1;
            setCounterPage(nextPage);
            if (querySearchedImage) {
              getSearchedImages(querySearchedImage, nextPage).then((data) => {
                let newPhotos: ResponseImage[] = [];

                if (images) {
                  newPhotos = [...images];
                }

                if (data) {
                  newPhotos = [...newPhotos, ...data.results];
                }
                setImages(newPhotos);
              });
            } else {
              getImages(nextPage).then((data) => {
                let newPhotos: ResponseImage[] = [];
                if (images) {
                  newPhotos = [...images];
                }

                if (data) {
                  newPhotos = [...newPhotos, ...data];
                }
                setImages(newPhotos);
              });
            }
          }}
        />
      </div>
    </main>
  );
}
// grid grid-cols-4 gap-3 auto-rows-[200px]
