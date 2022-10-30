import { useState } from "react";
import { trpc } from "../utils/trpc";
import { getColor } from "../utils/util";

const color = getColor();

type FormInputProps = {
  path: string;
  refetch: () => void;
};

const FormInput: React.FC<FormInputProps> = ({ refetch, path }) => {
  const [state, setState] = useState("");
  const { mutate } = trpc.word.create.useMutation({});

  const onSubmit = (event: any) => {
    event.preventDefault();

    mutate({ cloud: path, word: state });
    setTimeout(() => {
      refetch();
      setState("");
    }, 100);
  };

  return (
    <form
      className="z-2 absolute bottom-10 left-0 right-0 m-auto h-10 w-80"
      onSubmit={onSubmit}
    >
      <input
        onChange={(event) => setState(event.target.value)}
        style={{ color }}
        value={state}
        className="center w-full rounded-full border-0 bg-[#0c0f1c] py-4 px-8"
        placeholder="Say hello to 🌎 world ..."
      />
    </form>
  );
};

export default FormInput;
