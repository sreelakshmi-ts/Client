import React from 'react'
import style from './MedicineView.module.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const MedicineView = () => {
        const[medicine,setMedicine]=useState(null);
        const { id } = useParams();
        const getMedicine =()=>{
            axios.get(`http://localhost:5000/Medicine/${id}`)
            .then(res => setMedicine(res.data.medicine))
            .catch(console.error);
        };
     useEffect(() =>{
       getMedicine();
     },[id]);
     if (!medicine) return <p>Loading...</p>;
         const addToCart = () =>{
            axios.post("http://localhost:5000/AddToCart",{
                customerId: sessionStorage.getItem("customerId"),
                medicineId: medicine._id,
                quantity: 1
            })
            .then(res=>{
                alert("Added to cart");
            })
            .catch(console.error);

            };
  return (
   <div className={style.ProductDetailPage}>
  <div className={style.ProductCard}>

    {/* LEFT: IMAGE */}
    <div className={style.ImageSection}>
      <img
        src={`http://localhost:5000${medicine.medicinePhoto}`}
        alt="Medicine"
        className={style.ProductImage}
      />
    </div>

    {/* RIGHT: DETAILS */}
    <div className={style.DetailsSection}>
      <h2 className={style.ProductName}>{medicine.medicineName}</h2>

      <div className={style.Meta}>
        <span className={style.Brand}>{medicine.brandId ?.brandName || "Unknown"}</span>
        <span className={style.Category}>{medicine.categoryId ?.categoryName || "Unknown"}</span>
        <span className={style.Category}>{medicine.typeId ?.typeName || "Unknown"}</span>
      </div>

      <div className={style.Price}>
       {medicine.medicinePrice} <span>/ strip</span>
      </div>

      <p className={style.Description}>
            {medicine.medicineDistription}
      </p>

      <div className={style.Actions}>
        <button className={style.AddToCart} onClick={addToCart}>Add to Cart</button>
        <button className={style.BuyNow}>Buy Now</button>
      </div>
    </div>

  </div>
</div>




  )
}

export default MedicineView