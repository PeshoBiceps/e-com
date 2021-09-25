import Carousel from "react-multi-carousel";
import Image from 'next/image'
import "react-multi-carousel/lib/styles.css";

const MainCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 11,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6,
      paritialVisibilityGutter: 20
    }
  }

  return (
    <Carousel
      ssr
      draggable={false}
      infinite={true}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={2200}
      keyBoardControl={true}
      responsive={responsive}
      className='z-0'
    >
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/55-5ce2afad5f4013.95673976' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/984-5eff24f7f418a0.64091555' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/126-5ce2b09ceb63f1.46191072' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/292-5ce2b1fc3a8047.32444714' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/207-5f0daa7711e4f4.49697918' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/50-5fc756270000d2.44343941' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/15-5ce2af7ae6af44.91935383' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/168-5ce2b0f1239a93.99845628' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/979-5f5b81cdcf8545.41609729' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/175-5ce527dfc833f5.54147283' /></div>
      <div><img className='h-full w-full' src='https://img2.ans-media.com/cp/cms/product-brand/901-5ce2b0ce760c84.77450356' /></div>

    </Carousel>
  )
}

export default MainCarousel