import { Seccion } from "./componentes/Seccion/Seccion.jsx";
import { CarruselInfinito } from "./componentes/CarruselInfinito/CarruselInfinito.jsx";
import "./App.css";

function App() {
	return (
		<>
			<CarruselInfinito />
			<p className="app__titulo">Tienda de Productos</p>
			<Seccion />
		</>
	);
}

export default App;
