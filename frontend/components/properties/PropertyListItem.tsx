import Image from "next/image";
import { PropertyType } from "./PropertyList";

interface PropertyProps {
	property: PropertyType;
}

const PropertyListItem: React.FC<PropertyProps> = ({ property }) => {
	// Check if image_url is not empty before rendering the Image component
	const imageUrl = property.image_url ? property.image_url : null;
	// console.log(imageUrl, "image url");

	return (
		<div className="cursor-pointer">
			<div className="relative overflow-hidden aspect-square rounded-xl">
				{imageUrl ? (
					<Image
						fill
						src={imageUrl}
						sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
						className="hover:scale-110 object-cover transition h-full w-full"
						alt="Property image"
						priority
					/>
				) : (
					<div className="h-full w-full bg-gray-200">No image available</div> // You can customize this placeholder
				)}
			</div>
			<div className="mt-2">
				<p className="text-lg font-bold">{property.title}</p>
			</div>

			<div className="mt-2">
				<p className="text-sm text-gray-500">
					<strong>${property.price_per_night}</strong> per night
				</p>
			</div>
		</div>
	);
};

export default PropertyListItem;
