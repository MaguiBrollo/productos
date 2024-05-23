import estilo from "./CarruselImg.module.css";

export const CarruselImg = ({ imgUrl }) => {
	return (
		<li className={estilo.slide__item}>
			<img src={imgUrl} alt="Productos" className={estilo.slide__img} />
		</li>
	);
};
