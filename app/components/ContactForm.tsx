import React, { useState , useRef} from "react";
import emailjs from "emailjs-com";

import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [name, setName] = useState("");
  const [nameBorderColor, setNameBorderColor] = useState("border-gray-300");
  const [email, setEmail] = useState("");
  const [emailBorderColor, setEmailBorderColor] = useState("border-gray-300");
  const [message, setMessage] = useState("");
  const [messageBorderColor, setMessageBorderColor] =
    useState("border-gray-300");
    const [captchaToken, setCaptchaToken] = useState("");

  const checkNameValid = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setName(input);
    input.trim().length > 0
      ? setNameBorderColor("border-green-400")
      : setNameBorderColor("border-red-400");
  };

  const checkEmailValid = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setEmail(input);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(input)
      ? setEmailBorderColor("border-green-400")
      : setEmailBorderColor("border-red-400");
  };

  const checkMessageValid = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setMessage(input);
    input.trim().length > 0
      ? setMessageBorderColor("border-green-400")
      : setMessageBorderColor("border-red-400");
  };

  const form = useRef<any>(null);
    const handleCaptchaChange = (token: string) => {
        setCaptchaToken(token);
    }
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (captchaToken) {
            emailjs.sendForm('service_ia2f1st', 'template_73h01vg', form.current, 'HM4xy5fugu2lLLMLl')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            alert('Please verify that you are a human')
        }
    };

  return (
    <form ref={form} className="w-full max-w-lg mx-auto flex flex-col justify-center items-center" onSubmit={sendEmail}>
      <div className="flex flex-wrap -mx-3 mb-6 justify-center">
        <input
          name="name"
          className={`w-full px-3 py-2 mb-2 text-gray-700 border rounded ${nameBorderColor}`}
          placeholder="Name"
          onBlur={checkNameValid}
          required
        />
        <input
          name="email"
          className={`w-full px-3 py-2 mb-2 text-gray-700 border rounded ${emailBorderColor}`}
          placeholder="Email"
          onBlur={checkEmailValid}
          required
        />
        <textarea
          name="message"
          className={`w-full px-3 py-2 mb-2 text-gray-700 border rounded ${messageBorderColor}`}
          placeholder="Message"
          onBlur={checkMessageValid}
          required
        />
        <button
          className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
          type="submit"

        >
          Send Message
        </button>
      </div>
      <ReCAPTCHA
                sitekey='6LdzTQYlAAAAAGYTH98mG6b1xrKGFXPeUpTepMeg'
                onChange={handleCaptchaChange}
                theme='light'
                
        />
    </form>
  );
}

export default ContactForm;
