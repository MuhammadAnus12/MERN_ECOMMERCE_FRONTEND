import React from 'react'
import NavBar from '../features/navBar/NavBar'
import ProductDetail from '../features/product/components/ProductDetail'
import Footer from '../features/common/Footer'
function ProductDetailPage() {
  return (
    <div>
        <NavBar>
            <ProductDetail/>
        </NavBar>
        <Footer/>
    </div>
  )
}

export default ProductDetailPage