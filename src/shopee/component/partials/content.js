import React from 'react'
import SideBarShopee from './sidebar'
// import HomeComponent from '../../pages/home/index'

const ContentShopee = (props) => {
  const handleFilters = (filters, category) => {
    console.log(filters);
    // console.log(category);
  }

  return (
    <>
    <SideBarShopee handleFilters={filters => handleFilters(filters, "productType")} />
    <div className="col l-10 m-12 c-12">

        {/* <!-- Home Filter --> */}
        <div className="home-filter hide-on-mobile-tablet">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn btn-primary">Mới nhất</button>
            <button className="home-filter__btn btn">Bán chạy</button>

            <div style={{cursor: 'pointer'}} className="select-input">
                <span className="select-input__label">Giá</span>
                <i className="select-input__icon fas fa-chevron-down"></i>
                <ul className="select-input__list">
                    <li className="select-input__item">
                        <div className="select-input__link">Giá : Thấp đến cao</div>
                    </li>
                    <li className="select-input__item">
                        <div className="select-input__link">Giá : Cao đến thấp</div>
                    </li>
                </ul>
            </div>

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
            {/* <!-- grid - row - column --> */}
            <div className="row sm-gutter">
              {props.children}
              {/* {console.log(props.children)} */}
              {/* <HomeComponent/> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default React.memo(ContentShopee)