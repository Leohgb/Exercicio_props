import './App.css';

function CarDetails(props) {
  
  return (
    <div className='Card'>
      <ul>
        <li>Marca: {props.marca}</li>
        <li>KM: {props.km}</li>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
      </ul>
    </div>
  );
}

export default CarDetails;
