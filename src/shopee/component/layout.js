import React from 'react';
// import HeaderShopee from './partials/header'
// import FooterShopee from './partials/footer'
// import SideBarShopee from './partials/sidebar'
// import ContentShopee from './partials/content'

const LayoutShopee = (props) => {
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // }
  return (
    <>
      {/* <HeaderShopee change={handleChange}/> */}
      <div className="app_container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    {props.children}
                </div>
            </div>
        </div>
        {/* <FooterShopee/> */}
    </>
  )
}

export default React.memo(LayoutShopee)