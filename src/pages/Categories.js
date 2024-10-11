import React, { useState } from 'react';
import { Slider, Typography } from '@mui/material'; // Import MUI components
import { categories } from '../utils/CategoriesData'; // Import categories data
import ProductDetails from '../components/categoriespagecomponents/ProductDetails'; // Import the ProductDetails component
import BabyShowerDecoration from "../assets/images/BabyShowerDecoration.jpg"; // Importing images
import BirthdayDecoration from "../assets/images/BirthdayDecoration.jpg";
import WeddingDecoration from "../assets/images/WeddingDecoration.jpg";
import GaneshaDecoration from "../assets/images/GaneshaDecoration.jpg";

const MIN_PRICE = 0;
const MAX_PRICE = 80000;

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [value, setValue] = useState([MIN_PRICE, MAX_PRICE]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false); // Modal open state

  // Handle slider value change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Open product details
  const openProductDetails = (product) => {
    const productWithImages = {
      ...product,
      images: [BirthdayDecoration, GaneshaDecoration, WeddingDecoration, BabyShowerDecoration], // Add your dynamic images here
    };

    const relatedProducts = filterItems(categories.find((category) => category.name === selectedCategory)?.items)
      .filter((item) => item.title !== product.title); // Get related products based on the category

    setSelectedProduct(productWithImages);
    setIsProductDetailsOpen(true);
};

const handleSelectProduct = (product) => {
  const productWithImages = {
    ...product,
    images: [BirthdayDecoration, GaneshaDecoration, WeddingDecoration, BabyShowerDecoration], // Add your dynamic images here
  };

  const relatedProducts = filterItems(categories.find((category) => category.name === selectedCategory)?.items)
    .filter((item) => item.title !== product.title); // Get related products based on the category

  setSelectedProduct(productWithImages);
};
  // Close product details
  const closeProductDetails = () => {
    setSelectedProduct(null);
    setIsProductDetailsOpen(false);
  };

  // Value text for accessibility
  const valuetext = (value) => {
    return `₹${value}`;
  };

  // Filter items based on selected price range
  const filterItems = (items) => {
    if (!items) return []; // Safety check
    return items.filter((item) => item.price >= value[0] && item.price <= value[1]);
  };

  
  return (
    <div className="min-h-screen p-4 md:p-8 font-sans">
      {!isProductDetailsOpen && ( // Show CategoriesPage only if product details are closed
        <>
          <h1 className="text-5xl text-center text-black font-bold my-20 italic" style={{ fontFamily: 'Great Vibes, Playfair Display', letterSpacing: '0.3rem' }}>
            Event Categories
          </h1>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center w-40 md:w-52">
                <button
                  className={`relative flex items-center justify-center text-lg w-32 h-32 md:w-36 md:h-36 rounded-full shadow-2xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl
                    ${selectedCategory === category.name ? 'ring-2 ring-[#9c27b0] scale-105' : 'ring-2 bg-indigo-500'}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <img src={category.image} alt={category.name} className="absolute inset-0 object-cover w-full h-full opacity-80 transition duration-300 ease-in-out" />
                </button>
                <span className={`mt-2 text-center text-xl font-semibold italic ${selectedCategory === category.name ? 'text-[#9c27b0]' : 'text-black'}`} style={{ fontFamily: 'Playfair Display' }}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            {/* Price Range Slider */}
            <div className="mb-6 w-72 text-center">
              <Typography variant="h6" className="mb-4">Filter by Price Range</Typography>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={MIN_PRICE}
                max={MAX_PRICE}
                color="secondary"
                step={1000}
              />
              <div className="text-black font-semibold">
                <span>₹{value[0]}</span> - <span>₹{value[1]}</span>
              </div>
            </div>
          </div>

          {/* Selected Category Description */}
          <div className="text-center mb-6">
            {categories
              .filter((category) => category.name === selectedCategory)
              .map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl text-black font-semibold mb-2 italic">{category.description}</h2>
                </div>
              ))}
          </div>

          {/* Cards for Selected Category */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {filterItems(categories.find((category) => category.name === selectedCategory)?.items).map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => openProductDetails(item)}>
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-indigo-500 mb-1">{item.title}</h3>
                  <p className="text-gray-700 mb-2">{`₹${item.price}`}</p>
                </div>
              </div>
            ))}
            {filterItems(categories.find((category) => category.name === selectedCategory)?.items).length === 0 && (
              <div className="col-span-4 text-center text-gray-700">No items found in this price range.</div>
            )}
          </div>
        </>
      )}

      {/* Product Details Modal */}
      {isProductDetailsOpen && (
    <ProductDetails
    product={selectedProduct}
    onClose={closeProductDetails}
    // relatedProducts={relatedProducts}
    onSelectProduct={handleSelectProduct} // Pass the new function
      relatedProducts={filterItems(categories.find((category) => category.name === selectedCategory)?.items)
        .filter((item) => item.title !== selectedProduct?.title)} 
    />
)}

      {/* Footer */}
      <footer className="mt-8">
        <p className="text-center text-white">© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CategoriesPage;
