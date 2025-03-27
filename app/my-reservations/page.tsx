import Image from "next/image";
const MyReservations = () => {
	return (
		<main className="max-w-[1500px] mx-auto px-6">
			<div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
				<p className="mt-6 mb-2 text-2xl">My Reservations</p>
				<div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-lg">
					<div className="col-span-1">
						<div className="relative overflow-hidden aspect-square rounded-xl">
							<Image
								fill
								src="/beach_1.jpg"
								alt="Landlrod name"
								className="hover:scale-110 object-cover transition h-full w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
export default MyReservations;
