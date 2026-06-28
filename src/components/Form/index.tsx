import styles from './Form.module.css';

type FormProps = {
  value: string;
  onChange: (v: string) => void;
  data: {
    text: string;
    value: string;
  }[];
};
const Form = (props: FormProps) => {
  const { value, onChange, data } = props;

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = target;

    if (!value) {
      return;
    }

    onChange(value);
  };

  return (
    <select value={value} onChange={handleChange} className={styles.selector}>
      {data.map(({ text, value }, idx) => (
        <option value={value} key={idx} className={styles.option}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Form;
