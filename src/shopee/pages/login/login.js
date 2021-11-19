import React,{useState} from 'react'
import {Row, Col, Form , Input, Button } from 'antd'
import { api } from '../../services/api'
import { helper } from '../../helper/common'
import { useHistory } from "react-router-dom";
import HeaderShopee from '../../component/partials/header'
import FooterShopee from '../../component/partials/footer'

import 'antd/dist/antd.css';

const Login = () => {
  const [errorLogin, setErrorLogin] = useState(null)

  const history = useHistory()

  const onFinish = (values) => {
    const {username, password} = values 
    const token = api.checkLoginUser(username, password)
    if (token !== null) {
      setErrorLogin(null)
      // lưu token vào localStorage - cookie browser
      helper.saveTokenLocalStorage(token)
      // quay vào trang tìm kiếm
      history.push('/home')
    } else {
      setErrorLogin('Tài khoản hoặc mật khẩu của bạn không đúng!')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
      <HeaderShopee/>
        <Row style={{backgroundColor: 'white', height: '500px', marginTop: '30px', paddingTop: '50px'}}>
          <Col span={12} offset={6}>
            <h1 style={{textAlign: 'center'}}>Đăng Nhập</h1>
            <h3 style={{textAlign: 'center'}}>Tài khoản: admin - Mật khẩu: 123</h3>
            {errorLogin !== null && <p style={{color: 'red', textAlign: 'center'}}>{errorLogin}</p>}
            <Form
              style={{paddingLeft: '50px'}}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Tài khoản"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tài khoản!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Đăng Nhập
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      <FooterShopee/>
    </>
  )
}

export default React.memo(Login)