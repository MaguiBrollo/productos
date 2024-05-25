import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const Carrusel = ({ imagenes }) => {
	return (
		<Splide
			aria-label="Carrusel de Imágenes"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			options={{
				start: 0, // índice de inicio
				rewindByDrag: true, //mover arrastrando
				pagination: false, //saca los puntitos blancos
				type: "slide", //dejar slide
				width: "220px", //tiene relación con el width de la img
				arrows: "true", // Si usa flechas o no
				keyborad: "global", //habilita atajos teclado
				perPage: 1, //número de diapositivas que se mostrarán en una página.
				//gap: "15px",
				perMove: 1, //número de diapositivas que se moverán a la vez
				drag: "free", //si se permite al usuario arrastrar el carrusel o no
				autoplay: true, //reproducción automática o no
				rewind: true, //si se rebobina
				pauseOnHover: false,
				resetProgress: false,
			}}
		>
			{imagenes.map((img, index) => {
				return (
					<SplideSlide key={index}>
						<img
							style={{
								width: "220px",
								aspectRatio: "1/1",
								objectFit: "cover",
								objectPposition: "center",
							}}
							src={img}
							alt="Imagen del producto"
						/>
					</SplideSlide>
				);
			})}
		</Splide>
	);
};
