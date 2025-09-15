function Intro() {
  return (
    <div className="max-w-[436px] mx-auto py-20 sm:pt-48 sm:pb-60 text-center">
      <div className="bg-black bg-opacity-70 p-12 mb-5">
        <h1 className="text-white text-5xl font-oswald mb-5">
          Антикварна кав'ярня
        </h1>
        <p className="text-amber-500 text-2xl">Ваш щоденний заряд енергії</p>
      </div>
      <div className="bg-black bg-opacity-70 p-10 mb-2 text-white text-sm leading-8">
        <p className=" md:text-xl font-raleway text-white mb-8  drop-shadow-md">
          Ласкаво просимо до кав'ярні «Антикваріат»! Насолоджуйтесь нашою
          свіжозвареною кавою та смачними смаколиками в затишній атмосфері.
          Ознайомтеся з нашим меню та зв'яжіться з нами з будь-якими питаннями.  
        </p>
      </div>
      <div className="text-center">
        <a href="#menu" className="inline-flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold text-2xl text-amber-500 hover:text-gray-200 transition">
              <i className="mr-3"></i>
              <span>Давайте дослідимо...</span>
        </a>
      </div>
    </div>
  );
}

export default Intro;
