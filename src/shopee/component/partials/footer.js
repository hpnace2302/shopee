import React from 'react'
import qr from '../../assets/img/img_header/qr.jpg'
import appstore from '../../assets/img/img_header/appstore.png'
import gg from '../../assets/img/img_header/ggplay.png'

const FooterShopee = () => {
  return (
    <footer className="footer">
      <div className="grid wide footer__content">
          <div className="row">
              <div className="col l-2-4 m-4 c-6">
                  <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                  <ul className="footer__list">
                      <li className="footer-item">
                          <div className="footer-item__link">Trung Tâm Trợ Giúp</div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">Shoppe Mail</div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">Hướng dẫn mua hàng</div>
                      </li>
                  </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                  <h3 className="footer__heading">Giới thiệu</h3>
                  <ul className="footer__list">
                      <li className="footer-item">
                          <div className="footer-item__link">Giới thiệu</div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">Tuyển dụng</div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">Điều khoản</div>
                      </li>
                  </ul>
              </div>
              <div className="col l-2-4 m-4 c-6 mt-12-m">
                  <h3 className="footer__heading">Danh mục</h3>
                  <ul className="footer__list">
                      <li className="footer-item">
                          <div className="footer-item__link">Trang điểm mặt</div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">Trang điểm môi</div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">Trang điểm mắt</div>
                      </li>
                  </ul>
              </div>
              <div className="col l-2-4 m-4 c-6 mt-12-m mt-12-t">
                  <h3 className="footer__heading">Theo dõi</h3>
                  <ul className="footer__list">
                      <li className="footer-item">
                          <div className="footer-item__link">
                              <i className="footer-item__icon fab fa-facebook"></i>
                              Facebook
                          </div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">
                              <i className="footer-item__icon fab fa-instagram"></i>
                              Instagram
                          </div>
                      </li>
                      <li className="footer-item">
                          <div className="footer-item__link">
                              <i className="footer-item__icon fab fa-linkedin-in"></i>
                              Linkedin
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="col l-2-4 m-8 c-6 mt-12-m mt-12-t">
                  <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                  <div className="footer__download">
                      <img src={qr} alt="Download QR" className="footer__download-qr"/>
                      <div className="footer__download-apps">
                          <div className="footer__download-link">
                              <img src={gg} alt="Google Play" className="footer__download-app-img"/>
                          </div>
                          <div className="footer__download-link">
                              <img src={appstore} alt="App Store" className="mt-4 mt-4 footer__download-app-img"/>    
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="footer__bottom">
          <div className="grid wide">
              <p className="footer__text">2020 - Bản quyền thuộc về Công ty Shoppe</p>
          </div>
      </div>
    </footer>
  )
}

export default React.memo(FooterShopee)