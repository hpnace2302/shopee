import React from 'react';
import HeaderShopee from './partials/header'
// import SideBarShopee from './partials/sidebar'
import FooterShopee from './partials/footer'
// import ContentShopee from './partials/content'

const LayoutShopee = (props) => {
  return (
    <>
      <HeaderShopee/>
      <div className="app_container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    {props.children}
                </div>
            </div>
        </div>
        <FooterShopee/>
    </>
  )
}

export default React.memo(LayoutShopee)