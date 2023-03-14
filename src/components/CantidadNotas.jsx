import { useState } from "react";

const CantidadNotas = ({ changeCantNotas }) => {
    const [cantNotas, setCantNotas] = useState(1);

    const handleCantNotas = (e) => {
        setCantNotas(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valor;
        valor = parseFloat(cantNotas);

        changeCantNotas(valor);
    };

    return (
        <div className="container-cant-notas">
            <form className="form-cant" onSubmit={handleSubmit}>
                <label htmlFor="cant-notas">
                    <h3>Ingrese la cantidad de notas:</h3>
                </label>
                <input
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
