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
    const key = 'd6eeb0aaf2b1470081d53cc53b414c4a';
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
    autoplaySpeed: 4500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <section className="h-full dark:bg-gray-800">
        <div className="max-w-screen-lg mx-auto p-3 md:p-2 flex flex-col gap-10 md:gap-0">
          <div className="flex flex-col items-center mt-4 md:mt-8 gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-black dark:text-white">Bienvenidos a News App!</h2>
            <p className="md:text-center md:text-lg max-w-[425px] text-black dark:text-white">Busque entre millones de artículos de más de 150.000 fuentes de noticias y blogs de todas partes del mundo</p>
          </div>
          <div className="flex flex-col gap-6 my-5 sm:my-10 md:my-14">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-black dark:text-white">Noticias Destacadas</h2>
            <Slider {...settings}>
              {loading ? (
                <div>
                  <svg viewBox="25 25 50 50" className="container">
                    <circle cx="50" cy="50" r="20" className="loader"></circle>
                  </svg>
                </div>
              ) : (
                headline &&
                headline.map((data, index) =>
                  <TopCards key={index} data={data} />
                )
              )}
            </Slider>


          </div>
        </div>
      </section>
    </>
  );
}
