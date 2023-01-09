import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import alplinn from "../public/dev-alp-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import teamwork from "../public/teamwork.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alparslan Korkmaz Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">ALPLINN</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-midnight to-[#885875] text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-midnight font-medium">
              Alparslan Korkmaz
            </h2>
            <h3 className="text-2xl py-2">Self-taught web developer.</h3>
            <p className="text-medium py-5 leading-8 text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus nihil libero numquam, ea error debitis vitae
              architecto illo cum. Sed minima sint repellendus quo perspiciatis
              cumque vitae nostrum amet reprehenderit.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-midnight to-orangejam rounded-t-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={alplinn} className="mt-3" />
          </div>
        </section>

        {/* second page */}

        <section>
          <div>
            <h3 className="text-3xl py-1 mt-20">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi voluptatem{" "}
              <span className="text-orangejam">eveniet</span>, nobis est
              quisquam architecto velit id tempore temporibus vel officia unde
              quam. Magni accusamus{" "}
              <span className="text-orangejam">tagnuti</span> eius minima at
              culpa sint.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              corrupti quibusdam incidunt tempore asperiores perferendis
              consequatur laudantium facere placeat saepe numquam, quis nesciunt
              vel voluptate iure cum facilis et vitae.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                maxime accusantium nam dolorum neque corporis cum non earum,
                consequatur ad tempore ex dolore voluptas? Quidem delectus id
                mollitia quas atque.
              </p>
              <h4 className="py-4 text-orangejam">Design tools I use</h4>
              <p className="text-gray-600 py-1">Photoshop</p>
              <p className="text-gray-600 py-1">Illustrator</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Clean Code</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                maxime accusantium nam dolorum neque corporis cum non earum,
                consequatur ad tempore ex dolore voluptas? Quidem delectus id
                mollitia quas atque.
              </p>
              <h4 className="py-4 text-orangejam">Design tools I use</h4>
              <p className="text-gray-600 py-1">Photoshop</p>
              <p className="text-gray-600 py-1">Illustrator</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={teamwork} width={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Excellent Team Member
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                maxime accusantium nam dolorum neque corporis cum non earum,
                consequatur ad tempore ex dolore voluptas? Quidem delectus id
                mollitia quas atque.
              </p>
              <h4 className="py-4 text-orangejam">Design tools I use</h4>
              <p className="text-gray-600 py-1">Photoshop</p>
              <p className="text-gray-600 py-1">Illustrator</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
