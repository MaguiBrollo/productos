import "./Estrellas.css";

export const Estrellas = ({ estrellas }) => {
	return (
		<>
			<div className="estrellas__cont">
				<div className="estrellas__vacia">
					<div
						style={{ width: `${estrellas * 20}%` }}
						className="estrellas__color"
					></div>
				</div>
			</div>
		</>
	);
};
