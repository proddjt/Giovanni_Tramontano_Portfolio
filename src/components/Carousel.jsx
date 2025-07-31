import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButtons'
import Modal from './Modal'

const Carousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [modalName, setModalName] = useState("Lootly")

  const projects = [
    {
      name: "Lootly",
      bg_file: "/media/img/lootly-bg.jpg",
      mockup_file: "/media/img/mockups/lootly.png",
      text_dark: false
    },
    {
      name : "GTimer",
      bg_file: "/media/img/gtimer-bg.png",
      mockup_file: "/media/img/mockups/gtimer.png",
      text_dark: true
    },
    {
      name : "JPTattoo",
      bg_file: "/media/img/jptattoo-bg.png",
      mockup_file: "/media/img/mockups/jptattoo.png",
      text_dark: false
    },
    {
      name: "Presto by SudHub",
      bg_file: "/media/img/presto-bg.png",
      mockup_file: "/media/img/mockups/presto.png",
      text_dark: false
    },
    {
      name: "GennAIrino",
      bg_file: "/media/img/gennairino-bg.png",
      mockup_file: "/media/img/mockups/gennairino.png",
      text_dark: true
    },
    {
      name: "Vestiti Matti-a",
      bg_file: "/media/img/vestitimatti-bg.png",
      mockup_file: "/media/img/mockups/vestitimatti.png",
      text_dark: true
    },
    {
      name: "WCAQuiz",
      bg_file: "/media/img/wcaquiz-bg.png",
      mockup_file: "/media/img/mockups/wcaquiz.png",
      text_dark: true
    }
  ]

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)
  }, [emblaApi, onScroll])

  const openModal = (name) => () => {
    setModalName(name)
    document.getElementById('project_modal').showModal()
  }

  return (
    <>
    <div className="embla z-1">
      <div className="embla__viewport rounded-lg outline-2 outline-white/20" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide xl:h-[40rem] h-[30rem] flex justify-center items-center relative hover:scale-105 transition duration-300 cursor-pointer select-none" key={index} onClick={openModal(projects[index].name)}>
              <img src={projects[index].bg_file} className='absolute z-0 blur-md lg:w-full lg:h-auto h-full w-auto select-none' alt={projects[index].name} />
              <div className='flex lg:flex-row flex-col justify-center items-center z-2 lg:gap-15 gap-0 h-[40rem]'>
                <h5 className={`embla__text lg:text-6xl text-3xl font-commit ${projects[index].text_dark ? "text-black" : "text-white"}`}>{projects[index].name}</h5>
                <img src={projects[index].mockup_file} alt="mockup image" className='lg:w-1/3 w-2/3 md:w-2/4 select-none' />
              </div>
            </div>
              
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
    <Modal name={modalName}/>
    </>
  )
}

export default Carousel