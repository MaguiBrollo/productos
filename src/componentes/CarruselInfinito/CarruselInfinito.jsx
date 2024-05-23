import estiloCarrusel from "./CarruselInfinito.module.css";
import { CarruselImg } from "../CarruselImg/CarruselImg";

import im1 from "../../assets/ImgCarrusel/celu.jpg";
import im2 from "../../assets/ImgCarrusel/crema1.jpg";
import im3 from "../../assets/ImgCarrusel/cremamanos.jpg";
import im4 from "../../assets/ImgCarrusel/deco1.jpg";
import im5 from "../../assets/ImgCarrusel/deco2.jpg";
import im6 from "../../assets/ImgCarrusel/deco3.jpg";
import im7 from "../../assets/ImgCarrusel/note.jpeg";
import im8 from "../../assets/ImgCarrusel/perfumes.jpg";

export const CarruselInfinito = () => {
	return (
		<div className={estiloCarrusel.contenedor}>
			<ul className={`${estiloCarrusel.lista} list1`}>
				<CarruselImg imgUrl={im1} />
				<CarruselImg imgUrl={im2} />
				<CarruselImg imgUrl={im3} />
				<CarruselImg imgUrl={im4} />
				<CarruselImg imgUrl={im5} />
				<CarruselImg imgUrl={im6} />
				<CarruselImg imgUrl={im7} />
				<CarruselImg imgUrl={im8} />
			</ul>
			<ul className={`${estiloCarrusel.lista} list1`}>
				<CarruselImg imgUrl={im1} />
				<CarruselImg imgUrl={im2} />
				<CarruselImg imgUrl={im3} />
				<CarruselImg imgUrl={im4} />
				<CarruselImg imgUrl={im5} />
				<CarruselImg imgUrl={im6} />
				<CarruselImg imgUrl={im7} />
				<CarruselImg imgUrl={im8} />
			</ul>
         
		</div>
	);
};
