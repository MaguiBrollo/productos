import { Carrusel } from "../Carrusel/Carrusel.jsx";
import { formatPesos } from "../../util/Funciones.jsx";
import { Estrellas } from "../Estrellas/Estrellas.jsx";
import "./VerMas.css";

export const VerMas = ({ unProducto, setUnProducto, setAncho }) => {
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
		setAncho(100);
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
				<p className="vermas__pre"> ${formatPesos(price)}</p>
			</div>
			<Estrellas estrellas={rating} />
			<div className="vermas__datos">
				<p className="vermas__desc"> {description}</p>
				<p>Descuento: {formatPesos(discountPercentage)}% </p>
				<p>Stock: {stock}</p>
				<p>Categoría: {category}</p>
			</div>

			<div className="vermas__btn-cont">
				<button className="vermas__btn" onClick={cerrarVerMas}>
					VOLVER
				</button>
			</div>
		</div>
	);
};
