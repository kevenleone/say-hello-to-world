import { memo } from "react";
import { getColor } from "../utils/util";

type WordProps = {
  children: string;
};

const Word: React.FC<WordProps> = ({ children }) => {
  return (
    <span
      id="word-element"
      style={{ color: getColor() }}
      className="mr-3 text-xl hover:bg-[#000]"
    >
      {children}
    </span>
  );
};

const WordMemoized = memo(Word);

export { Word };

export default WordMemoized;
