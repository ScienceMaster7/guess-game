export default function Country() {
  return (
    <>
      <header className="header">
        <form className="header__form">
          <input
            className="form__input"
            type="text"
            placeholder="Guess your Country"
            autoComplete="off"
          />
          <button className="form__button">Go</button>
        </form>
      </header>
      <main className="content">
        <section className="content__output"></section>
      </main>
    </>
  );
}
