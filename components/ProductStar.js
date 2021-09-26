import { FaStar } from "react-icons/fa"

const ProductStar = ({ rating }) => {

  return (
    <div className='flex items-center'>
      {[...Array(5)].map((star, i) => {

        const ratingValue = i

        return (
          <label key={i}>
            <input className='hidden' type='radio' name='rating' value={ratingValue} />
            <FaStar color={ratingValue < rating ? 'ffc107' : 'e4e5e9'} />
          </label>
        )
      })}
    </div >
  )
}

export default ProductStar
