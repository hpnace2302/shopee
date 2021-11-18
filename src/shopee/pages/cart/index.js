import React from 'react'
// import LayoutShopping from '../../components/layout'
import { Row, Col, Image, InputNumber, Button} from 'antd'
import { getDataItemsCart, getTotalMoneyCart } from './reselect'
import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'
import NumberFormat from 'react-number-format';
import { changeQtyCart, deleteItemProductCart } from './actions'
import { useDispatch } from 'react-redux'
import HeaderShopee from '../../component/partials/header'
import FooterShopee from '../../component/partials/footer'
import 'antd/dist/antd.css';
import { getDataProducts } from '../home/reselect'
import CardShopee from '../home/component/card'

const CartComponent = () => {
  const { totalMoney, itemsCart, data} = useSelector(createStructuredSelector({
    totalMoney: getTotalMoneyCart,
    itemsCart: getDataItemsCart,
    data: getDataProducts
  }))

  const dispatch = useDispatch()

  const changeItemCart = (id, val) => {
    dispatch(changeQtyCart(id, val))
  }

  const removeItemCartById = (id) => {
    dispatch(deleteItemProductCart(id))
  }

  if (itemsCart.length === 0 || itemsCart === undefined) {
    return (
      <>
        <HeaderShopee/>
          <div className="grid wide">
            <Row>
              <Col span={24} style={{height: '500px'}}>
                <h1 style={{margin: '200px', textAlign: 'center', height: '100%'}}>Chưa có sản phẩm trong giỏ hàng</h1>
              </Col>
            </Row>
            <h1>Có thể bạn cũng thích</h1>
            <div style={{display: 'flex', flexWrap: 'wrap', paddingBottom: '10px'}} className='row sm-gutter'>
              {data.allProducts.map((item,key) => {
                  return (
                    <div className="col l-2-4"
                        key={key}
                      >
                      <CardShopee data={item} />
                    </div>
                  )
              })}
            </div>
          </div>
        <FooterShopee/>
      </>
    )
  }

  return (
    <>
      <HeaderShopee/>
        <div className="grid wide">
          <Col span={24}>
          <h1 style={{margin: '20px', textAlign: 'center'}}>Thông tin giỏ hàng</h1>
          {itemsCart.map((item, index) => (
            <Row
              key={index}
              style={{
                margin: '5px 0px', 
                border: '1px solid #ccc',
                padding: '10px'
              }}
            >
              <Col span={4}>
                <Image src={item.image}/>
              </Col>
              <Col 
                span={20}
                style={{paddingLeft: '20px'}}
              >
                <h4>Tên sản phẩm: {item.name}</h4>
                <p>Giá: <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> VNĐ</p>
                <p>Số tiền: <NumberFormat value={parseInt(item.price)*parseInt(item.qty)} displayType={'text'} thousandSeparator={true} /> VNĐ</p>
                <br/>
                Số lượng <InputNumber
                  min={1} 
                  max={item.quantity} 
                  value={item.qty}
                  onChange={ val => changeItemCart(item.id, val)}
                />
                <Button 
                  type="dashed"
                  onClick={() => removeItemCartById(item.id)}
                >Xoá</Button>
              </Col>
            </Row>
          ))}
            <div style={{clear: 'both'}}></div>
            <h3 style={{textAlign: 'right'}}>
            Tổng tiền: <NumberFormat value={totalMoney} displayType={'text'} thousandSeparator={true} /> VNĐ
            </h3>
            {/* <br/>
            <Button style={{textAlign: 'right'}}type="primary">Thanh toán</Button> */}
            {/* <div style={{clear: 'both'}}></div> */}
          </Col>
        </div>
      <FooterShopee/>
    </>
  )
}

export default React.memo(CartComponent)