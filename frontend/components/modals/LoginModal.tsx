"use client";
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/hooks/userLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
	const loginModal = useLoginModal();
	const content = (
		<>
			<form className="space-y-4">
				<input
					type="email"
					placeholder="Your e-mail address"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				<input
					placeholder="Your password"
					type="password"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				<div className="p-5 bg-red-500 text-white rounded-xl opacity-80 text-center">
					The error message
				</div>
				<CustomButton
					label="Submit"
					onClick={() => console.log("Test")}
					CustomClassName="w-full"
				/>
			</form>
		</>
	);
	return (
		<div>
			<Modal
				isOpen={loginModal.isOpen}
				close={loginModal.close}
				label="Log In"
				content={content}
			/>
		</div>
	);
};
export default LoginModal;
