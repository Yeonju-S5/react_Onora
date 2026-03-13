import React from 'react';

export default function Location() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>오시는 길</h2>
      <p>📍 주소: 부산광역시 동구 중앙대로 22</p>
      <p>🚇 지하철: 1호선 부산역 7번 출구</p>
      <p>🕐 운영시간: 평일 09:00 ~ 18:00</p>
      <div style={{
        width: '100%',
        height: '300px',
        background: '#e9e9e9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        fontSize: '18px',
        color: '#888'
      }}>
        📍 지도 영역
      </div>
    </div>
  );
}