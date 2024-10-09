import React, { useState } from 'react';
import { Slider, Typography } from '@mui/material'; // Import MUI components
import 'tailwindcss/tailwind.css'; // Ensure you have Tailwind CSS included

const MIN_PRICE = 0;
const MAX_PRICE = 80000;

const CategoryPage = () => {
  const categories = [
    {
      name: 'Birthday',
      image: 'https://via.placeholder.com/150/FFDD00/000000?text=Birthday',
      description: 'Celebrate birthdays with fun decorations, themes, and party vibes that create lasting memories.',
      items: [
        { title: 'Birthday Balloons', image: 'https://via.placeholder.com/200', price: 4000 },
        { title: 'Birthday Cake Setup', image: 'https://via.placeholder.com/200', price: 12000 },
        { title: 'Party Lights', image: 'https://via.placeholder.com/200', price: 8000 },
        { title: 'Birthday Hat', image: 'https://via.placeholder.com/200', price: 2000 },
        { title: 'Birthday Banner', image: 'https://via.placeholder.com/200', price: 1500 },
      ],
    },
    {
      name: 'Baby Shower',
      image: 'https://via.placeholder.com/150/FFB6C1/000000?text=Baby+Shower',
      description: 'Cherish the joy of a new beginning with beautiful baby shower decorations and moments to treasure forever.',
      items: [
        { title: 'Baby Shower Banners', image: 'https://via.placeholder.com/200', price: 5000 },
        { title: 'Gender Reveal Setup', image: 'https://via.placeholder.com/200', price: 15000 },
        { title: 'Flower Decorations', image: 'https://via.placeholder.com/200', price: 10000 },
        { title: 'Baby Shower Favors', image: 'https://via.placeholder.com/200', price: 3500 },
        { title: 'Diaper Cake', image: 'https://via.placeholder.com/200', price: 6000 },
      ],
    },
    {
      name: 'Ganapati Decoration',
      image: 'https://via.placeholder.com/150/FFD700/000000?text=Ganapati',
      description: 'Traditional yet modern Ganapati decorations that bring vibrancy and festivity to your celebrations.',
      items: [
        { title: 'Ganapati Mandap', image: 'https://via.placeholder.com/200', price: 40000 },
        { title: 'Flower Garland', image: 'https://via.placeholder.com/200', price: 6000 },
        { title: 'Lighting Setup', image: 'https://via.placeholder.com/200', price: 25000 },
        { title: 'Puja Items', image: 'https://via.placeholder.com/200', price: 12000 },
        { title: 'Statue of Ganapati', image: 'https://via.placeholder.com/200', price: 15000 },
      ],
    },
    {
      name: 'Wedding Decoration',
      image: 'https://via.placeholder.com/150/FFC0CB/000000?text=Wedding',
      description: 'Create your dream wedding with elegant and luxurious decorations that turn your special day into magic.',
      items: [
        { title: 'Wedding Arch', image: 'https://via.placeholder.com/200', price: 80000 },
        { title: 'Flower Arrangements', image: 'https://via.placeholder.com/200', price: 60000 },
        { title: 'Table Decor', image: 'https://via.placeholder.com/200', price: 30000 },
        { title: 'Chair Covers', image: 'https://via.placeholder.com/200', price: 10000 },
        { title: 'Photo Booth Setup', image: 'https://via.placeholder.com/200', price: 20000 },
      ],
    },
    {
      name: 'Anniversary Celebration',
      image: 'https://via.placeholder.com/150/FF69B4/000000?text=Anniversary',
      description: 'Celebrate love and togetherness with anniversary decorations that make every milestone unforgettable.',
      items: [
        { title: 'Anniversary Balloons', image: 'https://via.placeholder.com/200', price: 5500 },
        { title: 'Romantic Lighting', image: 'https://via.placeholder.com/200', price: 12000 },
        { title: 'Floral Setup', image: 'https://via.placeholder.com/200', price: 15000 },
        { title: 'Love Letters Decor', image: 'https://via.placeholder.com/200', price: 7000 },
        { title: 'Cake Table Decor', image: 'https://via.placeholder.com/200', price: 8000 },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [value, setValue] = useState([MIN_PRICE, MAX_PRICE]);

  // Handle slider value change
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <h1 className="text-5xl text-center text-[#9c27b0] font-bold mb-8" style={{ fontFamily: 'Playfair Display' }}>Event Categories</h1>



      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center">
            <button
              className={`relative flex items-center justify-center text-lg w-32 h-32 md:w-36 md:h-36 rounded-full shadow-2xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl
                ${selectedCategory === category.name ? 'ring-2 ring-black' : 'ring-2 bg-indigo-500'}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 object-cover w-full h-full opacity-80 transition duration-300 ease-in-out"
              />
            </button>
            <span className="mt-2 text-center text-black text-lg font-semibold">{category.name}</span>
          </div>
        ))}
      </div>


    <div className='flex justify-center items-center'>
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
          color={'secondary'}
          step={100}
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
          <div key={item.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
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

      {/* Footer */}
      <footer className="mt-8">
        <p className="text-center text-white">© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CategoryPage;
