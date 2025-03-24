import PropertyListItem from "./PropertyListItem";
const PropertyList = () => {
	return (
		<div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
			<PropertyListItem />
			<PropertyListItem />
			<PropertyListItem />
			<PropertyListItem />
			<PropertyListItem />
		</div>
	);
};
export default PropertyList;
