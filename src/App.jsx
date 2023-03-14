import { useEffect, useState } from "react";
import CantidadNotas from "./components/CantidadNotas";
import CargarNotas from "./components/CargarNotas";
import Resultado from "./components/Resultado";

function App() {
    const [cantNotas, setCantNotas] = useState(0);

    const [notas, setNotas] = useState([]);

    const [resultado, setResultado] = useState(0);

    const changeCantNotas = (cantidad) => {
        setCantNotas(cantidad);
    };

    const pushNotas = (nota) => {
        setNotas([...notas, nota])
    }

    const handleReset = () => {
      setCantNotas(0);
      setNotas([]);
      setResultado(0);
    }

    useEffect(() => {
        if(cantNotas !== 0 && cantNotas === notas.length) {
            let suma = 0;
            for(let nota of notas) {
              suma += nota;
            }
            let promedio = suma / notas.length;
            promedio = promedio.toFixed(2);
            promedio = parseFloat(promedio)
            console.log(promedio);
            console.log(typeof promedio);
            console.log(resultado);
            setResultado(promedio);
        }
    }, [notas]);

    return (
        <div className="container-app">
            <h1 className="titulo">Promedio de notas</h1>
            <div className="container-cargar-resultado">
                {cantNotas === 0 ? (
                    <CantidadNotas changeCantNotas={changeCantNotas} />
                ) : notas.length !== cantNotas ? (
                    <CargarNotas pushNotas={pushNotas} cantNotas={cantNotas} />
                ) : (
                    <Resultado resultado={resultado} notas={notas} />
                )}
                {
                  cantNotas !== 0 && <button className="btn-reset" onClick={handleReset}>Reiniciar</button>
                }
            </div>
        </div>
    );
}

export default App;
