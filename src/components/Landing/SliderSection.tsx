// import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import styled from 'styled-components'

import s1 from '../../assets/slider/NFT.jpg'
import s2 from '../../assets/slider/Untitled-design.jpg'

const images = [s1, s2, s2]

const SliderSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    // spacing: 15,
    // duration: 2000, // scroll speed
    drag: true,
    // autoplay: true, // for auto scroll
    created(s) {
      const autoplay = () => {
        s.next()
        setTimeout(autoplay, 3000) // 3 seconds delay
      }
      setTimeout(autoplay, 3000)
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3 },
      },
    },
  })

  return (
    <SliderWrapper>
      <div ref={sliderRef} className="keen-slider">
        {images.map((img) => (
          <div className="keen-slider__slide" key={img}>
            <img src={img} alt="Slide" />
          </div>
        ))}
      </div>
    </SliderWrapper>
  )
}

export default SliderSection

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;

  .keen-slider__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }

  /* Hide navigation buttons if you want to add later */
  button {
    display: none;
  }
`
