import ProductItem from "./ProductItem.jsx"

function Maincontainer() {
  const products = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      imageUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      isSale: true
    },
    {
      id: 2,
      title: 'iPhone X',
      description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      imageUrl: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      isSale: false
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description: 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
      imageUrl: "https://i.dummyjson.com/data/products/3/1.jpg",
      isSale: true

    },
    {
      id: 4,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      imageUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      isSale: true
    },
    {
      id: 5,
      title: 'iPhone X',
      description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      imageUrl: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      isSale: false
    },
    {
      id: 6,
      title: 'Samsung Universe 9',
      description: 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
      imageUrl: "https://i.dummyjson.com/data/products/3/1.jpg",
      isSale: true

    },
  ]

  const productItemList = products.map(product =>  <ProductItem key={product.id} title={product.title} description={product.description} imageUrl={product.imageUrl} isSale={product.isSale}/>
  );

  return (
    <> 
     <div className="d-flex row justify-content-center">
        {productItemList}
    </div>
    </>
  )
}

export default Maincontainer