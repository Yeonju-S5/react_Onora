import React from 'react';
import { Link } from 'react-router-dom';

export default function Shop({ bests, onAddCart }) {
  return (
    <div className="wrap">
      <h2>전체 상품</h2>
      <div className="best_product">
        {bests.map((best, index) => (
          <div key={index} className="best_box">
            <Link to={`/details/${index}`} state={{ from: '/shop' }}>
              <div className="card_img">
                <img src={best.image} alt={best.title} />
              </div>
              <div className="card_info">
                <h4>{best.title}</h4>
                <p className="card_category">{best.desc}</p>
                <p className="card_price">{best.price}</p>
              </div>
            </Link>
            <button onClick={() => onAddCart(best)}>
              장바구니
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}