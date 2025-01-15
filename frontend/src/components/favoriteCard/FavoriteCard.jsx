import React from "react";
import styles from "../card/Card.module.css";
import { useNavigate } from "react-router";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/slices/FavoriteSlice";

export default function FavoriteCard({ item }) {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  const findedItem = favorite.find((data) => data._id == item._id);
  const navigate = useNavigate();
  function handleFavorite(e) {
    e.stopPropagation();
    if (findedItem) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`details/${item._id}`)}
    >
      <div>
        <img src={`${item.image}`} alt="" className={styles.img} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>

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
  );
}
