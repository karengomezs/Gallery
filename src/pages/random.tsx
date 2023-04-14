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
      <h1 className="font-bold text-3xl text-emerald-700 pb-10">
        Here is your random photo!
      </h1>
      <div className="flex gap-2">
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

      <img className="pt-10" src={imageRandom?.urls.small} />
    </main>
  );
}
