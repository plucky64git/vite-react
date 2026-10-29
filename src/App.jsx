
import './App.css'
import Tarjetavehiculo from './components/Tarjetavehiculo';



function App() {
  let autos=[
    { titulo: "Vehículo 1", descripcion: "Descripción del vehículo 1", precio: "$10,000" },
    { titulo: "Vehículo 2", descripcion: "Descripción del vehículo 2", precio: "$15,000" },
    { titulo: "Vehículo 3", descripcion: "Descripción del vehículo 3", precio: "$20,000" },
    { titulo: "Vehículo 4", descripcion: "Descripción del vehículo 4", precio: "$25,000" },
    { titulo: "Vehículo 5", descripcion: "Descripción del vehículo 5", precio: "$30,000" }
  ];

  return (
    <>
    <h1>Bienvenido a mi tienda </h1>
    {autos.map((auto, index) => (
      <Tarjetavehiculo
        key={index}
        titulo={auto.titulo}
        descripcion={auto.descripcion}
        precio={auto.precio}
      />
    ))}

    </>
  );
}

export default App
