import ContactButton from "@/components/ContactButton";
import PropertyListItem from "@/components/properties/PropertyListItem";
import Image from "next/image";
const LandloadDetailsPage = () => {
	return (
		<main className="max-w-[1500px] mx-auto px-6">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
				<aside className="col-span-1 mb-4">
					<div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
						<p>Land Lord Page</p>
						<Image
							src="/beach_1.jpg"
							width={200}
							height={200}
							alt="Landlrod name"
							className="rounded-full"
						/>
						<h1 className="mt-6 text-2xl">Landlord Name</h1>
						{/* <div className="w-25 h-25 rounded-full bg-amber-50 overflow-hidden object-cover"></div> */}
						<ContactButton />
					</div>
				</aside>
				<div className="col-span-1 md:col-span-3 pl-0 md:pl-6 ">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<PropertyListItem />
						<PropertyListItem />
						<PropertyListItem />
					</div>
				</div>
			</div>
		</main>
	);
};

export default LandloadDetailsPage;
