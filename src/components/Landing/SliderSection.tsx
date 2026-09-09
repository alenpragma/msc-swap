/* eslint-disable react/no-array-index-key */
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import styled from 'styled-components'

import s1 from '../../assets/slider/NFT.jpg'
import s2 from '../../assets/slider/Untitled-design.jpg'

const images = [
  { src: s1, id: 'nft' },
  { src: s2, id: 'design1' },
  { src: s2, id: 'design2' },
]

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
    created: (s) => {
      s.on('slideChanged', () => {
        setCurrentSlide(s.track.details.rel)
      })
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 3000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <SliderWrapper>
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, index) => (
          <div key={img.id} className="keen-slider__slide">
            <SlideImage src={img.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <ArrowLeft onClick={() => instanceRef.current?.prev()} />
      <ArrowRight onClick={() => instanceRef.current?.next()} />
      <Dots>
        {images.map((_, idx) => (
          <Dot
            key={`dot-${idx}`}
            className={currentSlide === idx ? 'active' : ''}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </Dots>
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

  .keen-slider {
    padding-bottom: 40px;
  }

  .keen-slider__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ArrowLeft = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`

const ArrowRight = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`

const Dots = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.5;
  border: none;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    opacity: 1;
  }
`

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
`
