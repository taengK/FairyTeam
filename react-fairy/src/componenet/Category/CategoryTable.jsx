import React from 'react'

const CategoryTable = ( {name, price, photo} ) => {
    /*
        리액트에서 table 생성시
        tbody태그를 넣어주어야 개발자모드에서 에러가 나오지 않음
    */
  return (
    <div className='item'>
        <img src={photo}></img>
        <table>
            <tbody>
            <tr>
                <td>{name}</td>
            </tr>
            {/* <tr>
                <td>나이</td>
                <td>{2023-age}</td>
            </tr> */}
            <tr>
                <td>{price}</td>
            </tr>
            {/* <tr>
                <td>소속팀</td>
                <td>{team}</td>
            </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default CategoryTable