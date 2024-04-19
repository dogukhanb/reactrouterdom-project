import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-1">
      <img src={book.image} alt="" />
      <div>
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </div>
      <Link to={`/urun/${book.id}`} className="btn btn-primary w-100">
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
