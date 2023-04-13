import { ResponseImage } from "@/types/response-image";
import { getImageRandom } from "@/api/image-random";
import { useState } from "react";
import Link from "next/link";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-extrabold from-neutral-800 font-">
        Here is your random photo
      </h1>
      {imageRandom && (
        <Link href="/">
          <button
            className="rounded bg-slate-300 border-slate-400 border-2 p-1"
            onClick={() => {
              setImageRandom(undefined);
            }}
          >
            Go Back Home
          </button>
        </Link>
      )}
      <img src={imageRandom?.urls.small} />
    </main>
  );
}
