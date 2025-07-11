import SearchFilter from "./SearchFilter";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";
const Navbar = () => {
	return (
		<nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
			<div className="max-w-[1500px] mx-auto px-6">
				<div className="flex justify-between items-center">
					<a href="/">DjangoBnb</a>
					<div className="flex space-x-6">
						<SearchFilter />
					</div>
					<div className="flex space-x-6 items-center">
						<div>
							<AddPropertyButton />
						</div>
						<UserNav />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
