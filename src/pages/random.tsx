import { ResponseImage } from "@/types/response-image";
import { getImageRandom } from "@/api/image-random";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

export const getServerSideProps = async () => {
  const response = await getImageRandom();

  return { props: { response } };
};

type Props = {
  response: ResponseImage;
};

export default function Random(props: Props) {
  const [imageRandom, setImageRandom] = useState<ResponseImage | undefined>(
    props.response
  );

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      <h1 className="font-bold text-3xl text-center text-emerald-700 pb-10">
        Here is your random photo!
      </h1>
      <div className="flex gap-2 pb-10">
        <Button
          name="Reload 🔄️"
          onclick={() => {
            getImageRandom().then((data) => {
              setImageRandom(data);
            });
          }}
        />
        {imageRandom && (
          <Link href="/">
            <Button
              name="Go Back Home"
              onclick={() => {
                setImageRandom(undefined);
              }}
            />
          </Link>
        )}
      </div>
      <div className="flex gap-4">
        <img className="rounded-md flex-grow" src={imageRandom?.urls.small} />
        <div className="rounded-md flex flex-col flex-grow max-h-[200px] max-w-[400px] p-4 justify-center bg-slate-50">
          <p>
            <b>Title:</b> {imageRandom?.tags?.[0].title}
          </p>
          <p>
            <b>Description:</b> {imageRandom?.alt_description}
          </p>
          <p>
            <b>Url:</b> {imageRandom?.links.html}
          </p>
          <p>
            <b>Create Date:</b> {imageRandom?.created_at}
          </p>
          <p>
            <b>Likes:</b> {imageRandom?.likes}
          </p>
        </div>
      </div>
    </main>
  );
}
