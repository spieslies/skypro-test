import type { ChangeEvent } from "react";
import styles from "./input.module.scss";

type TInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<TInputProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  onChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label ? (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        className={styles.input}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
