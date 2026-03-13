import React from 'react';

export default function About() {
  return (
    <div className="about_wrap">
      <h1>About</h1>

      <div className="about_content">
        <section className="about_section">
          <h2>브랜드 소개</h2>
          <p>
            Onora는 현대적인 감각으로 재해석한 생활한복을 선보이는 브랜드입니다.<br />
            일상에서 편안하게 즐기는 한복의 아름다움을 담아, 누구나 자연스럽게 입을 수 있는 옷을 만들고 있습니다.
          </p>
        </section>

        <section className="about_section">
          <h2>이용 안내</h2>
          <table className="about_table">
            <tbody>
              <tr><th>배송</th><td>주문 후 2~3일 이내 배송 (주말·공휴일 제외)</td></tr>
              <tr><th>교환 / 반품</th><td>수령 후 7일 이내 가능</td></tr>
              <tr><th>고객센터</th><td>평일 09:00 ~ 18:00</td></tr>
              <tr><th>결제 수단</th><td>신용카드, 계좌이체, 카카오페이</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about_section">
          <h2>오시는 길</h2>
          <p>📍 주소: 서울특별시 종로구 인사동길 12</p>
          <p>🚇 지하철: 3호선 안국역 6번 출구 도보 5분</p>
          <p>🕐 운영시간: 평일 10:00 ~ 19:00 / 주말 11:00 ~ 18:00</p>
          <p>📞 전화: 02-123-4567</p>
        </section>
      </div>
    </div>
  );
}