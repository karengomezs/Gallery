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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-extrabold from-neutral-800 font-">
        Here is your random photo
      </h1>
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
      <img src={imageRandom?.urls.small} />
    </main>
  );
}
