import { useState } from "react";
import cln from "classnames";
import { supabase } from "../back/supabase";

import { Input } from "./Input";
import Form from "./Form";

import { ATTENDING, DRINKS, STAYING } from "./constants";

import styles from "./Form.module.css";

export default function RsvpForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [staying, setStaying] = useState("");
  const [allergy, setAllergy] = useState("");
  const [drinks, setDrinks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("WeddingGuests")
      .insert([{ name, attending, staying, drinks, allergy }]);

    if (error) {
      alert("Ошибка отправки");
    } else {
      alert("Спасибо! ❤️");
    }
  };

  const handleDrinkChange = (e) => {
    const value = e.target.value;

    setDrinks((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((d) => d !== value),
    );
  };

  const isDisabled = !drinks.length || !name || !attending || !staying;

  return (
    <form onSubmit={handleSubmit} className={styles.column}>
      <Input
        value={name}
        placeholder="Ваше имя и фамилия"
        handleChange={setName}
      />

      <Form value={attending} onChange={setAttending} data={ATTENDING} />
      <Form value={staying} onChange={setStaying} data={STAYING} />

      <div className={styles.column}>
        {DRINKS.map(({ value, text }, idx) => (
          <label key={idx}>
            <input type="checkbox" value={value} onChange={handleDrinkChange} />
            {text}
          </label>
        ))}
      </div>

      <div className={styles.column}>
        <div>Есть ли у Вас пищевая аллергия? Если есть, напишите какая</div>
        <Input
          value={allergy}
          placeholder="У меня аллергия на..."
          handleChange={setAllergy}
        />
      </div>

      <button
        type="submit"
        className={cln(styles.button, {
          [styles.disabled]: isDisabled,
        })}
        disabled={isDisabled}
      >
        Отправить
      </button>
    </form>
  );
}
