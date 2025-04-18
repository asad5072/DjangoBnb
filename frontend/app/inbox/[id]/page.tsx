import ConversationDetails from "@/components/inbox/ConversationDetails";
const ConversationPage = () => {
	return (
		<main className="max-w-[1500px] mx-auto px-6">
			<div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
				<ConversationDetails />
			</div>
		</main>
	);
};
export default ConversationPage;
