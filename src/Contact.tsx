import {
  use,
  useState,
  type ChangeEvent,
  type FormEvent,
  type FormEventHandler,
} from "react";

function Contact() {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="max-w-[1200px] container mx-auto pt-24 pb-48 sm:py-48">
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
          <div className="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 max-w-[520px]">
            <h2 className="text-4xl mb-6 text-[#006666]">Contact Us</h2>
            <p className="mb-6 text-lg leading-8">
              Якщо у вас є питання або ви хочете замовити столик — ми завжди на
              зв’язку. Зателефонуйте нам або напишіть на пошту, і ми відповімо
              найближчим часом.
            </p>

            <div className="mb-10 text-lg">
              <span className="block mb-2">
                Tel:
                <a
                  href="tel:0100200340"
                  className="hover:text-yellow-600 transition ml-2"
                >
                  010-020-0340
                </a>
              </span>
              <span className="block">
                Email:
                <a
                  href="mailto:info@company.com"
                  className="hover:text-yellow-600 transition ml-2"
                >
                  info@company.com
                </a>
              </span>
            </div>

            <div className="text-center">
              <a
                href="https://www.google.com/maps"
                className="inline-block text-white bg-[#006666] text-2xl px-12 py-6 rounded-lg transition hover:bg-[#004c4c]"
              >
                Open Maps
              </a>
            </div>
          </div>
          <div className="flex-1 rounded-xl p-12 pb-12 m-5 bg-black bg-opacity-50 max-w-[520px]">
            <form onSubmit={handleSubmit} action="POST" className="text-lg">
              <input
                onChange={handleChange}
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 border-[#CC9966]  focus:outline-none focus:border-[#CC9966]  pl-3 focus:shadow-[0_0_10px_#b67533]"
              />
              <input
                onChange={handleChange}
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 border-[#CC9966] focus:outline-none focus:border-[#CC9966]  pl-3 focus:shadow-[0_0_10px_#b67533]"
              />
              <textarea
                onChange={handleChange}
                name="message"
                value={formData.message}
                className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 border-[#CC9966] focus:outline-none focus:border-[#CC9966]  pl-3 focus:shadow-[0_0_10px_#b67533]"
                placeholder="Message..."
              ></textarea>
              <div className="text-right ">
                <button
                  type="submit"
                  className="text-white  hover:text-yellow-500 transition"
                >
                  Send it
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="absolute bottom-0 left-0 w-full">
          <div className="text-white container mx-auto max-w-[1200px] p-8 text-lg flex flex-col md:flex-row justify-between">
            <span className="shadow-[0_0_10px_#00000]">
              2025 Antique Cafe. All rights reserved
            </span>
            <span className="shadow-[0_0_5px_#00000]">
              Натхнення приходить разом із кавою та новими ідеями
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Contact;
