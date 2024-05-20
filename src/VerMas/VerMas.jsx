import { Carrusel } from "../Carrusel/Carrusel.jsx";

export const VerMas = ({producto}) => {
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
				<p className="card__pre"> ${price}</p>
			</div>
			<p className="card__desc"> {description}</p>

			<div className="card__carrusel">{<Carrusel imagenes={images} />}</div>

			<button >
				Volcer
			</button>
		</div>
	);
}
