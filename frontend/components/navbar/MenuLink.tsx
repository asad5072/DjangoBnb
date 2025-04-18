"use client";
interface MenuLinkProps {
	label: string;
	onClick2: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ label, onClick2 }) => {
	return (
		<div className="px-5 py-4 hover:bg-gray-100 transition" onClick={onClick2}>
			<p>{label}</p>
		</div>
	);
};
export default MenuLink;
