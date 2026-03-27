import styles from './Input.module.css';

type InputProps = {
  value: string;
  placeholder: string;
  handleChange: (v: string) => void;
};

export const Input = (props: InputProps) => {
  const { placeholder = "", handleChange, value } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    handleChange(value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};
