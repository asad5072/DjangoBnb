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

	const submitSignup = async () => {
		const formData = {
			email: email,
			password1: password1,
			password2: password2,
		};
		console.log(formData, "form data");
		const response = await apiService.post(
			"/api/auth/register/",
			JSON.stringify(formData)
		);
		if (response.access) {
			//handle login
			// handleLogin(response.user.pk, response.access, response.refresh);

			signupModal.close();
			router.push("/");
		} else {
			const tempError: string[] = Object.values(response).map((error: any) => {
				return error;
			});
			setErrors(tempError);
		}
	};

	const content = (
		<div>
			<form action={submitSignup} className="space-y-4">
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
					onClick={submitSignup}
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
