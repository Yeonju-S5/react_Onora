import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, addCount, subCount } from './store';

export default function Cart() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce((sum, item) => {
    const price = item.price || 0;
    return sum + price * item.count;
  }, 0);

  const handleSub = (item) => {
    if (item.count <= 1) {
      setShowModal(true);
    } else {
      dispatch(subCount(item.id));
    }
  };

  return (
    <div className="cart_container">
      <h1>{user.name} 님의 장바구니</h1>

      {showModal && (
        <div className="modal_overlay" onClick={() => setShowModal(false)}>
          <div className="modal_box" onClick={(e) => e.stopPropagation()}>
            <p>1개 아래로는 구매할 수 없습니다.</p>
            <button className="modal_btn" onClick={() => setShowModal(false)}>확인</button>
          </div>
        </div>
      )}

      {cart.length === 0 ? (
        <div className="cart_empty">
          <p>장바구니가 비어있습니다.</p>
        </div>
      ) : (
        <>
          <table className="cart_table">
            <thead>
              <tr>
                <th>상품 번호</th>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
                <th>수량 변경</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => {
                const price = item.price || 0;
                return (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{(price * item.count).toLocaleString()}원</td>
                    <td>{item.count}</td>
                    <td>
                      <div className="cart_actions">
                        <button className="btn_count" onClick={() => handleSub(item)}>−</button>
                        <span className="cart_count">{item.count}</span>
                        <button className="btn_count" onClick={() => dispatch(addCount(item.id))}>+</button>
                        <button className="btn_delete" onClick={() => dispatch(deleteItem(item.id))}>삭제</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart_total">
            총 합계 : {total.toLocaleString()}원
          </div>
        </>
      )}
    </div>
  );
}