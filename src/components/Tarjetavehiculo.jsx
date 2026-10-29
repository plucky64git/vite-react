function Tarjetavehiculo(props) {
  return (
        <article>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
        </article>
  );
}

export default Tarjetavehiculo;