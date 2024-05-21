import { useEffect, useState } from "react";
import { Card } from "../Card/Card.jsx";
import { VerMas } from "../VerMas/VerMas.jsx";
import BouceLoader from "react-spinners/BounceLoader";

import "./Seccion.css";

export const Seccion = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [productos, setProductos] = useState([]);
	const [unProducto, setUnProducto] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setData("");
			setIsLoading(false);
		}, 5000);
	}, []);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((datos) => {
				setProductos(datos.products);
			});
	}, []);

	if (isLoading) {
		return (
			<div className="spinner">
				<p style={{ fontSize: "0.9rem" }}>Cargando...</p>
				<div className="sweet-loading">
					<BouceLoader
						color={"#36d7b7"}
						loading={true}
						cssOverride={null}
						size={60}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="container">{data}</div>
			<div className="productos__cont">
				<div className="productos__todos">
					{productos.map((prod) => {
						return (
							<div className="productos__card" key={prod.id}>
								<Card producto={prod} setUnProducto={setUnProducto} />
							</div>
						);
					})}
				</div>
				{unProducto ? (
					<div>
						<VerMas unProducto={unProducto} setUnProducto={setUnProducto} />
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};
