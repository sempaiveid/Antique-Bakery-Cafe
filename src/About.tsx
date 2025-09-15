import { scrollToSection } from "./Nav";
import mess from "./assets/message.svg";

function About() {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] py-24 sm:py-48">
        <div className="max-w-[520px] ml-auto sm:px-0 px-4">
          <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
            <h2 className="mb-6 text-[#006666] text-4xl">Про наше кафе</h2>
            <p className="mb-6 text-base leading-8">
              У «Антикварній кав’ярні» ми готуємо каву з любов’ю та подаємо її у
              затишній атмосфері. Насолоджуйтеся свіжозвареною кавою, смачними
              десертами та ароматними напоями щодня.
            </p>
            <p className="mb-6 text-base leading-8">
              Завітайте до нас і відчуйте тепло та гостинність нашої кав’ярні.
              Ми раді кожному гостю!
            </p>
          </div>
          <a
            className="inline-flex items-center hover:bg-[#0a8585] gap-2 bg-[#006666] transition text-white text-xl pt-3 pb-4 px-8 rounded-md transition duration-300"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            <img src={mess} className="w-[40px] h-[40px]" alt="icon" />
            <span>Зв'язатися з нами</span>
          </a>
        </div>
      </div>
    </>
  );
}
export default About;
