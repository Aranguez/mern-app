import { FC, useState } from "react";

// import { v4 as uuidv4 } from "uuid";

type Props = {
  /**
   * @description set initial value from outside
   */
  value?: string;
  /**
   * @description get value when input changes
   */
  onChange?: (value: string) => void;
  onSubmit: (value: string) => void;
  /**
   * @description allow to use the component as an Add input
   */
  withPlus?: boolean;
};

const Input: FC<Props> = ({ value, onChange, onSubmit, withPlus }) => {
  const [innerValue, setInnerValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInnerValue(value);
    if (onChange) onChange(value);
  };

  const handleSubmit = () => {
    onSubmit(value || innerValue);
    setInnerValue("");
  };

  return (
    <>
      <input
        type="text"
        value={value || innerValue}
        onChange={handleChange}
        placeholder="Add Task"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      {withPlus ? (
        <button type="button" onClick={handleSubmit}>
          +
        </button>
      ) : null}
    </>
  );
};

export default Input;
