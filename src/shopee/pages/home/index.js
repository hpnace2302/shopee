import React,{useState, useEffect, useCallback} from 'react'
// import ContentShopee from '../../component/partials/content'
import { createStructuredSelector } from 'reselect'
// import LayoutShopee from '../../component/layout'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './actions'
import { getLoadingProduct, getMessageNotFoundProduct, getDataProductAllProduct } from './reselect'
import { helper } from '../../helper/common'
import { Skeleton } from 'antd'
import '../../assets/main.css'
import '../../assets/base.css'
import CardShopee from './component/card';
// import SideBarShopee from '../../component/partials/sidebar'
import CheckBox from '../../component/partials/checkbox'

const HomeShopee = (props) => {
  const productType = [
    {
      id: 1,
      title: 'iPhone'
    },
    {
      id: 2,
      title: 'Air Pods'
    },
    {
      id: 3,
      title: 'Apple Watch'
    }
  ]

  const initFilter = {
    category: [],
}
  const dispatch = useDispatch()
  const { data, loading, mess } = useSelector(createStructuredSelector({
    data: getDataProductAllProduct,
    loading: getLoadingProduct,
    mess: getMessageNotFoundProduct,
  }))
  useEffect(() => {
    dispatch(actions.getDataProducts())
  },[dispatch])

  // const productList = productData.getAllProducts()

  const options = [
    {
      value: '',
      title: 'Giá'
    },
    {
      value: 'lowestprice',
      title: 'Giá : Thấp đến cao'
    },
    {
      value: 'highestprice',
      title: 'Giá : Cao đến thấp'
    },
  ]

  const [products, setProducts] = useState(data)

  const [filter, setFilter] = useState(initFilter)

  // const [option, setOption] = useState(options)

   const filterSelect = (type, checked, item) => {
      if (checked) {
          switch(type) {
              case "CATEGORY":
                  setFilter({...filter, category: [...filter.category, item.id]})
                  break
              default:
          }
      } else {
          switch(type) {
              case "CATEGORY":
                  const newCategory = filter.category.filter(e => e !== item.id)
                  setFilter({...filter, category: newCategory})
                  break
              default:
          }
      }
  }

  // const clearFilter = () => setFilter(initFilter)

  const updateProducts = useCallback(
      () => {
          let temp = data

          if (filter.category.length > 0) {
              temp = temp.filter(e => filter.category.includes(e.cate_id))
          }

          // setOption(option)
          setProducts(temp)
      },
      [filter, data],
  )

  useEffect(() => {
      updateProducts()
  }, [updateProducts])

  const HomeShopee = ({dataProducts}) => {
    if (loading) {
      return (<Skeleton active/>)
    } 
    if(!helper.isEmptyObject(mess)) {
      return (
        <h3>{mess.message}</h3>
      )
    }
    return (
      <>
        {dataProducts.map((item,key) => {
          return (
              <div className="col l-2-4"
                key={key}
              >
              <CardShopee data={item} />
              </div>
          )
        })}
      </>
    )
  }

  const sortProducts = (items, sort)  => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) => {
        return (
          sort === "lowestprice"
          ? a.price > b.price
          ? 1
          : -1
          : a.price < b.price
          ? 1
          : -1
        )
      }
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    setProducts(products)
  };

  const SideBarShopee = () => {
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
                        <div className="category-item__link">
                          <CheckBox 
                            label={item.title}
                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                            checked={filter.category.includes(item.id)}
                          />
                        </div>
                    </li>
                  </React.Fragment>
                )))}
            </ul>
        </nav>
    </div>
    )
  }

  return (
    <>
    <SideBarShopee/>
    <div className="col l-10 m-12 c-12">

        {/* <!-- Home Filter --> */}
        <div className="home-filter hide-on-mobile-tablet">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn btn-primary">Mới nhất</button>
            <button className="home-filter__btn btn">Bán chạy</button>
            <select
              className="select-input"
              onChange={(event) => {
                sortProducts(
                  products,
                  event.target.value
                );
              }}
            >
              {
                options.map((item, index) => (
                  <option key={index} value={item.value}>{item.title}</option>
                )) 
              }
            </select>

            <div className="home-filter__page">
                <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/1
                </span>

                <div className="home-filter__page-control">
                    <div className="home-filter_page-btn home-filter_page-btn--disabled">
                        <i className="home-filter__page-icon fas fa-chevron-left"></i>
                    </div>
                    <div className="home-filter_page-btn ">
                        <i className="home-filter__page-icon fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>

        <nav className="mobile-category">
            <ul className="mobile-category__list">
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li><li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
                <li className="mobile-category__item">
                    <div className="mobile-category__link">Dụng cụ và Thiết bị tiện ích</div>
                </li>
            </ul>
        </nav>

        {/* <!-- Home Product --> */}
        <div className="home-product">
            <div className="row sm-gutter">
            <HomeShopee dataProducts={products}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(HomeShopee)