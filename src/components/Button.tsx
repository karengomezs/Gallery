export function Button({ name, onclick }: any) {
  return (
    <button
      onClick={onclick}
      className="rounded bg-slate-300 border-slate-400 border-2 p-1 h-9"
    >
      {name}
    </button>
  );
}
