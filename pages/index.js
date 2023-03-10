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
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alparslan Korkmaz Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
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
            <h2 className="text-5xl py-2 text-midnight font-medium md:text-6xl">
              Alparslan Korkmaz
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Self-taught web developer.
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
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
          <div className="relative mx-auto bg-gradient-to-b from-midnight to-orangejam rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
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
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                maxime accusantium nam dolorum neque corporis cum non earum
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
                maxime accusantium nam dolorum neque corporis cum non earum
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
                maxime accusantium nam dolorum neque corporis cum non earum
              </p>
              <h4 className="py-4 text-orangejam">Design tools I use</h4>
              <p className="text-gray-600 py-1">Photoshop</p>
              <p className="text-gray-600 py-1">Illustrator</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi voluptatem{" "}
              <span className="text-orangejam">eveniet</span>, nobis est
              quisquam architecto velit id tempore temporibus vel officia unde
              quam. Magni accusamus{" "}
              <span className="text-orangejam">tagnuti</span> eius minima at
              culpa sint.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
