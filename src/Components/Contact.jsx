import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
function Contact() {

    const [isSubmitted, setIsSubmitted] = useState(false); // set submit false by default

    // email submit functionality : web3forms (react)
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e88ea4ee-6cb6-4de4-ac41-2d5c42f51cdc");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setIsSubmitted(true); //set submit to true
        }
      };

  return (
    <div className="contact-container mt-16 flex flex-col justify-center items-center">
      <div className="head-container font-bold text-4xl sm:text-6xl md:text-8xl">
        <p className="text-white flex justify-center">LET'S WORK</p>
        <p className="font-color1 flex justify-center">TOGETHER</p>
      </div>

      <section className="mt-8">
        <form onSubmit={onSubmit} 
        className="text-white w-sm sm:w-xl p-5" >
          <div className="name-container flex flex-col">
            <label>Name</label>
            <input
            name="name"
              type="text"
              placeholder="Your name"
              className="background3 p-2 rounded-md mt-1 text-sm"
              required
            />
          </div>
          <div className="email-container flex flex-col mt-5">
            <label>Email</label>
            <input
            name="email"
              type="email"
              placeholder="Your@email.com"
              className="background3 p-2 rounded-md mt-1 text-sm"
              required
            />
          </div>
          <div className="message-container flex flex-col mt-5">
            <label htmlFor="">Message</label>
            <textarea
            name="message"
              placeholder="Your message"
              className="background3 p-2 rounded-md h-30 mt-1"
              required
            />
          </div>
          </form>
          <div className="btn-container flex justify-center">
          <button
            type="submit"
            className="bg-orange-600 mt-2 sm:mt-5 rounded-md p-2 flex justify-center hover:cursor-pointer hover:bg-orange-500 w-86 sm:w-fit"
          >
            {isSubmitted ? "Thank You!" : "Send Message"}
          </button>
          </div>

        <div className="social-container mt-10 text-3xl font-bold flex text-orange-600 gap-10 justify-center">
          <a
            href="https://github.com/yashvardhannautiyal"
            target="_blank"
            className="hover:text-orange-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-vardhan-nautiyal/"
            target="_blank"
            className="hover:text-orange-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/YashVardhan228"
            target="_blank"
            className="hover:text-orange-400"
          >
            <FaXTwitter />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:text-orange-400"
          >
            <IoMail />
          </a>
        </div>
      </section>
    </div>
  );
}
export default Contact;
