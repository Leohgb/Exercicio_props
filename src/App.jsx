import './App.css';
import CarDetails from './CarDetails';

function App() {
  const cars = [
    { id: 1, marca: "Volkswagen", km: 2131, cor: "preto", ano: "2009" },
    { id: 2, marca: "Fiat", km: 4331, cor: "branco", ano: "2006" },
    { id: 3, marca: "Honda", km: 2986, cor: "vermelho", ano: "2022" },
  ]
  return (
    <div className="App">
      <h1>Exercicio - Props</h1>
      {
        cars.map(car =>
          <CarDetails key={car.id} marca={car.marca} km={car.km} cor={car.cor} ano={car.ano} />
        )
      }
    </div>
  );
}

export default App;
