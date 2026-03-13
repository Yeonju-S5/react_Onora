import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './store';

import styled from 'styled-components';

const DetailWrap = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;
  gap: 48px;
`;

export default function Details({ bests }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const item = bests[id];

  // 어디서 왔는지 확인 — /shop에서 왔으면 /shop으로, 아니면 /로
  const from = location.state?.from || '/';

  if (!item) {
    return (
      <div className="detail_container">
        <p>상품을 찾을 수 없습니다.</p>
        <button className="btn_back" onClick={() => navigate('/')}>홈으로</button>
      </div>
    );
  }

  return (
    <DetailWrap>

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

      <div className="detail_img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="detail_info">
        <p className="detail_category">{item.desc}</p>
        <h2>{item.title}</h2>
        <p className="detail_price">{item.price}</p>
        <p className="detail_desc">
          고품질 소재로 제작된 제품입니다.<br />
          일상에서 편안하게 즐기는 한복의 아름다움을 담았습니다.
        </p>
        <button
          className="btn_cart"
          onClick={() => {
            dispatch(addItem({ id: item.id, title: item.title, price: item.price_two, count: 1 }));
            setShowModal(true);
          }}
        >
          장바구니 담기
        </button>
        <button className="btn_back" onClick={() => navigate(from)}>
          목록으로 돌아가기
        </button>
      </div>
    </DetailWrap>
  );
}