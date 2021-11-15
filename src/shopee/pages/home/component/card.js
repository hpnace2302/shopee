import React from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';

const CardShopee = ({data}) => {
  const priceDiscount = data.price * (100 - data.discount) / 100 
  return (
    <Link to={`/product/${slugify(data.name)}/${data.id}`}>
      <div className="home-product-item">
          <img src={data.image} className="home-product-item__img" alt={data.name} />
          <h4 className="home-product-item__name">
              {data.name}
          </h4>
          <div className="home-product-item-price">
              <span className="home-product-item__price-old"><NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} /> đ</span>
              <span className="home-product-item__price-new"><NumberFormat value={priceDiscount} displayType={'text'} thousandSeparator={true} /> đ</span>
          </div>

          <div className="home-product-item__action">
              <span className="home-product-item__like home-product-item__like-liked">
                  <i className="home-product-item__like-icon-empty far fa-heart"></i>
                  <i className="home-product-item__like-icon-fill fas fa-heart"></i>
              </span>
              <div className="home-product-item__rating">
                  <i className="home-product-item__rating--gold fas fa-star"></i>
                  <i className="home-product-item__rating--gold fas fa-star"></i>
                  <i className="home-product-item__rating--gold fas fa-star"></i>
                  <i className="home-product-item__rating--gold fas fa-star"></i>
                  <i className="home-product-item__rating--gold fas fa-star"></i>
              </div>
              <span className="home-product-item__sold">{data.quantitySold} đã bán</span>
          </div>
          <div className="home-product-item__origin">
              <span className="home-product-item__origin-brand">Apple</span>
              <span className="home-product-item__origin-title">Hà Nội</span>
          </div>
          <div className="home-product-item__favourite">
              <i className="fas fa-check"></i>
              <span>Yêu thích</span>
          </div>
          <div className="home-product-item__sale-off">
              <span className="home-product-item__percent">{data.discount}%</span>
              <span className="home-product-item__sale-off-label">GIẢM</span>
          </div>
      </div>
    </Link>
  )
}

export default React.memo(CardShopee)