"use client";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import { error } from "console";
export type PropertyType = {
	id: string;
	title: string;
	price_per_night: number;
	image_url: string;
};
const PropertyList = () => {
	const [properties, setPropertices] = useState<PropertyType[]>([]);
	const getProperties = async () => {
		const url = "http://127.0.0.1:8000/api/properties/";
		await fetch(url, { method: "GET" })
			.then((response) => response.json())
			.then((json) => {
				console.log("Json", json);
				setPropertices(json.data);
			})
			.catch((error) => {
				console.log("error:", error);
			});
	};
	useEffect(() => {
		getProperties();
	}, []);
	return (
		<div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
			{properties.map((property) => {
				return (
					<PropertyListItem
						key={property.id}
						property={property}
					/>
				);
			})}
		</div>
	);
};
export default PropertyList;
