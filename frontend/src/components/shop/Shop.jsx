import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import styles from "./Shop.module.css";
import Card from "../card/Card";
import axios from "axios";

export default function Shop() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id,e) {
    e.stopPropagation();
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setData([...data].filter((card) => card._id != id));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <>
      <Header>Featured Products</Header>
      <div className={styles.container}>
        <div className={`grid grid-cols-1 sm:grid-cols-4 gap-10`}>
          {data.map((item) => (
            <Card item={item} key={item._id} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}
