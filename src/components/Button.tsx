type Props = {
  name: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ name, onclick }: Props) {
  return (
    <button
      onClick={onclick}
      className="rounded bg-slate-300 border-slate-500 text-slate-950 font-semibold border-2 rounded-md   px-2 h-9"
    >
      {name}
    </button>
  );
}
