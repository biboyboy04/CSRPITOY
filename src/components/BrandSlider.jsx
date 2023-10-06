import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation } from "swiper/modules"
import { Mousewheel } from "swiper/modules"

const BrandSlider = () => {
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 2, // Group slides together in 2's
    slidesPerGroupSkip: 1, // Skip 1 slide group during transition
    spaceBetween: 20,
    //turn on this if there are additional slides to be added
    grabCursor: false,
    mousewheel: false,
    loop: false,
    navigation: false,
    modules: [Mousewheel, Navigation],
  }

  return (
    <>
      <div className="sliderContainer">
        <h1>TECHNOLOGIES USED</h1>
        <Swiper {...params} className="mySwiper">
          <SwiperSlide>
            <div>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img src="images/reactLogo.png" alt="react logo" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                <img src="images/viteLogo.png" alt="vite logo" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">
                <img src="images/tensorflowLogo.png" alt="tensorflow logo" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default BrandSlider
