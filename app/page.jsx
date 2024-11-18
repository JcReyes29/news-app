'use client'
import fetchData from "@/customhooks/fetchData";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopCards from "@/components/TopCards";

export default function Home() {
  const [headline, setHeadline] = useState([]);
  const [loading, setLoading] = useState();

  function getNews() {
    const key = 'fda644f7a546441db48a3bbd3c0992c8';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`

    setLoading(true);
    fetchData(url)
      .then(data => {
        console.log(data); setHeadline(data.articles || [])
      })
      .catch(error => console.error('Error fetchind data: ', error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    getNews()
  }, [])

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <section className="h-full dark:bg-gray-800">
        <div className="max-w-screen-lg mx-auto p-3 md:p-2 flex flex-col gap-10">
          <div className="flex flex-col items-center mt-4 md:mt-8 gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-black dark:text-white">Bienvenidos a News App!</h2>
            <p className="md:text-center md:text-lg max-w-[425px] text-black dark:text-white">Busque entre millones de artículos de más de 150.000 fuentes de noticias y blogs de todas partes del mundo</p>
          </div>
          <div className="flex flex-col gap-6 my-5">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black dark:text-white">Noticias Destacadas</h2>
            <Slider {...settings}>
              {/* Top cards component */}
              {headline &&
                headline.map((data, index) =>
                  <TopCards key={index} data={data} />
                )}
            </Slider>


          </div>
        </div>
      </section>
    </>
  );
}
