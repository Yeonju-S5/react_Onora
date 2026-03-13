import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './components/store';

import About from './components/About';
import Details from './components/Details';
import Cart from './components/Cart';
import Shop from './components/Shop';

import data from './components/data';

function ProductCard({ best, index, onAddCart }) {
  return (
    <div className="best_box">
      <Link to={`/details/${index}`} state={{ from: '/' }}>
        <div className="card_img">
          <img src={best.image} alt={best.title} />
        </div>
        <div className="card_info">
          <h4>{best.title}</h4>
          <p className="card_category">{best.desc}</p>
          <p className="card_price">{best.price}</p>
        </div>
      </Link>
      <button onClick={() => onAddCart(best)}>
        장바구니
      </button>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bests] = useState(data);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const picks = [bests[0], bests[4], bests[8], bests[11]];

  const handleAddCart = (best) => {
    dispatch(addItem({ id: best.id, title: best.title, price: best.price_two, count: 1 }));
    setShowModal(true);
  };

  return (
    <div className="App">

      {/* 모달 — App 최상단에서 관리 */}
      {showModal && (
        <div className="modal_overlay" onClick={() => setShowModal(false)}>
          <div className="modal_box" onClick={(e) => e.stopPropagation()}>
            <p>장바구니에 담았습니다!</p>
            <div className="modal_btns">
              <button className="modal_btn_outline" onClick={() => { setShowModal(false); navigate('/cart'); }}>장바구니 보기</button>
              <button className="modal_btn" onClick={() => setShowModal(false)}>계속 쇼핑</button>
            </div>
          </div>
        </div>
      )}

      <Navbar>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Onora</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')} active={location.pathname === '/'}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/shop')} active={location.pathname === '/shop'}>Shop</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')} active={location.pathname === '/about'}>About</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')} active={location.pathname === '/cart'}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>

        <Route path='/' element={
          <div className="main_page">

            <div className="main_visual">
              <img
                src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'}
                alt="메인 비주얼"
                className="main_visual_img"
              />
              <div className="main_visual_overlay">
                <p className="main_visual_sub">2026 Spring / Summer</p>
                <h1 className="main_visual_title">일상이 되는<br />한복의 아름다움</h1>
                <button className="main_visual_btn" onClick={() => navigate('/shop')}>
                  컬렉션 보기
                </button>
              </div>
            </div>

            <div className="strip_banner">
              <span>NEW COLLECTION 2026 &nbsp;·&nbsp; 생활한복 브랜드 Onora &nbsp;·&nbsp; 지금 가장 인기있는 한복 &nbsp;·&nbsp; FREE SHIPPING OVER 100,000원</span>
            </div>

            <div className="section_pick">
              <div className="section_header">
                <h2>인기 상품</h2>
                <Link to="/shop" className="section_more">전체보기 →</Link>
              </div>
              <div className="pick_grid">
                {picks.map((best, index) => {
                  const realIndex = bests.indexOf(best);
                  return <ProductCard key={index} best={best} index={realIndex} onAddCart={handleAddCart} />;
                })}
              </div>
            </div>

            <div className="ad_banners">
              <div className="ad_banner ad_banner_01">
                <img src={process.env.PUBLIC_URL + '/images/banner_01.jpg'} alt="광고 배너 1" />
              </div>
              <div className="ad_banner ad_banner_02">
                <img src={process.env.PUBLIC_URL + '/images/banner_02.jpg'} alt="광고 배너 2" />
              </div>
            </div>

            <div className="brand_banner">
              <div className="brand_banner_inner">
                <p className="brand_banner_sub">About Onora</p>
                <h3 className="brand_banner_title">전통의 멋을 일상으로</h3>
                <p className="brand_banner_desc">
                  Onora는 현대적인 감각으로 재해석한 생활한복을 선보입니다.<br />
                  편안함과 아름다움을 동시에 담은 옷을 만들고 있습니다.
                </p>
                <button className="brand_banner_btn" onClick={() => navigate('/about')}>
                  브랜드 스토리
                </button>
              </div>
            </div>

          </div>
        } />

        <Route path='/shop' element={<Shop bests={bests} onAddCart={handleAddCart} />} />
        <Route path='/about' element={<About />} />
        <Route path='/details/:id' element={<Details bests={bests} />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

    </div>
  );
}

export default App;