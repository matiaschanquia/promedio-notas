import { useEffect, useRef, useState } from "react";


const CargarNotas = ( { pushNotas, cantNotas } ) => {

    const [nota, setNota] = useState(1);

    const [notaActual, setNotaActual] = useState(1);

    const inputRef = useRef();

    const handleNota = (e) => {
        setNota(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valor = parseFloat(nota);
        pushNotas(valor);
        setNotaActual(notaActual + 1);
        setNota(1);
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [notaActual])

    return(
        <div className="container-cargar-notas">
            <h3 className="titulo-cargar">Cargar notas</h3>
            <form className="form-cargar" onSubmit={handleSubmit}>
                <label htmlFor="nota">Cargue la nota {notaActual} de {cantNotas}: </label>
                <input ref={inputRef} required type="number" id="nota" name="nota" min={1} max={10} step=".01" onChange={handleNota} value={nota}/>
                <button type="submit">Cargar nota</button>
                <p>- Solo se permiten 2 decimales</p>

            </form>
        </div>
    );
}

export default CargarNotas;