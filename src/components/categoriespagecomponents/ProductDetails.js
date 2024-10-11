import React, { useState } from 'react';
import { Rating } from '@mui/material';

const ProductDetails = ({ product, onClose, relatedProducts, onSelectProduct }) => {
  const [selectedImage, setSelectedImage] = useState(product?.images[0]); // State to track selected image

  if (!product) return null; // Ensure the product exists

  // Handle thumbnail click
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  // Handle click on related product
  const handleRelatedProductClick = (relatedProduct) => {
    // Call the onSelectProduct function with the new product details
    onSelectProduct(relatedProduct);
  };

  return (
    <div className="p-8 w-full md:w-4/5 lg:w-3/4 mx-auto bg-white rounded-lg shadow-2xl relative">
      {/* Close Button */}
      <button
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300 absolute top-4 right-4"
        onClick={onClose}
      >
        <span className="text-2xl font-bold">&times;</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <div className="flex flex-col">
          {/* Main Image */}
          <div className="main-image mb-4">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="thumbnails flex space-x-2 overflow-x-auto">
            {product.images && product.images.length > 0 ? (
              product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity duration-300 ${image === selectedImage ? 'ring-2 ring-indigo-500' : ''}`}
                  onClick={() => handleThumbnailClick(image)}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>

        {/* Product Information Section */}
        <div className="product-info flex flex-col justify-between">
          {/* Product Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h2>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <Rating name="product-rating" value={product.rating} precision={0.5} readOnly />
            <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold text-indigo-600 mb-4">{`₹${product.price}`}</div>

          {/* Product Description */}
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          {/* Items Used in the Product */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Items Used:</h3>
            <ul className="list-disc pl-5">
              {product.itemsUsed && product.itemsUsed.length > 0 ? (
                product.itemsUsed.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))
              ) : (
                <li className="text-gray-700">No items listed.</li>
              )}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            {/* <button
              className="w-full md:w-1/2 bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Add to Cart
            </button> */}
            <button
              className="w-full md:w-1/2 bg-yellow-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => handleRelatedProductClick(item)} // Handle click on related product
              >
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-indigo-500 mb-1">{item.title}</h4>
                  <p className="text-gray-700 mb-2">{`₹${item.price}`}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">No related products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
