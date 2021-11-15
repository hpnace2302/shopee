import React, {useState, useEffect} from 'react'
import { Collapse, Checkbox } from 'antd'

// const { Panel } = Collapse
import { getLoadingProduct, getMessageNotFoundProduct, getDataProducts } from '../../pages/home/reselect'
import { createStructuredSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../pages/home/actions'

const SideBarShopee = (props) => {
  const { data, loading, mess } = useSelector(createStructuredSelector({
    data: getDataProducts,
    loading: getLoadingProduct,
    mess: getMessageNotFoundProduct,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getDataProducts())
  },[dispatch])

  const [products, setProduct] = useState(data)

  console.log(products);
  
  const product = []

  const filterIphone = (id) => {
    products.map((item) => {
      if (item.cate_id === id) {
        product.push(item)
      }
      console.log('product:', product);
      return product
    })
  }

  const productType = [
    {
      id: 1,
      title: 'Tất cả sản phẩm'
    },
    {
      id: 2,
      title: 'iPhone'
    },
    {
      id: 3,
      title: 'Air Pods'
    },
    {
      id: 4,
      title: 'Apple Watch'
    }
  ]

  const [checked, setChecked] = useState([])
  const handleClick = (value) => {

    // console.log(value);

    // const currentIndex = checked.indexOf(value)
    const newChecked = value

    // if (currentIndex === -1) {
    //   newChecked.push(value)
    // } else {
    //   newChecked.splice(currentIndex, 1)
    // }
    // console.log(props);

    setChecked(newChecked)

    props.handleFilters(newChecked)
  }

  

  return (
    <div className="col l-2 m-0 c-0">
        <div className="brand">
            <div className="brand__container">
              <img src="https://cf.shopee.vn/file/62160f74aa5cffa160b2062658d2be75_tn" alt="" className="brand__container--avatar"/>
              <div className="brand__container--name">Apple Store</div>
              <div className="brand__container--status">Đang hoạt động</div>
            </div>
          </div>
        <nav className="category">
            <h3 className="category__heading">
                Danh mục
            </h3>

            <ul className="category-list">
                {productType.map((item => (
                  <React.Fragment key={item.id}>
                    <li className="category-item">
                        <div onClick={() => filterIphone(item.id)} className="category-item__link">
                          {item.title}
                        </div>
                    </li>
                  </React.Fragment>
                )))}
            </ul>
        </nav>
    </div>
  )
}

export default React.memo(SideBarShopee)