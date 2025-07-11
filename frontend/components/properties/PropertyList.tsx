"use client";
import apiService from "@/app/services/apiService";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
	id: string;
	title: string;
	price_per_night: number;
	image_url: string;
};

const PropertyList = () => {
	const [properties, setProperties] = useState<PropertyType[]>([]);

	const getProperties = async () => {
		try {
			const response = await apiService.get("/api/properties/");
			setProperties(response.data);
		} catch (error) {
			console.error("Failed to fetch properties", error);
		}
	};

	useEffect(() => {
		getProperties();
	}, []);

	return (
		<div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
			{properties.length === 0 ? (
				<div>No properties found.</div>
			) : (
				properties.map((property) => (
					<PropertyListItem
						key={property.id}
						property={property}
					/>
				))
			)}
		</div>
	);
};

export default PropertyList;
