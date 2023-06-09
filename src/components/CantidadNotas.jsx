import { useEffect, useRef, useState } from "react";

const CantidadNotas = ({ changeCantNotas }) => {
    const [cantNotas, setCantNotas] = useState(1);

    const inputRef = useRef();

    const handleCantNotas = (e) => {
        setCantNotas(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valor;
        valor = parseFloat(cantNotas);

        changeCantNotas(valor);
    };
    
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className="container-cant-notas">
            <form className="form-cant" onSubmit={handleSubmit}>
                <label htmlFor="cant-notas">
                    <h3>Ingrese la cantidad de notas:</h3>
                </label>
                <input
                    ref={inputRef}
                    type="number"
                    min={1}
                    required
                    id="cant-notas"
                    name="cant-notas"
                    onChange={handleCantNotas}
                    value={cantNotas}
                />
                <button type="submit">Aceptar</button>
            </form>
        </div>
    );
};

export default CantidadNotas;
