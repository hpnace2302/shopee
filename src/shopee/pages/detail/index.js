import React, {useEffect} from 'react'
import 'antd/dist/antd.css';
import { Skeleton, message} from 'antd'
import HeaderShopee from '../../component/partials/header'
import FooterShopee from '../../component/partials/footer'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actions from './actions'
import { 
  getLoadingDetail, 
  getDataDetailProduct, 
  getMessNotFoundDataProduct
} from './reselect'
import { getDataProducts } from '../home/reselect'
import {createStructuredSelector} from 'reselect'
import { helper } from '../../helper/common'
import { useSelector } from 'react-redux'
import { addToCard } from '../cart/actions'
import { getErrorAddCart } from '../cart/reselect'
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom'
import '../../assets/detail.css'
import CardShopee from '../home/component/card'
import { Carousel } from 'react-carousel-minimal';

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

const DetailShopee = () => {
  const history = useHistory()
  
  const toCart = () => {
    history.push('/cart')
  }
  
  const { id } = useParams()
  const dispatch = useDispatch()

  const {loading, detailData, messageError, messCart, dataAllProduct } = useSelector(createStructuredSelector({
    loading: getLoadingDetail,
    detailData: getDataDetailProduct,
    messageError: getMessNotFoundDataProduct,
    messCart: getErrorAddCart,
    dataAllProduct: getDataProducts
  }))

  useEffect(() => {
    dispatch(actions.getDataProductById(id))
  },[dispatch,id])

  const addProductToCart = (dataAllProduct) => {
    dispatch(addToCard(dataAllProduct))

    if (!helper.isEmptyObject(messCart)) {
      message.error('Thêm sản phẩm vào giỏ hàng không thành công',3)
    } else {
      message.success('Thêm vào giỏ hàng thành công',3)
    }
  }

  if (loading) {
    <>
      <HeaderShopee/>
        <Skeleton active/>
      <FooterShopee/>
    </>
  }

  if (!helper.isEmptyObject(messageError)) {
    return (
      <>
        <HeaderShopee/>
          <h3>{messageError.mess}</h3>
        <FooterShopee/>
      </>
    )
  }
  const priceDiscount = detailData.price * (100 - detailData.discount) / 100 

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
    <HeaderShopee/>
      <div className="app_container">
        <div className="grid wide">
          <div style={{paddingBottom: '36px'}} className="row sm-gutter app__content">
            <div style={{cursor: 'pointer'}} className="content__item col c-7">
              {/* <Image src={detailData.image} alt="" className="content__item--img"/> */}
              <Carousel
                data={detailData.images}
                // time={2000}
                width="700px"
                height="400px"
                captionStyle={captionStyle}
                radius="10px"
                showNavBtn={true}
                // slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                // captionPosition="bottom"
                // automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="80px"
                style={{
                  textAlign: "center",
                  maxWidth: "700px",
                  maxHeight: "500px",
                  alignItems: "center",
                  margin: "40px auto",
                }}
              />
            </div>
            <div style={{width: '100%'}} className="content__item col c-5">
              <h2 className="content__item--heading"><div className="content__item--heading__icon">Mall</div><p>{detailData.name}</p></h2>
              <div className="content__item--parameter">
                <div style={{display: 'flex'}} className="detail-product-item__rating header__navbar-item--separate2">
                  <p>5</p>
                  <i className="detail-product-item__rating--gold fas fa-star"></i>
                  <i className="detail-product-item__rating--gold fas fa-star"></i>
                  <i className="detail-product-item__rating--gold fas fa-star"></i>
                  <i className="detail-product-item__rating--gold fas fa-star"></i>
                  <i className="detail-product-item__rating--gold fas fa-star"></i>
                </div>
                <div className="content__item--quantitysold">{detailData.quantitySold} đã bán</div>
              </div>
              <div className="content__item--price">
                <div className="detail-product-item-price">
                  <span className="detail-product-item__price-old"><NumberFormat value={detailData.price} displayType={'text'} thousandSeparator={true} />đ</span>
                  <span className="detail-product-item__price-new"><NumberFormat value={priceDiscount} displayType={'text'} thousandSeparator={true} />đ</span>
                </div>
                <div className="content__item--percent">{detailData.discount}% giảm</div>
              </div>
              {/* {console.log(detailData.cate_id)} */}
              {/* <div className="content__item--quantity">
                <p>Số lượng</p>
              </div> */}
              <div className="content__item--button">
                <div style={{cursor: 'pointer'}} className="content__item--add" onClick={() => addProductToCart(detailData)}>
                  <i className="header__cart-icon fas fa-shopping-cart"></i>
                  <p>Thêm vào giỏ hàng</p>
                </div>
                <div style={{cursor: 'pointer'}} onClick={() => toCart()} className="content__item--buy">Mua ngay</div>
              </div>
            </div>
          </div>
          <h1>Sản phẩm tương tự</h1>
          <div style={{display: 'flex', flexWrap: 'wrap', paddingBottom: '10px'}} className='row sm-gutter'>
            {dataAllProduct.map((item,key) => {
              if (item.cate_id === detailData.cate_id && item.id !== detailData.id) {
                return (
                  <div className="col l-2-4"
                    key={key}
                    onClick={scrollTop}
                  >
                    <CardShopee data={item} />
                  </div>
                )
              } else {
                return (
                  <div key={key} style={{display: 'none'}}>Lỗi</div>
                )
              }
            })}
          </div>
        </div>
      </div>
    <FooterShopee/>
    </>
  )
}

export default React.memo(DetailShopee)