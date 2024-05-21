import { Carrusel } from "../Carrusel/Carrusel.jsx";
import "./VerMas.css";

export const VerMas = ({ unProducto, setUnProducto }) => {
	const {
		title,
		description,
		price,
		discountPercentage,
		rating,
		stock,
		brand,
		category,
		images,
	} = unProducto;

	const cerrarVerMas = () => {
		console.log("holaaa CERRAR ver mas");
		setUnProducto(false);
	};
	return (
		<div className="vermas__cont">
			<div className="vermas__carrusel">{<Carrusel imagenes={images} />}</div>
			<div className="vermas__tit-pre">
				<div className="vermas__tit">
					<p>{title}</p>
					<p>{brand}</p>
				</div>
				<p className="vermas__pre"> ${price}</p>
			</div>
			<p className="vermas__desc"> {description}</p>
			<p>Descuento: {discountPercentage}</p>
			<p>Clasificación (estrellas): {rating}</p>
			<p>Stock: {stock}</p>
			<p>Categoría: {category}</p>
			<div className="vermas__btn-cont">
				<button className="vermas__btn" onClick={cerrarVerMas}>
					VOLVER
				</button>
			</div>
		</div>
	);
};
