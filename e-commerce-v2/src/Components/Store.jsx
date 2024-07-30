import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://e-commerce-v2-server.onrender.com/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const filteredProducts = selectedType
    ? products.filter((product) => product.type === selectedType)
    : products;

  const sortedProducts = selectedSort
    ? [...filteredProducts].sort((a, b) => {
        if (selectedSort === "Low to High") {
          return a.Price - b.Price;
        } else if (selectedSort === "High to Low") {
          return b.Price - a.Price;
        } else {
          return 0;
        }
      })
    : filteredProducts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="filterMenu">
        <select onChange={handleTypeChange} defaultValue="">
          <option value="">All Types</option>
          <option value="Rings">Rings</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Earrings">Earrings</option>
          <option value="Bracelets">Bracelets</option>
        </select>
        <select onChange={handleSortChange} defaultValue="">
          <option value="">Sort By</option>
          <option value="Low to High">Price: Low to High</option>
          <option value="High to Low">Price: High to Low</option>
        </select>
      </div>
      <div className="productList">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="productItem"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.Image_url}
              alt={product.Title}
              className="productImage"
            />
            <h2>{product.Title}</h2>
            <p>{product.Description}</p>
            <p>{product.Price}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="productDetail">
          <button
            onClick={() => setSelectedProduct(null)}
            className="closeButton"
          >
            &times;
          </button>
          <img
            src={selectedProduct.image_url}
            alt={selectedProduct.title}
            className="productDetailImage"
          />
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <p>
            Price: $
            {selectedProduct.price !== undefined && selectedProduct.price !== null
              ? selectedProduct.price.toFixed(2)
              : 'N/A'}
          </p>
        </div>
      )}
      <style jsx>{`
        .productList {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .productItem {
          border: 1px solid #ddd;
          padding: 10px;
          margin: 10px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.2s;
          flex: 1 1 calc(33.333% - 20px);
          box-sizing: border-box;
        }
        .productItem:hover {
          transform: scale(1.05);
        }
        .productImage {
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto 10px auto;
        }
        .productDetail {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 500px;
          text-align: center;
          z-index: 1000;
        }
        .productDetailImage {
          width: 100%;
          height: auto;
        }
        .closeButton {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }
        .filterMenu {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .productItem {
            flex: 1 1 calc(50% - 20px);
          }
          .filterMenu {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .productItem {
            flex: 1 1 100%;
          }
          .filterMenu {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductList;
