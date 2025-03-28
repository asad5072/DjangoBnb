import Conversation from "@/components/inbox/Conversation";

const InboxPage = () => {
	return (
		<main className="max-w-[1500px] mx-auto px-6">
			<div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative space-y-4">
				<p className="mt-6 mb-2 text-2xl">My Inbox Page</p>
				<Conversation />
				<Conversation />
				<Conversation />
			</div>
		</main>
	);
};
export default InboxPage;
