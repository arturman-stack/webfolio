"use client";

import React, {useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import {useTranslation} from "react-i18next";
import {AiOutlineInfoCircle} from "react-icons/ai";
import Line from "@/components/ui/Line";
import ScrollFloat from "@/components/bits/ScrollFloat";
import {useNotification} from "@/providers/NotificationProvider";
import Lightfall from "@/components/bits/Lightfall";

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

  // Status bar: live clock
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const statusTime = now ? `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}` : "";

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

  const labelRefs = useRef({});

// Cuts the input's top border only where the floating label sits
  const getNotchStyle = (field, fieldValue) => {
    if (!fieldValue) return undefined;
    const w = (labelRefs.current[field]?.offsetWidth || 0);
    const left = 32;
    const ext = 10; // extra area so the ring isn't clipped
    const layer = "linear-gradient(#000,#000)";
    return {
      WebkitMaskImage: `${layer}, ${layer}`,
      maskImage: `${layer}, ${layer}`,
      WebkitMaskSize: `calc(100% + ${ext * 2}px) calc(100% + ${ext * 2}px), ${w}px ${ext + 8}px`,
      maskSize: `calc(100% + ${ext * 2}px) calc(100% + ${ext * 2}px), ${w}px ${ext + 8}px`,
      WebkitMaskPosition: `-${ext}px -${ext}px, ${left - 4}px -${ext}px`,
      maskPosition: `-${ext}px -${ext}px, ${left - 4}px -${ext}px`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskClip: "no-clip",
      maskClip: "no-clip",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    };
  };

  // Floating label class generator
  const getLabelClass = (fieldValue, error) =>
    `absolute left-4 transition-all duration-300 pointer-events-none rounded-sm ${
      fieldValue ? "-top-3 left-7 text-xs text-gray-300 bg-transparent px-2" : "top-4 text-sm text-gray-500"
    } ${error ? "text-red-400" : ""}`;

  const getInputBorderClass = (error) =>
    `w-full p-4 border rounded-full transition-all duration-300 ${
      error ? "ring-[.1vw] ring-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"
    } bg-black-500/40 backdrop-blur-md`;

  return (
    <section
      className="flex flex-col items-center gap-[2vw] py-[5vw] relative mobile:w-full mobile:px-[10%] mobile:py-[10vw]"
      id="contact">

      {/* Device */}
      <div
        className="relative w-[380px] max-w-full aspect-[71.9/145] mx-auto rounded-[3.2rem] p-[7px] bg-black-500 shadow-[0_30px_80px_rgba(0,0,0,0.7),inset_0_0_0_2px_#4a4a4c]">
        {/* Side buttons */}
        <span className="absolute -left-[3px] top-[110px] h-[28px] w-[3px] rounded-l bg-[#1c1c1e]"/>
        <span className="absolute -left-[3px] top-[170px] h-[52px] w-[3px] rounded-l bg-[#1c1c1e]"/>
        <span className="absolute -left-[3px] top-[235px] h-[52px] w-[3px] rounded-l bg-[#1c1c1e]"/>
        <span className="absolute -right-[3px] top-[190px] h-[80px] w-[3px] rounded-r bg-[#1c1c1e]"/>

        {/* Screen */}
        <div className="absolute inset-[7px] overflow-hidden rounded-[2.6rem] flex flex-col justify-center items-center">
          <div className="absolute h-full w-full">
            <Lightfall
              colors={["#ffffff"]}
              backgroundColor="#94a3b8"
              speed={0.3}
              streakCount={2}
              streakWidth={0.8}
              twinkle={0.3}
              backgroundGlow={0.1}
              headGlow={0.6}
              bloom={0.35}
              mouseInteraction
              holdToWarp
              intro
              streakLength={1}
              density={0.6}
              glow={1}
              depth={0.5}
              zoom={3}
              mouseStrength={0.4}
              mouseRadius={0.45}
              lens={0.5}
              fade={0}
              lightMode={false}
            />
          </div>

          {/* Dynamic island */}
          <div className="absolute left-1/2 top-3 z-20 h-[32px] w-[110px] -translate-x-1/2 rounded-full bg-black-500">
            <span className="absolute right-3 top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-[#10142a]"/>
          </div>

          {/* Status bar */}
          <div className="pointer-events-none absolute inset-x-0 top-3 z-20 flex h-[32px] items-center justify-between px-8 text-white">
            {/* Time */}
            <span className="min-w-[50px] text-[15px] font-semibold tracking-tight">{statusTime}</span>

            {/* Signal, Wi-Fi, Battery */}
            <div className="flex items-center gap-[6px]">
              {/* Signal */}
              <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
                <rect x="0" y="8" width="3" height="4" rx="1.5"/>
                <rect x="5" y="5.5" width="3" height="6.5" rx="1.5"/>
                <rect x="10" y="3" width="3" height="9" rx="1.5"/>
                <rect x="15" y="0" width="3" height="12" rx="1.5"/>
              </svg>

              {/* Wi-Fi */}
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                <path d="M3.267 5.267A7.4 7.4 0 0 1 13.733 5.267"/>
                <path d="M5.53 7.53A4.2 4.2 0 0 1 11.47 7.53"/>
                <circle cx="8.5" cy="10.5" r="1.3" fill="currentColor" stroke="none"/>
              </svg>

              {/* Battery (full) */}
              <div className="flex items-center" title="100%">
                <div className="relative h-[13px] w-[26px] rounded-[4px] border border-white/45 p-[1.5px]">
                  <div className="h-full w-full rounded-[2.5px] bg-white-500"/>
                </div>
                <span className="ml-[1px] h-[4.5px] w-[1.5px] rounded-r-full bg-white/45"/>
              </div>
            </div>
          </div>


          <div
            className="mobile:text-center mobile:translate-x-0 mobile:mt-[5vw] mb-[3vw]">
            <ScrollFloat textClassName="text-[2vw] mobile:text-[6vw]">{t("contactMe")}</ScrollFloat>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 max-w-[500px] w-full mx-auto px-4 space-y-6">
            {/* Name */}
            <div className={`mb-4 relative ${shakeFields.name ? "animate-shake" : ""}`}>
              <input
                type="text"
                {...register("name")}
                style={getNotchStyle("name", watchName)}
                className={getInputBorderClass(errors.name)}
              />
              <label ref={(el) => (labelRefs.current.name = el)} className={getLabelClass(watchName, errors.name)}>{t("name")}</label>
              {errors.name && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group cursor-pointer">
                  <AiOutlineInfoCircle className="text-red-500 w-6 h-6"/>
                  <div
                    className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500/20 backdrop-blur-xl border border-white-500/20 shadow-lg shadow-black-500/20 text-white-500 text-xs rounded-xl px-3 py-1.5 z-10 pointer-events-none">
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
                style={getNotchStyle("email", watchEmail)}
                className={getInputBorderClass(errors.email)}
              />
              <label ref={(el) => (labelRefs.current.email = el)} className={getLabelClass(watchEmail, errors.email)}>{t("email")}</label>
              {errors.email && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group cursor-pointer">
                  <AiOutlineInfoCircle className="text-red-500 w-6 h-6"/>
                  <div
                    className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500/20 backdrop-blur-xl border border-white-500/20 shadow-lg shadow-black-500/20 text-white-500 text-xs rounded-xl px-3 py-1.5 z-10 pointer-events-none">
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
            style={getNotchStyle("message", watchMessage)}
            className={`!rounded-3xl resize-none ${getInputBorderClass(errors.message)}`}
          />
              <label ref={(el) => (labelRefs.current.message = el)} className={getLabelClass(watchMessage, errors.message)}>{t("message")}</label>
              {errors.message && (
                <div className="absolute right-4 top-[1.5rem] transform -translate-y-1/2 group cursor-pointer">
                  <AiOutlineInfoCircle className="text-red-500 w-6 h-6"/>
                  <div
                    className="absolute right-0 bottom-full mb-1 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500/20 backdrop-blur-xl border border-white-500/20 shadow-lg shadow-black-500/20 text-white-500 text-xs rounded-xl px-3 py-1.5 z-10 pointer-events-none">
                    {t("message_required")}
                  </div>
                </div>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white-500 p-4 text-[1vw] rounded-full shadow-inner shadow-gray-400 border border-gray-100 bg-black-500/40 backdrop-blur-md transition-all duration-300 hover:bg-white-500 hover:text-black-500 hover:shadow-black-500 hover:border-black-500 disabled:opacity-50 mobile:text-[2.5vw]"
            >
              {isSubmitting ? t("sending") : t("send_message")}
            </button>
          </form>
        </div>
      </div>

      <Line/>
    </section>
  );
};

export default ContactForm;