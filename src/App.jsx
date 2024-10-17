import React from 'react';
import logo from './assets/logo.svg';
import menu from './assets/icon-hamburger.svg';
import arrow from './assets/icon-arrow-down.svg';
import mobileEgg from './assets/mobile/image-transform.jpg';
import stand from './assets/mobile/image-stand-out.jpg';
import emily from './assets/image-emily.jpg';
import jennie from './assets/image-jennie.jpg';
import thomas from './assets/image-thomas.jpg';
import milkBottles from './assets/mobile/image-gallery-milkbottles.jpg';
import galleryOrange from './assets/mobile/image-gallery-orange.jpg';
import cone from './assets/mobile/image-gallery-cone.jpg';
import sugar from './assets/mobile/image-gallery-sugar-cubes.jpg';
import desktopEgg from './assets/desktop/image-transform.jpg';
import desktopStand from './assets/desktop/image-stand-out.jpg';
import desktopMilkBottles from './assets/desktop/image-gallery-milkbottles.jpg';
import desktopGalleryOrange from './assets/desktop/image-gallery-orange.jpg';
import desktopCone from './assets/desktop/image-gallery-cone.jpg';
import desktopSugar from './assets/desktop/image-gallery-sugarcubes.jpg';

function App() {
  return (
    <>
      <header className="h-full min-h-[65vh] md:min-h-[80vh] bg-cover bg-center  bg-no-repeat w-full bg-[url('./assets/mobile/image-header.jpg')] lg:bg-[url('./assets/desktop/image-header.jpg')]">
        <div className="flex justify-between items-center w-[90%] pt-5 mx-auto relative md:pt-8">
          <div className="md:w-1/5 lg:w-1/6">
            <img src={logo} alt="Logo" className="w-[90%] md:w-full" />
          </div>
          <div className="peer md:hidden">
            <img src={menu} alt="Menu" />
          </div>
          <ul className="flex flex-col gap-6 py-12 text-gray-400 font-medium absolute top-20 bg-white w-full left-0 text-center tracking-wider before:absolute before:w-5 before:h-5 before:bg-white before:border-none shadow-lg border-none before:-top-5 before:polygon before:right-0 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 -translate-y-5 scale-90 peer-hover:scale-100 peer-hover:translate-y-0 transition-all duration-300 ease-linear md:flex-row md:opacity-100 md:bg-transparent md:before:hidden md:shadow-none md:visible md:relative md:items-center md:top-0 md:text-white md:right-0 md:translate-y-0 md:scale-100 md:py-0 md:justify-end lg:gap-10 *:cursor-pointer">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className="bg-yellow-300 w-fit mx-auto px-3 py-2 rounded-full text-gray-900 uppercase tracking-widest text-sm font-fraunces md:mx-0 md:bg-white md:hover:bg-sky-300/70 md:hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
              Contact
            </li>
          </ul>
        </div>

        <h1 className="font-bold text-4xl text-white uppercase tracking-widest px-10 text-center pt-16 font-fraunces leading-[3rem] md:pt-56 lg:pt-20">
          we are creatives
        </h1>
        <div className="w-fit h-full mx-auto py-20">
          <img src={arrow} alt="Arrow" className="w-full h-full" />
        </div>
      </header>
      <main className="">
        <section>
          <ul className="flex flex-col-reverse md:flex-row md:w-full md:justify-center md:items-center">
            <li className="py-14 px-7 text-center flex flex-col gap-7 justify-center items-center md:w-1/2 md:text-start md:gap-3 md:py-0 md:items-start lg:px-24 lg:gap-6 xl:px-40 xl:gap-10">
              <h2 className="font-fraunces text-[1.9rem] font-extrabold">
                Transform your brand
              </h2>
              <p className="text-gray-500">
                We are a full-service creative agency specializing in helping brands grow
                fast. Engage your clients through compelling visuals that do most of the
                marketing for you.
              </p>
              <button className="font-fraunces uppercase tracking-wider w-fit font-extrabold relative z-50 before:absolute before:h-[0.35rem] before:bg-yellow-200 before:w-full before:bottom-[0.1rem] before:-z-20 before:left-0 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:hover:bg-yellow-400">
                Learn More
              </button>
            </li>
            <li className="w-full h-full md:w-1/2">
              <img src={mobileEgg} alt="Egg" className="w-full h-full lg:hidden" />
              <img
                src={desktopEgg}
                alt="Desktop_Egg"
                className="w-full h-full hidden lg:block"
              />
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row md:w-full md:justify-center md:items-center">
            <li className="w-full h-full md:w-1/2">
              <img src={stand} alt="standOut" className="w-full h-full lg:hidden" />
              <img
                src={desktopStand}
                alt="Desktop_Stand"
                className="w-full h-full hidden lg:block"
              />
            </li>
            <li className="py-14 px-7 text-center flex flex-col gap-7 justify-center items-center md:w-1/2 md:text-start md:gap-3 md:py-0 md:items-start lg:px-24 lg:gap-6 xl:px-40 xl:gap-10">
              <h2 className="font-fraunces text-[1.9rem] font-extrabold">
                Stand out to the right audience
              </h2>
              <p className="text-gray-500">
                Using a collaborative formula of designers, researchers, photo graphers,
                videographers, and copywriters, we'll build and extend your brand in
                digital places.
              </p>
              <button className="font-fraunces uppercase tracking-wider w-fit font-extrabold relative z-50 before:absolute before:h-[0.35rem] before:rounded-full before:bg-red-200 before:w-full before:bottom-[0.1rem] before:-z-20 before:left-0 before:hover:bg-red-400 before:transition-all before:duration-300 before:ease-in-out">
                Learn More
              </button>
            </li>
          </ul>

          <ul className="w-full h-full md:flex md:justify-center md:items-center">
            <li className="bg-[url(./assets/mobile/image-graphic-design.jpg)] bg-cover h-full min-h-[70vh] bg-center bg-no-repeat relative md:w-1/2 md:-z-30 lg:bg-[url('./assets/desktop/image-graphic-design.jpg')] md:min-h-[37rem] lg:min-h-[37.5rem] xl:min-h-[47rem] 2xl:min-h-[57rem]">
              <div className="absolute bottom-10 px-6 text-center flex flex-col gap-5 text-green-900 md:bottom-40 lg:px-20 xl:bottom-48 xl:px-44">
                <h2 className="font-extrabold  font-fraunces tracking-wide text-2xl">
                  Graphic Design
                </h2>
                <p className="font-medium text-[16px]">
                  Great design makes you memorable. We deliver artwork that underscores
                  your brand message and captures potential clients' attention.
                </p>
              </div>
            </li>
            <li className="bg-[url(./assets/mobile/image-photography.jpg)] bg-cover h-full min-h-[70vh] bg-center bg-no-repeat relative md:w-1/2 md:-z-30 lg:min-h-[37.5rem] lg:bg-[url('./assets/desktop/image-photography.jpg')] md:min-h-[37rem] xl:min-h-[47rem] 2xl:min-h-[57rem]">
              <div className="absolute bottom-10 px-6 text-center flex flex-col gap-5 text-sky-900 md:bottom-40 lg:px-20 xl:bottom-48 xl:px-44">
                <h2 className="font-extrabold  font-fraunces tracking-wide text-2xl">
                  Photography
                </h2>
                <p className="font-medium text-[16px]">
                  Increase your credibility by getting the most stunning, high-equality
                  photos that improve your business image.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="flex flex-col justify-center items-center text-center my-16 gap-12 md:-mt-36 md:pt-20 md:bg-white">
          <h3 className="uppercase font-semibold font-fraunces text-gray-400 tracking-[0.19rem] xl:text-xl">
            client Testimonials
          </h3>
          <div>
            <ul className="flex flex-col gap-20 md:flex-row md:gap-5 md:justify-center md:items-center xl:px-20">
              <li className="flex flex-col gap-7">
                <img src={emily} alt="Emily" className="rounded-full w-1/5 mx-auto" />
                <p className="px-7 text-gray-800 font-medium">
                  We put our trust in Sunnyside and they delivered, making sure our needs
                  were met and deadlines were always hit.
                </p>
                <div>
                  <h4 className="font-bold font-fraunces">Emily R.</h4>
                  <p className="text-[16px] text-gray-400 font-medium">
                    Marketing Director
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-7">
                <img src={thomas} alt="Thomas" className="rounded-full w-1/5 mx-auto" />
                <p className="px-7 text-gray-800 font-medium">
                  Sunnyside's enthusiasm coupied with their keen interest in our brand's
                  success made it a satisfying and enhoyable experiene.
                </p>
                <div>
                  <h4 className="font-bold font-fraunces">Thomas S.</h4>
                  <p className="text-[16px] text-gray-400 font-medium">
                    Chief Operating Officer
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-7">
                <img src={jennie} alt="Jennie" className="rounded-full w-1/5 mx-auto" />
                <p className="px-7 text-gray-800 font-medium">
                  Incredible end result! Our sales increased over 400% when we worked with
                  Sunnyside. Highly recommended!
                </p>
                <div>
                  <h4 className="font-bold font-fraunces">Jennie F.</h4>
                  <p className="text-[16px] text-gray-400 font-medium">Business Owner</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <ul className="grid grid-cols-2 md:grid-cols-4">
            <li>
              <img
                src={milkBottles}
                alt="Milk_Bottles"
                className="w-full h-full lg:hidden"
              />
              <img
                src={desktopMilkBottles}
                alt="Desktop_Milk_Bottle"
                className="w-full h-full hidden lg:block"
              />
            </li>
            <li>
              <img
                src={galleryOrange}
                alt="Gallery_Orange"
                className="w-full h-full lg:hidden"
              />
              <img
                src={desktopGalleryOrange}
                alt="Desktop_Gallery_Orange"
                className="w-full h-full hidden lg:block"
              />
            </li>
            <li>
              <img src={cone} alt="Cone" className="w-full h-full lg:hidden" />
              <img
                src={desktopCone}
                alt="Desktop_Cone"
                className="w-full h-full hidden lg:block"
              />
            </li>
            <li>
              <img src={sugar} alt="Sugar_Cubes" className="w-full h-full lg:hidden" />
              <img
                src={desktopSugar}
                alt="Desktop_Sugar"
                className="w-full h-full hidden lg:block"
              />
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-[#90D4C5]">
        <section className="flex flex-col justify-center items-center gap-10 text-center py-12">
          <h5 className="font-extrabold text-3xl text-green-900/75 xl:text-4xl">
            sunnyside
          </h5>
          <ul className="flex justify-evenly items-center w-full text-green-900/50 font-bold md:justify-center md:gap-10 xl:gap-14 lg:text-xl *:cursor-pointer">
            <li className="hover:text-white transition-all duration-300 ease-in-out">
              About
            </li>
            <li className="hover:text-white transition-all duration-300 ease-in-out">
              Services
            </li>
            <li className="hover:text-white transition-all duration-300 ease-in-out">
              Projects
            </li>
          </ul>
          <ul className="flex justify-center gap-8 items-center w-full *:cursor-pointer">
            <li className="group">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                  fill="#2C7566"
                  fill-rule="nonzero"
                  className="group-hover:fill-white transition-all duration-300 ease-in-out"
                />
              </svg>
            </li>
            <li className="group">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                  fill="#2C7566"
                  fill-rule="nonzero"
                  className="group-hover:fill-white transition-all duration-300 ease-in-out"
                />
              </svg>
            </li>
            <li className="group">
              <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z"
                  fill="#2C7566"
                  fill-rule="nonzero"
                  className="group-hover:fill-white transition-all duration-300 ease-in-out"
                />
              </svg>
            </li>
            <li className="group">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z"
                  fill="#2C7566"
                  fill-rule="nonzero"
                  className="group-hover:fill-white transition-all duration-300 ease-in-out"
                />
              </svg>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default App;
