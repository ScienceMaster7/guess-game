import { useState } from "react";
export default function Gender() {
  const [guess, setGuess] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.name.value;
    const url = `https://api.genderize.io/?name=${value}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGuess(data.gender);
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
            placeholder="Guess your Gender"
            autoComplete="off"
          />
          <button className="form__button">Go</button>
        </form>
      </header>
      <main className="content">
        <section className="content__output">
          {guess && <p>You are {guess}</p>}
        </section>
      </main>
    </>
  );
}
