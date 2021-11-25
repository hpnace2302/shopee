import React from 'react'
import { helper } from '../../helper/common'

const SideBarShopee = (props) => {

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

  const filterProducts = (id) => {
    return id
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
                        <div 
                          onClick={() => filterProducts(item.id)} 
                          className="category-item__link"
                        >
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