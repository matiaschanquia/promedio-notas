

const Resultado = ( { resultado, notas } ) => {
    return(
        <div className="container-resultado">
            <h3 className="titulo-resultado">Resultado</h3>
            <p className="parrafo-resultado"> El promedio de las siguientes notas: | {
                    notas.map((nota, index) => (
                        <span key={index}>{nota} | </span>
                    ))
                }
                es igual a {resultado}
            </p>
        </div>
    );
};

export default Resultado;