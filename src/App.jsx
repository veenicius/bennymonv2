import "./App.css";
import CardsList from "./components/CardsList/CardsList";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12 grid xl:col-8">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <Search />
                <CardsList />
              </div>
            </section>
          </div>
          <div className="hidden xl:block col-4">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <PokemonInfo />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
