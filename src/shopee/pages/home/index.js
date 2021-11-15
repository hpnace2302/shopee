import React,{useState, useEffect} from 'react'
import ContentShopee from '../../component/partials/content'
import { createStructuredSelector } from 'reselect'
import LayoutShopee from '../../component/layout'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './actions'
import { getLoadingProduct, getMessageNotFoundProduct, getDataProductAllProduct } from './reselect'
import { helper } from '../../helper/common'
import { Skeleton } from 'antd'
import '../../assets/main.css'
import '../../assets/base.css'
import CardShopee from './component/card';

const HomeShopee = (props) => {
  const dispatch = useDispatch()
  const { data, loading, mess } = useSelector(createStructuredSelector({
    data: getDataProductAllProduct,
    loading: getLoadingProduct,
    mess: getMessageNotFoundProduct,
  }))

  // console.log(value)

  // const [product, setProduct] = useState(data)
  
  // const iphone = []

  // const filterIphone = () => {
  //   product.map((item) => {
  //     if (item.cate_id === 1) {
  //       iphone.push(item)
  //     }
  //     return iphone
  //   })
  //   setProduct(iphone)
  // }
  
  // filterIphone()

  // console.log(iphone);
  
  // console.log(product);
  useEffect(() => {
    dispatch(actions.getDataProducts())
  },[dispatch])

  const ShowComponent = () => {
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
        {data.map((item,key) => (
        <div className="col l-2-4"
          key={key}
        >
        <CardShopee data={item} />
      </div>
        ))}
      </>
    )
  }

  return (
    <>
      <ContentShopee>
        <ShowComponent/>
      </ContentShopee>
    </>
  )
}

export default React.memo(HomeShopee)