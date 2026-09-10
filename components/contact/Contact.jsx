"use client";

import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import {useTranslation} from "react-i18next";
import {AiOutlineInfoCircle} from "react-icons/ai";
import Line from "@/components/ui/Line";
import ScrollFloat from "@/components/bits/ScrollFloat";
import {useNotification} from "@/providers/NotificationProvider";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const {t} = useTranslation();
  const {notify} = useNotification();
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    setFocus,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [shakeFields, setShakeFields] = useState({});

  const watchName = watch("name");
  const watchEmail = watch("email");
  const watchMessage = watch("message");

  // Focus & shake on first error
  useEffect(() => {
    if (errors.name) setFocus("name"), setShakeFields({name: true});
    else if (errors.email) setFocus("email"), setShakeFields({email: true});
    else if (errors.message) setFocus("message"), setShakeFields({message: true});

    const timeout = setTimeout(() => setShakeFields({}), 500);
    return () => clearTimeout(timeout);
  }, [errors, setFocus]);

  // Format current send time as dd:mm:yyyy and hh:mm:ss
  const pad = (n) => String(n).padStart(2, "0");
  const getFormattedDateTime = () => {
    const now = new Date();
    const date = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;
    const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    return {date, time};
  };

  const onSubmit = async (data) => {
    try {
      const {date, time} = getFormattedDateTime();
      await emailjs.send(
        "service_npus0fm", // service id
        "template_pz83hrm", // template id
        {
          from_name: data?.name,
          from_email: data?.email,
          message: data?.message,
          date,
          time,
          to_email: "mrteyanarturh-2@aspu.am"
        },
        {publicKey: "SZltocOmzEIP7uLsF"} // public key
      );
      notify({type: 'success', title: t('successMessage')});
      reset();
    } catch (error) {
      notify({type: 'error', title: t('failedMessage')});
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
    <section
      className="flex flex-col items-center gap-[2vw] py-[5vw] relative mobile:w-full mobile:px-[10%] mobile:pb-[10vw] mobile:pt-0"
      id="contact">
      <div
        className="mobile:text-center mobile:translate-x-0 mobile:mt-[5vw]">
        <ScrollFloat textClassName="text-[3vw] mobile:text-[6vw]">{t("contactMe")}</ScrollFloat>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-full mx-auto p-4 space-y-6">
        {/* Name */}
        <div className={`mb-4 relative ${shakeFields.name ? "animate-shake" : ""}`}>
          <input
            type="text"
            {...register("name")}
            className={getInputBorderClass(errors.name)}
          />
          <label className={getLabelClass(watchName, errors.name)}>{t("name")}</label>
          {errors.name && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group cursor-pointer">
              <AiOutlineInfoCircle className="text-red-500 w-6 h-6"/>
              <div
                className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 text-white text-xs rounded px-2 py-1 z-10 pointer-events-none">
                {t("name_required")}
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
          <label className={getLabelClass(watchEmail, errors.email)}>{t("email")}</label>
          {errors.email && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group cursor-pointer">
              <AiOutlineInfoCircle className="text-red-500 w-6 h-6"/>
              <div
                className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 text-white text-xs rounded px-2 py-1 z-10 pointer-events-none">
                {t("email_required")}
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
          <label className={getLabelClass(watchMessage, errors.message)}>{t("message")}</label>
          {errors.message && (
            <div className="absolute right-4 top-[1.5rem] transform -translate-y-1/2 group cursor-pointer">
              <AiOutlineInfoCircle className="text-red-500 w-6 h-6"/>
              <div
                className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 text-white text-xs rounded px-2 py-1 z-10 pointer-events-none">
                {t("message_required")}
              </div>
            </div>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white-500 p-4 text-[1vw] rounded-full shadow-inner shadow-gray-400 border border-gray-100 transition-all duration-300 hover:bg-white-500 hover:text-black-500 hover:shadow-black-500 hover:border-black-500 disabled:opacity-50 mobile:text-[2.5vw]"
        >
          {isSubmitting ? t("sending") : t("send_message")}
        </button>
      </form>

      <Line/>
    </section>
  );
};

export default ContactForm;