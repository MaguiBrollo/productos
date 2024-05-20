import { Carrusel } from "../Carrusel/Carrusel.jsx";
import { VerMas } from '../VerMas/VerMas.jsx'
import "./Card.css";


export const Card = ({ producto }) => {

const verMas = (() =>{
	console.log("pasa ", producto)
	return <VerMas producto={producto} />
})

function formatPesos(num) {
	return num.toLocaleString("es-ES", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}
	const {
		title,
		brand,
		description,
		price,
		thumbnail,
		images,
	} = producto;

	return (
		<div className="card">
			<div className="card__img-cont">
				<img className="card__img-mini" src={thumbnail} alt="Imagen" />
			</div>

			<div className="card__tit-pre">
				<div className="card__tit">
					<p>{title}</p>
					<p>{brand}</p>
				</div>
				<p className="card__pre"> ${formatPesos(price)}</p>
			</div>
			<p className="card__desc"> {description}</p>

			<div className="card__carrusel">{<Carrusel imagenes={images} />}</div>

			<button onClick={verMas}>Ver más</button>
		</div>
	);
};
