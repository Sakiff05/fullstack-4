import React, { useEffect, useState } from "react";
import styles from "../components/card/Card.module.css";
import { useParams } from "react-router";
import axios from "axios";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/FavoriteSlice";
import { Helmet } from "react-helmet-async";

export default function Details() {
  const { id } = useParams("id");
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  const findedItem = favorite.find((data) => data._id == item._id);

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:5000/products/${id}`);
      setItem(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleFavorite(e) {
    e.stopPropagation();
    if (findedItem) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.detailContainer}>
      <Helmet>
        <title>{`Details | ${item.title}`}</title>
        <meta name="description" content="Details page" />
      </Helmet>
      <div className={styles.detailCard}>
        <div>
          <img src={`${item.image}`} alt="" className={styles.img} />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            provident vitae explicabo eaque. Excepturi distinctio, possimus
            fugit veniam, sit exercitationem eius et eveniet eligendi alias
            illum non molestias error culpa. Porro earum voluptatem dolorem
            mollitia maiores vero cum, voluptate dolore, ullam, assumenda
            expedita ut corporis perspiciatis eligendi nobis labore autem!
          </p>
          <p className={styles.price}>${item.price}</p>
          <div className={styles.buttons}>
            <button
              className={styles.cartButton}
              onClick={(e) => handleFavorite(e)}
            >
              {findedItem ? (
                <MdFavorite className={styles.favoriteIcon} />
              ) : (
                <MdFavoriteBorder className={styles.favoriteIcon} />
              )}
            </button>
            <button className={styles.viewButton}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
