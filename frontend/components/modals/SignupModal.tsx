"use client";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignupModal from "@/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
// import { handleLogin } from "@/app/lib/action";

const SignupModal = () => {
	const signupModal = useSignupModal();
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password1, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [errors, setErrors] = useState<string[]>([]);

	const submitSignup = async (e?: React.FormEvent) => {
		if (e) e.preventDefault();
		const formData = {
			email: email,
			password1: password1,
			password2: password2,
		};
		const response = await apiService.post(
			"/api/auth/register/",
			formData // ✅ Pass the plain JS object
		);
		if (response.access) {
			signupModal.close();
			router.push("/");
		} else {
			const tempError: string[] = Object.values(response).flat();
			setErrors(tempError);
		}
	};

	const content = (
		<div>
			<form
				onSubmit={submitSignup}
				className="space-y-4"
			>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Your e-mail address"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Set password"
					type="password"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				<input
					onChange={(e) => setPassword2(e.target.value)}
					placeholder="Repeat password"
					type="password"
					className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
				/>
				{errors.map((error, index) => (
					<div
						key={`error_${index}`}
						className="p-3 bg-red-500 text-white rounded-xl opacity-80 text-center"
					>
						{error}
					</div>
				))}

				<CustomButton
					label="Sign Up"
					type="submit"
					CustomClassName="w-full"
				/>
			</form>
		</div>
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
