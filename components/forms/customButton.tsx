interface CustomButtonProps {
	label: string;
	onClick: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="w-full
      py-4
      bg-red-500
      hover:bg-red-600
      text-white
      text-center
      rounded-xl
      transition
      cursor-pointer"
		>
			{label}
		</div>
	);
};
export default CustomButton;
