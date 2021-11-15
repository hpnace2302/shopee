// import React from 'react';
// import { createStructuredSelector } from 'reselect';
// import { getDataProductIphone } from '../reselect';
// import { useSelector } from 'react-redux';
// import { Skeleton } from 'antd';
// import CardShopee from './card';
// import { helper } from '../../../helper/common';

// const IphoneProduct = () => {
//   const { data } = useSelector(createStructuredSelector({
//     data: getDataProductIphone
//   }));

//   if(helper.isEmptyObject(data)) {
//     return (<Skeleton active />)
//   }

//   return (
//     <>
//       {data.map((item,key) => (
//         <div className="col l-2-4"
//           key={key}
//         >
//         <CardShopee data={item} />
//       </div>
//       ))}
//     </>
//   )
// }
// export default React.memo(IphoneProduct);