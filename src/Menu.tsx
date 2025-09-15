import menu1 from "./assets/menu-item-1.jpg";
import menu2 from "./assets/menu-item-2.jpg";
import menu3 from "./assets/menu-item-3.jpg";
import menu4 from "./assets/menu-item-4.jpg";
import menu5 from "./assets/menu-item-5.jpg";
import menu6 from "./assets/menu-item-6.jpg";
import menu7 from "./assets/menu-item-7.jpg";
import menu8 from "./assets/menu-item-8.jpg";
const menuItems = [
  {
    name: "Гарячий капучино",
    type: "hot",
    prices: { S: "55₴", L: "75₴" },
    image: menu1,
  },
  {
    name: "Гарячий американо",
    type: "hot",
    prices: { S: "45₴", L: "65₴" },
    image: menu2,
  },
  {
    name: "Гарячий лате",
    type: "hot",
    prices: { S: "65₴", L: "85₴" },
    image: menu3,
  },
  {
    name: "Гарячий еспресо",
    type: "hot",
    prices: { S: "50₴", L: "70₴" },
    image: menu4,
  },
];

const menuItems2 = [
  {
    name: "Гарячий шоколад",
    type: "hot",
    prices: { S: "70₴", L: "90₴" },
    image: menu5,
  },
  {
    name: "Капучино з льодом",
    type: "iced",
    prices: { S: "60₴", L: "80₴" },
    image: menu6,
  },
  {
    name: "Айс-американо",
    type: "iced",
    prices: { S: "75₴", L: "95₴" },
    image: menu7,
  },
  {
    name: "Крижаний молочний лате",
    type: "iced",
    prices: { S: "65₴", L: "85₴" },
    image: menu8,
  },
];

function Menu() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto py-24 sm:py-48 justify-center ">
        <div className="text-center mb-16">
          <h2 className="bg-white text-brown py-6 px-12 text-4xl font-medium rounded-md mb-16 text-center inline-block">
            Наше меню
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="max-w-[520px] flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 bg-[#544639]">
            {menuItems.map((e, i) => (
              <div key={i} className="flex items-start mb-6">
                <img src={e.image} alt={e.name} className="rounded-md" />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-yellow-500">
                    {e.name}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    S - {e.prices.S}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    L - {e.prices.L}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-[520px] flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 bg-[#544639]">
            {menuItems2.map((e,i) => (
              <div key={i} className="flex items-start mb-6">
                <img src={e.image} alt={e.name} className="rounded-md" />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-yellow-500">
                    {e.name}
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    S - {e.prices.S}
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    L - {e.prices.L}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
