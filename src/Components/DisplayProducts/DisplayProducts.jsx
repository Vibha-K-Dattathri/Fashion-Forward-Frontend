import React, { useEffect, useState } from 'react';
import './DisplayProducts.css';

const DisplayProducts = () => {
  // State to hold the fetched products and filters
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [shopNames, setShopNames] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedShopName, setSelectedShopName] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch data from backend (simulate with dummy data here)
  useEffect(() => {
    // Simulating fetching data from backend
    const fetchProducts = async () => {
      const productData = [
        { id: 1, img: 'path/to/image1.jpg', description: 'Cool T-shirt', color: 'Red', shopName: 'Shop A', gender: 'Male', category: 'Top' },
        { id: 2, img: 'path/to/image2.jpg', description: 'Stylish Pants', color: 'Blue', shopName: 'Shop B', gender: 'Female', category: 'Bottom' },
        // More products...
      ];

      const colorsList = ['Red', 'Blue', 'Green'];
      const shopNamesList = ['Shop A', 'Shop B', 'Shop C'];

      setProducts(productData);
      setFilteredProducts(productData);
      setColors(colorsList);
      setShopNames(shopNamesList);
    };

    fetchProducts();
  }, []);

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = products;

    if (selectedColor) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }
    if (selectedShopName) {
      filtered = filtered.filter((product) => product.shopName === selectedShopName);
    }
    if (selectedGender) {
      filtered = filtered.filter((product) => product.gender === selectedGender);
    }
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [selectedColor, selectedShopName, selectedGender, selectedCategory, products]);

  return (
    <div className="display-products-container">
      <h1>Products Available</h1>

      <div className="filters-container">
        <div className="filter">
          <label>Color</label>
          <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
            <option value="">All</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Shop Name</label>
          <select onChange={(e) => setSelectedShopName(e.target.value)} value={selectedShopName}>
            <option value="">All</option>
            {shopNames.map((shopName) => (
              <option key={shopName} value={shopName}>
                {shopName}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Gender</label>
          <select onChange={(e) => setSelectedGender(e.target.value)} value={selectedGender}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="filter">
          <label>Category</label>
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="">All</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
          </select>
        </div>
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.description} className="product-image" />
            <div className="product-info">
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
