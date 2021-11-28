// import axios from 'axios'
import jwt from 'jsonwebtoken'
const SERECT_KEY_TOKEN = 'reactJS-2105'

let dataProducts = {
  allProducts: [
    {
      id: 1,
      cate_id: 1,
      popular: 23,
      name: "Apple iPhone13 Pro Max",
      price: 37000000,
      quantitySold: 31,
      quantity: 2,
      discount: 20,
      image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-5.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-1.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-2.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-3.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-4.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-6.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-7.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-8.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-9.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-10.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-11.jpg',
        },
      ]
    },
    {
      id: 2,
      cate_id: 1,
      popular: 26,
      name: "Apple iPhone12 Pro Max",
      price: 30000000,
      quantitySold: 29,
      quantity: 100,
      discount: 15,
      image: 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-1.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-2.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-3.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-4.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-5.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-6.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-7.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-8.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-9.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-10.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-11.jpg',
        },
      ]
    },
    {
      id: 3,
      cate_id: 1,
      popular: 23,
      name: "Apple iPhone12 Pro",
      price: 27000000,
      quantitySold: 30,
      quantity: 100,
      discount: 12,
      image: 'https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-1.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-2.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-3.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-4.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-5.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-6.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-7.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-8.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-9.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-10.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/213032/Slider/vi-vn-iphone-12-pro-11.jpg',
        },
      ]
    },
    {
      id: 4,
      cate_id: 1,
      popular: 27,
      name: "Apple iPhone13",
      price: 26000000,
      quantitySold: 30,
      quantity: 100,
      discount: 12,
      image: 'https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-blue-2-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-1.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-2.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-3.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-4.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-5.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-6.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-7.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-8.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-9.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-10.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-11.jpg',
        },
      ]
    },
    {
      id: 5,
      cate_id: 2,
      popular: 20,
      name: "AirPods Pro",
      price: 7000000,
      quantitySold: 30,
      quantity: 100,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-1-org.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-2-org.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-3-org.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-4-org.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-5-org.jpg',
        },
      ]
    },
    {
      id: 6,
      cate_id: 2,
      popular: 21,
      name: "AirPods 2",
      price: 3000000,
      quantitySold: 30,
      quantity: 100,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-ava-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236025/airpods-2-wireless-charge-apple-mrxj2-1-org.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236025/airpods-2-wireless-charge-apple-mrxj2-2-org.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236025/airpods-2-wireless-charge-apple-mrxj2-3-org.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236025/airpods-2-wireless-charge-apple-mrxj2-4-org.jpg',
        },
      ]
    },
    {
      id: 7,
      cate_id: 2,
      popular: 25,
      name: "AirPods Max",
      price: 12000000,
      quantitySold: 30,
      quantity: 100,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-ava-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-ava-600x600.jpg',
        }
      ]
    },
    {
      id: 8,
      cate_id: 3,
      popular: 28,
      name: "Apple Watch S6",
      price: 10000000,
      quantitySold: 30,
      quantity: 100,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/apple-watch-s6-40mm-vien-nhom-day-cao-su-hong-thumb-1-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-221020-1219320.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-011020-1210140.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-250920-07425110.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-250920-07425211.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-250920-0742402.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-250920-0742413.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-250920-0742381.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/Slider/apple-watch-s6-40mm-vien-nhom-day-cao-su-250920-0742424.jpg',
        },
      ]
    },
    {
      id: 9,
      cate_id: 3,
      popular: 29,
      name: "Apple Watch S3",
      price: 5000000,
      quantitySold: 30,
      quantity: 100,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/7077/239158/apple-watch-s3-gps-38mm-den-thumb-1-600x600.jpg',
      images: [
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/215838/Slider/apple-watch-s3-lte-42mm-vien-nhom-day-cao-su-301020-1053580.jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/215838/Slider/vi-vn-apple-watch-s3-lte-42mm-vien-nhom-day-cao-su-(9).jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/215838/Slider/-apple-watch-s3-lte-42mm-vien-nhom-day-cao-su-(0101).jpg',
        },
        {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/215838/Slider/vi-vn-apple-watch-s3-lte-42mm-vien-nhom-day-cao-su-(8).jpg',
        },
      ]
    },
  ],
  iphone: [
    {
      id: 10,
      cate_id: 2,
      name: "Apple iPhone13 Pro Max",
      price: 37000000,
      discount: 20,
      image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg'
    },
    {
      id: 11,
      cate_id: 2,
      name: "Apple iPhone12 Pro Max",
      price: 30000000,
      discount: 15,
      image: 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg'
    },
    {
      id: 12,
      cate_id: 2,
      name: "Apple iPhone12 Pro",
      price: 27000000,
      discount: 12,
      image: 'https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg'
    },
    {
      id: 13,
      cate_id: 2,
      name: "Apple iPhone13",
      price: 26000000,
      discount: 12,
      image: 'https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-blue-2-600x600.jpg'
    },
  ],
  airpods: [
    {
      id: 14,
      cate_id: 3,
      name: "AirPods Pro",
      price: 7000000,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-600x600.jpg'
    },
    {
      id: 15,
      cate_id: 3,
      name: "AirPods 2",
      price: 3000000,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-ava-600x600.jpg'
    },
    {
      id: 16,
      cate_id: 3,
      name: "AirPods Max",
      price: 12000000,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-ava-600x600.jpg'
    },
  ],
  applewatch: [
    {
      id: 17,
      cate_id: 4,
      name: "Apple Watch S6",
      price: 10000000,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/7077/229044/apple-watch-s6-40mm-vien-nhom-day-cao-su-hong-thumb-1-600x600.jpg'
    },
    {
      id: 18,
      cate_id: 4,
      name: "Apple Watch S3",
      price: 5000000,
      discount: 10,
      image: 'https://cdn.tgdd.vn/Products/Images/7077/239158/apple-watch-s3-gps-38mm-den-thumb-1-600x600.jpg'
    },
  ]
}

const getAllDataProducts = async() => {
  return dataProducts
}

const checkLoginUser = (user, pass) => {
  let token = null;
  if (user === "admin" && pass === "123") {
    token = jwt.sign({
      id: 1,
      user: user,
      fullname: "Đăng Phong",
      email: "hpnace2302@gmail.com",
      phone: "012345",
      address: "Hà Nội"
    }, SERECT_KEY_TOKEN)
  }
  return token
}

const getDataProductById = async (id) => {
  // const image = `https://t3h-edu.herokuapp.com/api/learning/v1/https://t3h-edu.herokuapp.com/api/learning/v1/product/${id}`
  // const response = await axios.get(image)
  // const result = response.status === 200 ? response.data : {}
  // return result
  id = parseInt(id);
  let data = {};
  data = dataProducts.allProducts.find(item => item.id === id);
  // if(data === undefined){
  //   data = dataProducts.iphone.find(item => item.id === id);
  //   if(data === undefined){
  //     data = dataProducts.airpods.find(item => item.id === id);
  //     if (data === undefined) {
  //       data = dataProducts.airpapplewatchods.find(item => item.id === id)
  //     }
  //   }
  // }
  // console.log(data);
  return data;
}

export const api = {
  getAllDataProducts,
  checkLoginUser,
  getDataProductById
}