function ProductItem (props) {
  const { title, description, imageUrl, isSale } = props
  let saleBanner;
  if (isSale) {
    saleBanner =  <span className="text-danger">(Sale!!!)</span>
  }
  return (
    <>
      <div className="card mt-5 ms-3" style={{width: '15rem' }}> 
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="title">{title} {saleBanner}</h5>
          <p className="card-description">{description}</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </>
  )
}

export default ProductItem