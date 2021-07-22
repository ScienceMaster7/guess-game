import { useState } from "react";
export default function Country() {
  const [guess, setGuess] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.name.value;
    const url = `https://api.nationalize.io/?name=${value}`;
    console.log(value);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGuess(data.country[0].country_id);
      });
  }
  return (
    <>
      <header className="header">
        <form onSubmit={handleSubmit} className="header__form">
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="Guess your Country"
            autoComplete="off"
            required
          />
          <button className="form__button">Go</button>
        </form>
      </header>
      <main className="content">
        <section className="content__output">
          {guess && <p>You are from {guess}</p>}
        </section>
      </main>
    </>
  );
}
