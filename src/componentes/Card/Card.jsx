import { formatPesos } from "../../util/Funciones.jsx";
import "./Card.css";

export const Card = ({ producto, setUnProducto, setAncho}) => {
	const verMas = () => {
		setAncho(70);
		setUnProducto(producto);
	};

	const { title, brand, description, price, thumbnail } = producto;

	return (
		<div className="card">
			<div className="card__cont">
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
			</div>
			<div className="card__btn-cont">
				<button className="card__btn" onClick={verMas}>
					Ver más
				</button>
			</div>
		</div>
	);
};
