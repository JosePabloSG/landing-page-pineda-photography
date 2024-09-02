"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { montserrat } from "@/config/fonts";
export default function Home() {
  return (
    <>
      <Image
        src="/hero.jpg"
        alt="hero"
        className="rounded"
        width={1920}
        height={1080}
      />
      <main className="px-12 mt-4">
        <section className="mt-6">
          <div className="flex flex-col md:flex-row w-full p-4 md:p-8">
            <Image
              src="/Secondary.jpg"
              className="rounded w-full md:w-1/4 mb-4 md:mb-0 md:mr-8"
              alt="logo"
              width={400}
              height={400}
            />
            <div className="flex flex-col justify-center">
              <h1
                className={`${montserrat.className} text-4xl font-bold text-center mb-4`}
              >
                Sobre nosotros
              </h1>
              <p className="text-justify leading-relaxed">
                Somos un equipo apasionado de fotógrafos dedicados a capturar
                esos momentos especiales de cada persona. Con una combinación de
                creatividad y técnica para cada detalle, nuestra visión es
                contar historias a través de imágenes que durarán toda la vida,
                ofreciendo un servicio personalizado y adaptado a tus
                necesidades. ¡Somos Pineda Photography, fotografiando momentos!
              </p>
            </div>
          </div>
        </section>
        <section>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image
                src="/Slide-3.jpg"
                alt="slide1"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Slide-2.jpg"
                alt="slide2"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Slide-3.jpg"
                alt="slide3"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Slide-2.jpg"
                alt="slide4"
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="flex w-full mt-6">
          <div className="w-1/2">
            <h1
              className={`${montserrat.className} text-4xl font-bold text-center mb-4`}
            >
              Enterate de todo lo que ofrecemos
            </h1>
            <div className="flex justify-center space-x-4">
              <Link
                href={"/services"}
                className="text-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                Ver servicios
              </Link>
              <Link
                href={"/productions"}
                className="text-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                Ver producciones
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <h1
              className={`${montserrat.className} text-4xl font-bold text-center mb-4`}
            >
              Ponte en contacto con nosotros
            </h1>
            <Link
              href={"/contacts"}
              className="block text-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mx-auto"
              style={{ maxWidth: "200px" }}
            >
              Contactar
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
