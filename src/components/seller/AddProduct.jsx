import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../../RtkQuery/slices/seller/AddProductApiSlice';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const titleRef = useRef();

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth);
  const sellerId = user.user.id;

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleSelect = (e) => setCategoryId(e.target.value);

  const [addProduct, { isSuccess }] = useAddProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    /* eslint-disable object-curly-newline */
    if (user.user.role === 'seller') {
      if (title && price && categoryId && image) {
        const productInfo = {
          title,
          price,
          category_id: categoryId,
          image,
          seller_id: sellerId,
        };
        addProduct(productInfo);
        if (isSuccess) {
          navigate('/');
        }
      }
    }
  };
  /* eslint-enable object-curly-newline */

  useEffect(() => {
    if (isSuccess) {
      // toast.success('Product added successfully');
      navigate('/');
    }
  }, [isSuccess, navigate]);

  /* eslint-disable jsx-a11y/label-has-associated-control */
  const content = (
    <section className="signup__container">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white border shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-12">
          <p
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 login__text"
          >
            Create your product
          </p>
          <div className="mt-4">
            <label className="text-sm font-medium leading-none login__text">
              Product Title
              <input
                aria-label="enter product title"
                type="text"
                id="title"
                ref={titleRef}
                value={title}
                onChange={handleTitleInput}
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
                required
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium leading-none login__text">
              Product Price
              <input
                aria-label="enter product title"
                type="number"
                id="price"
                value={price}
                onChange={handlePriceInput}
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
                required
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium leading-none login__text">
              Select Product Category
              <select
                onChange={handleSelect}
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
              >
                <option value={1}>Electronics</option>
                <option value={2}>Computers</option>
                <option value={3}>Personal Care</option>
                <option value={4}>Fashions</option>
                <option value={5}>Software</option>
                <option value={6}>Toys & Games</option>
                <option value={7}>Home & Kitchen</option>
                <option value={8}>Beauty and Care</option>
                <option value={9}>Miscellaneous</option>
              </select>
            </label>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium leading-none login__text">
              Product Image
              <input
                aria-label="enter product title"
                type="text"
                id="image"
                value={image}
                onChange={handleImageInput}
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
                required
              />
            </label>
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              type="button"
              aria-label="create my account"
              className="signup__button"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return content;
};
/* eslint-enable jsx-a11y/label-has-associated-control */

export default AddProduct;
