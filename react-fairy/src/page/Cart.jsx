import React from 'react'


// 비회원 상태에서 찜목록이 창을 닫으면 날아가고 로그인을 하면 연결이 되게 ?

const Cart = () => {

    return (
        <div className='Cart'>
            <nav className='bucketNav'>
                <h1>찜목록</h1>
                <p>
                    HOME
                    <span>패션·의류·뷰티</span>
                    <strong>장바구니</strong>
                </p>
            </nav>
            <ul className='bucketBox'>
                <li className='bucketBox1'>
                    <form action="#">
                        <table>
                            <tr>
                                <th><input type="checkbox" name="all" /></th>
                                <th>상품명</th>
                                <th>배송비</th>
                                <th>판매가</th>
                            </tr>
                            <tr class="empty">
                                <td colspan="7">장바구니에 상품이 없습니다.</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="1" /></td>
                                <td><article>
                                    <a href="#">
                                        <img src="	https://via.placeholder.com/80x80" alt="1" />
                                    </a>
                                    <div>
                                        <h2><a href="#">상품명</a></h2>
                                        <p>상품설명</p>
                                    </div>
                                </article></td>
                                <td>무료배송</td>
                                <td>27,000</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="1" /></td>
                                <td><article>
                                    <a href="#">
                                        <img src="	https://via.placeholder.com/80x80" alt="1" />
                                    </a>
                                    <div>
                                        <h2><a href="#">상품명</a></h2>
                                        <p>상품설명</p>
                                    </div>
                                </article></td>
                                <td>무료배송</td>
                                <td>27,000</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="1" /></td>
                                <td><article>
                                    <a href="#">
                                        <img src="	https://via.placeholder.com/80x80" alt="1" />
                                    </a>
                                    <div>
                                        <h2><a href="#">상품명</a></h2>
                                        <p>상품설명</p>
                                    </div>
                                </article></td>
                                <td>무료배송</td>
                                <td>27,000</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="1" /></td>
                                <td><article>
                                    <a href="#">
                                        <img src="	https://via.placeholder.com/80x80" alt="1" />
                                    </a>
                                    <div>
                                        <h2><a href="#">상품명</a></h2>
                                        <p>상품설명</p>
                                    </div>
                                </article></td>
                                <td>무료배송</td>
                                <td>27,000</td>
                            </tr>
                        </table>
                        <input type="button" name="del" value="선택삭제" />
                    </form>
                </li>
                <li className='bucketBox2'>
                    <div class="total">
                        <h2>전체합계</h2>
                        <table>
                            <tr>
                                <td>상품수</td>

                            </tr>
                            <tr>
                                <td>상품금액</td>
                                <td>27,000</td>
                            </tr>
                            <tr>
                                <td>배송비</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>전체주문금액</td>
                                <td>26,000</td>
                            </tr>
                        </table>
                        <input type="submit" value="주문하기" />
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Cart
