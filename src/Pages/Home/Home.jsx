// import React, { useState, useEffect } from 'react';
// import Product from '../../component/Products_list/Product';
// import Header from '../../component/Header/Header';
// import "./Home.css";

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [one_category, setOneCategory] = useState('All'); // Initial value changed
//   const [selected_prod, setSelected_prod] = useState([]);
//   const [sorting_val, setShorting_val] = useState("");
//   useEffect(() => {
//     getData();
//     getData2();
//   }, []);

//   const getData = () => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((data) => setData(data.products));
//   };

//   const getData2 = () => {
//     fetch('https://dummyjson.com/products/categories')
//       .then((res) => res.json())
//       .then((categories) => setCategories(categories));
//   };

//   // fiteration funtion.

//   useEffect(() => {
//     filtermethod();
//   },[one_category, data]);

//   const filtermethod = () => {
//     const value =
//       one_category === 'All'
//         ? data
//         : data.filter((x) => x.category === one_category);

//     setSelected_prod(value);
//   };

//   // sorting_products

//   useEffect(() => {
//     sort_products();
//   }, [sorting_val,selected_prod])

//   const sort_products = () => {
//     if (sorting_val === 'LTH') {
//       const sortedProducts = [...selected_prod].sort((a, b) => a.price - b.price);
//       setSelected_prod(sortedProducts);
//     } else if (sorting_val === 'HTL') {
//       const sortedProducts = [...selected_prod].sort((a, b) => b.price - a.price);
//       setSelected_prod(sortedProducts);
//     } else if (sorting_val === 'A-Z') {
//       const sortedProducts = [...selected_prod].sort((a, b) =>
//         a.title.localeCompare(b.title)
//       );
//       setSelected_prod(sortedProducts);
//     } else if (sorting_val === 'Z-A') {
//       const sortedProducts = [...selected_prod].sort((a, b) =>
//         b.title.localeCompare(a.title)
//       );
//       setSelected_prod(sortedProducts)
//     }
//     else if (sorting_val === '0-500') {
//       // const sortedProducts = [...selected_prod].sort((a) =>a.price>0 && a.price<=500); 
//       const sortedProducts = selected_prod.filter((product) => product.price >= 0 && product.price <= 500);
//       setSelected_prod(sortedProducts)
//     } else if (sorting_val === '500-100') {
//       const sortedProducts = selected_prod.filter((product) => product.price > 500 && product.price <= 1000);
//       setSelected_prod(sortedProducts)
//     } else if (sorting_val === '1000-1500') {
//       const sortedProducts = selected_prod.filter((product) => product.price > 1000 && product.price <= 1500);
//       setSelected_prod(sortedProducts)
//     } else if (sorting_val === '>1500') {
//       const sortedProducts = selected_prod.filter((product) => product.price > 1500 && product.price <= 2000);
//       setSelected_prod(sortedProducts)
//     }
//     else {
//       const sortedProducts = [...selected_prod];
//       setSelected_prod(sort_products);
//     }
//   };

//   return (
//     <div className="Home container-fluid">
//       <div className="row">
//         <div className="col-md-3 categories">
//           <div className="prodcut_Categories">
//             <div className="operations">
//               <div className="filter_products">
//                 <div className="categories_wise selecters">
//                   <select
//                     className="form-select"
//                     value={one_category}
//                     aria-label="Default select example"
//                     onChange={(e) => {
//                       setOneCategory(e.target.value);
//                     }}
//                   >
//                     <option value="All">Category</option>
//                     {categories.slice(0, 5).map((Element, index) => (
//                       <option key={index}>{Element}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="price_wise  selecters">
//                   <select name="Catagories"
//                     className='form-select'
//                     value={sorting_val}
//                     onChange={(e) => setShorting_val(e.target.value)}
//                   >
//                     <option value='Normal'>sort <span className='bg_lightblue'>Price-Range</span></option>
//                     <option value='0-500'>0-500</option>
//                     <option value='500-1000'>500-1000</option>
//                     <option value='1000-1500'>1000-1500</option>
//                     <option value='>1500'>more than 1500</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="order_wise">
//                 <div className="price_wise_ordering  selecters">
//                   <select name="Catagories"
//                     className='form-select'
//                     value={sorting_val}
//                     onChange={(e) => setShorting_val(e.target.value)}>
//                     <option value='Normal' >sort <span className='bg_lightblue'> Name</span></option>
//                     <option value='A-Z'>Alphabatical order(A-Z)</option>
//                     <option value='Z-A'>Reordered_Name(z-a)</option>
//                   </select>
//                 </div>
//                 <div className="name_wise_odering selecters">
//                   <select
//                     name="Catagories"
//                     className='form-select'
//                     value={sorting_val}
//                     onChange={(e) => setShorting_val(e.target.value)}>
//                     <option value='Normal'>sort <span className='bg_lightblue'> price</span> </option>
//                     <option value='LTH'>Low to high</option>
//                     <option value='HTL'>high to low</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-9">
//           <h1 className='title'>{one_category}</h1>
//           <Product data={selected_prod} /> {/* Pass filtered data */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import Product from '../../component/Products_list/Product';
import Header from '../../component/Header/Header';
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [one_category, setOneCategory] = useState('All');
  const [selected_prod, setSelected_prod] = useState([]);
  const [sorting_val, setShorting_val] = useState("");

  useEffect(() => {
    getData();
    getData2();
  }, []);

  useEffect(() => {
    filtermethod();
  }, [one_category, data]);

  useEffect(() => {
    sort_products();
  }, [sorting_val, selected_prod]);

  const getData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setData(data.products));
  };

  const getData2 = () => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  };

  const filtermethod = () => {
    const value =
      one_category === 'All'
        ? data
        : data.filter((x) => x.category === one_category);

    setSelected_prod(value);
  };

  const sort_products = () => {
    if (sorting_val === 'LTH') {
      const sortedProducts = [...selected_prod].sort((a, b) => a.price - b.price);
      setSelected_prod(sortedProducts);
    } else if (sorting_val === 'HTL') {
      const sortedProducts = [...selected_prod].sort((a, b) => b.price - a.price);
      setSelected_prod(sortedProducts);
    } else if (sorting_val === 'A-Z') {
      const sortedProducts = [...selected_prod].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setSelected_prod(sortedProducts);
    } else if (sorting_val === 'Z-A') {
      const sortedProducts = [...selected_prod].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setSelected_prod(sortedProducts)
    } else if (sorting_val === '0-500') {
      const sortedProducts = selected_prod.filter((product) => product.price >= 0 && product.price <= 500);
      setSelected_prod(sortedProducts)
    } else if (sorting_val === '500-100') {
      const sortedProducts = selected_prod.filter((product) => product.price > 500 && product.price <= 1000);
      setSelected_prod(sortedProducts)
    } else if (sorting_val === '1000-1500') {
      const sortedProducts = selected_prod.filter((product) => product.price > 1000 && product.price <= 1500);
      setSelected_prod(sortedProducts)
    } else if (sorting_val === '>1500') {
      const sortedProducts = selected_prod.filter((product) => product.price > 1500 && product.price <= 2000);
      setSelected_prod(sortedProducts)
    } else {
      const sortedProducts = [...selected_prod];
      setSelected_prod(sortedProducts);
    }
  };

  return (
    <div className="Home container-fluid">
      <div className="row">
        <div className="col-md-3 categories">
          <div className="prodcut_Categories">
            <div className="operations">
              <div className="filter_products">
                <div className="categories_wise selecters">
                  <select
                    className="form-select"
                    value={one_category}
                    aria-label="Default select example"
                    onChange={(e) => {
                      setOneCategory(e.target.value);
                    }}
                  >
                    <option value="All">Category</option>
                    {categories.slice(0, 5).map((Element, index) => (
                      <option key={index}>{Element}</option>
                    ))}
                  </select>
                </div>
                <div className="price_wise  selecters">
                  <select
                    name="Catagories"
                    className='form-select'
                    value={sorting_val}
                    onChange={(e) => setShorting_val(e.target.value)}
                  >
                    <option value='Normal'>sort <span className='bg_lightblue'>Price-Range</span></option>
                    <option value='0-500'>0-500</option>
                    <option value='500-1000'>500-1000</option>
                    <option value='1000-1500'>1000-1500</option>
                    <option value='>1500'>more than 1500</option>
                  </select>
                </div>
              </div>
              <div className="order_wise">
                <div className="price_wise_ordering  selecters">
                  <select
                    name="Catagories"
                    className='form-select'
                    value={sorting_val}
                    onChange={(e) => setShorting_val(e.target.value)}>
                    <option value='Normal' >sort <span className='bg_lightblue'> Name</span></option>
                    <option value='A-Z'>Alphabatical order(A-Z)</option>
                    <option value='Z-A'>Reordered_Name(z-a)</option>
                  </select>
                </div>
                <div className="name_wise_odering selecters">
                  <select
                    name="Catagories"
                    className='form-select'
                    value={sorting_val}
                    onChange={(e) => setShorting_val(e.target.value)}>
                    <option value='Normal'>sort <span className='bg_lightblue'> price</span> </option>
                    <option value='LTH'>Low to high</option>
                    <option value='HTL'>high to low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className='title'>{one_category}</h1>
          <Product data={selected_prod} />
        </div>
      </div>
    </div>
  );
};

export default Home;
