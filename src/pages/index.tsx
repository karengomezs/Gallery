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
      <img
        className="w-full rounded-md"
        key={image.id}
        src={image.urls.thumb}
        loading="lazy"
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
          <Button
            name="Search"
            onclick={() => {
              if (querySearchedImage) {
                getSearchedImages(querySearchedImage).then((data) => {
                  setImages(data?.results);
                });
              }
            }}
          />

          {
            <Link href="/random">
              <Button name="Random Photo" />
            </Link>
          }
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">{imagesRender}</div>

      <div className="flex justify-center min-w-full pt-20">
        <Button
          name=" Load More"
          onclick={() => {
            const nextPage = counterPage + 1;
            setCounterPage(nextPage);

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
          }}
        />
      </div>
    </main>
  );
}
