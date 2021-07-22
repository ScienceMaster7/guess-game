import { useState } from "react";

export default function Age() {
  const [guess, setGuess] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.name.value;
    //if (value) {
    const url = `https://api.agify.io/?name=${value}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGuess(data.age);
      });
    // } else {
    //  alert("you need to enter a name");
    // }
  }

  return (
    <>
      <header className="header">
        <form onSubmit={handleSubmit} className="header__form">
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="Guess your age"
            autoComplete="off"
            required
          />
          <button className="form__button">Go</button>
        </form>
      </header>
      <main className="content">
        <section className="content__output">
          {guess && <p>Your age is {guess}</p>}
        </section>
      </main>
    </>
  );
}
