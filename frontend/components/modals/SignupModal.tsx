"use client";
import Modal from "./Modal";
import { useState } from "react";
import useSignupModal from "@/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
	const signupModal = useSignupModal();
	const content = (
		<>
			<form className="space-y-4">
				<input
					type="email"
					placeholder="Your e-mail address"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				<input
					placeholder="Set password"
					type="password"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				<input
					placeholder="Repeat password"
					type="password"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				<div className="p-5 bg-red-500 text-white rounded-xl opacity-80 text-center">
					The error message
				</div>
				<CustomButton
					label="Sign Up"
					onClick={() => console.log("Test")}
					CustomClassName="w-full"
				/>
			</form>
		</>
	);
	return (
		<div>
			<Modal
				isOpen={signupModal.isOpen}
				close={signupModal.close}
				label="Sign Up"
				content={content}
			/>
		</div>
	);
};
export default SignupModal;
