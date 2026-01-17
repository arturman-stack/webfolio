"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Line from "@/components/ui/Line";
import ScrollFloat from "@/components/bits/ScrollFloat";

// Validation schema
const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	message: yup.string().required("Message is required"),
});

const ContactForm = () => {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setFocus,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [status, setStatus] = useState(null); // null | "success" | "error"
	const [statusMessage, setStatusMessage] = useState("");
	const [shakeFields, setShakeFields] = useState({}); // track shake per field

	const watchName = watch("name");
	const watchEmail = watch("email");
	const watchMessage = watch("message");

	// Focus & shake on first error
	useEffect(() => {
		if (errors.name) setFocus("name"), setShakeFields({ name: true });
		else if (errors.email) setFocus("email"), setShakeFields({ email: true });
		else if (errors.message) setFocus("message"), setShakeFields({ message: true });

		const timeout = setTimeout(() => setShakeFields({}), 500); // remove shake
		return () => clearTimeout(timeout);
	}, [errors, setFocus]);

	const onSubmit = async (data) => {
		setStatus(null);
		try {
			await emailjs.send(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				{
					from_name: data.name,
					from_email: data.email,
					message: data.message,
					to_email: "mrteyanarturh-2@aspu.am",
				},
				"YOUR_USER_ID"
			);

			setStatus("success");
			setStatusMessage("Message sent successfully!");
			reset();
			setTimeout(() => setStatus(null), 5000);
		} catch (error) {
			console.error(error);
			setStatus("error");
			setStatusMessage("Failed to send message. Please try again later.");
			setTimeout(() => setStatus(null), 5000);
		}
	};

	// Floating label class generator
	const getLabelClass = (fieldValue, error) =>
		`absolute left-4 transition-all duration-300 pointer-events-none ${
			fieldValue ? "-top-3 left-7 text-xs text-gray-300 bg-black-500 px-1" : "top-4 text-sm text-gray-500"
		} ${error ? "text-red-500" : ""}`;

	const getInputBorderClass = (error) =>
		`w-full p-4 border rounded-full transition-all duration-300 ${
			error ? "ring-[.1vw] ring-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"
		} bg-black-500`;

	return (
		<section className="flex flex-col items-center gap-[2vw] py-[5vw] relative" id="contact">
			<ScrollFloat textClassName="text-[3vw] mobile:text-[6vw]">{t("contactMe")}</ScrollFloat>

			<form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-full mx-auto p-4 space-y-6">
				{/* Status message */}
				{status && (
					<div
						className={`p-3 rounded text-white transition-opacity duration-500 ${
							status === "success" ? "bg-green-500" : "bg-red-500"
						} opacity-100`}
					>
						{statusMessage}
					</div>
				)}

				{/* Name */}
				<div className={`mb-4 relative ${shakeFields.name ? "animate-shake" : ""}`}>
					<input
						type="text"
						{...register("name")}
						className={getInputBorderClass(errors.name)}
					/>
					<label className={getLabelClass(watchName, errors.name)}>Name</label>
					{errors.name && (
						<div className="absolute right-4 top-1/2 transform -translate-y-1/2 group cursor-pointer">
							<AiOutlineInfoCircle className="text-red-500 w-6 h-6" />
							<div className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 text-white text-xs rounded px-2 py-1 z-10 pointer-events-none">
								{errors.name.message}
							</div>
						</div>
					)}
				</div>

				{/* Email */}
				<div className={`mb-4 relative ${shakeFields.email ? "animate-shake" : ""}`}>
					<input
						type="email"
						{...register("email")}
						className={getInputBorderClass(errors.email)}
					/>
					<label className={getLabelClass(watchEmail, errors.email)}>Email</label>
					{errors.email && (
						<div className="absolute right-4 top-1/2 transform -translate-y-1/2 group cursor-pointer">
							<AiOutlineInfoCircle className="text-red-500 w-6 h-6" />
							<div className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 text-white text-xs rounded px-2 py-1 z-10 pointer-events-none">
								{errors.email.message}
							</div>
						</div>
					)}
				</div>

				{/* Message */}
				<div className={`mb-4 relative ${shakeFields.message ? "animate-shake" : ""}`}>
					<textarea
						rows={5}
						{...register("message")}
						className={`!rounded-3xl resize-none ${getInputBorderClass(errors.message)}`}
					/>
					<label className={getLabelClass(watchMessage, errors.message)}>Message</label>
					{errors.message && (
						<div className="absolute right-4 top-[1.5rem] transform -translate-y-1/2 group cursor-pointer">
							<AiOutlineInfoCircle className="text-red-500 w-6 h-6" />
							<div className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 text-white text-xs rounded px-2 py-1 z-10 pointer-events-none">
								{errors.message.message}
							</div>
						</div>
					)}
				</div>

				{/* Submit button */}
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full text-white-500 px-4 py-2 rounded-full shadow-inner shadow-gray-400 border border-gray-100 transition-all duration-300 hover:bg-white-500 hover:text-black-500 hover:shadow-black-500 hover:border-black-500 disabled:opacity-50"
				>
					{isSubmitting ? "Sending..." : "Send Message"}
				</button>
			</form>

			<Line />
		</section>
	);
};

export default ContactForm;
