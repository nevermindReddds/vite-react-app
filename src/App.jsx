import Header from "./components/Header";

function WayToTeach() {
  return (
    <ul>
      <li>
        <p>
          <strong>Информация и технологии</strong>
        </p>
      </li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>наш подход к обучению</h3>

          <ul>
            <li>
              <p>
                <strong>формат обучения</strong>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
