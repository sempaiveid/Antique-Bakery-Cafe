import { useEffect, useState } from "react";
export function scrollToSection(id:string) {
  const section = document.getElementById(id); // находим элемент по id
  if (section) {
    section.scrollIntoView({ 
      behavior: "smooth", // плавная прокрутка
      block: "center"      // скроллит к верхней части элемента
    });
  }
}


function Nav() {
      const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
    return(
        <nav
        className={`fixed w-full z-[1000] transition-all ${
          scrolled ? "bg-black bg-opacity-70" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-2 md:py-6 text-right">
          <button className="md:hidden py-2 px-2" id="menu-toggle">
            <i className="fas fa-2x fa-bars text-amber-500"></i>
          </button>
          <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
            <li className="inline-block mb-4 mx-4">
              <a
                href="#intro"
                onClick={(e)=>{
                    e.preventDefault()
                    scrollToSection("intro")
                }}
                className="text-amber-500 hover:text-amber-300 hover:border-b-4 hover:border-amber-500 py-1 md:py-3 px-4 no-underline transition-all duration-200"
              >
                Вступ
              </a>
            </li>
            <li className="inline-block mb-4 mx-4">
              <a
                href="#menu"
                  onClick={(e)=>{
                    e.preventDefault()
                    scrollToSection("menu")
                }}
                className="text-amber-500 hover:text-amber-300 hover:border-b-4 hover:border-amber-500 py-1 md:py-3 px-4 no-underline transition-all duration-200 "
              >
                Меню
              </a>
            </li>
            <li className="inline-block mb-4 mx-4">
              <a
                href="#about"
                  onClick={(e)=>{
                    e.preventDefault()
                    scrollToSection("about")
                }}
                className="text-amber-500 hover:text-amber-300 hover:border-b-4 hover:border-amber-500 py-1 md:py-3 px-4 no-underline transition-all duration-200 "
              >
                Про нас
              </a>
            </li>
            <li className="inline-block mb-4 mx-4">
              <a
                href="#contact"
                  onClick={(e)=>{
                    e.preventDefault()
                    scrollToSection("contact")
                }}
                className="text-amber-500 hover:text-amber-300 hover:border-b-4 hover:border-amber-500 py-1 md:py-3 px-4 no-underline transition-all duration-200 "
              >
                Контакти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav