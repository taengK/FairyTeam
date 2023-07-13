import React from 'react'

const CategoryTable = ( {name, price, photo, barc} ) => {
    /*
        리액트에서 table 생성시
        tbody태그를 넣어주어야 개발자모드에서 에러가 나오지 않음
    */
  return (
    <div className='Ctgitem'>
        <a href = "/Detaill/${barc}">
        <img src={photo}></img>
        <table>
            <tbody>
            <tr>
                <td>{name}</td>
            </tr>
            <tr>
                <td>{price}</td>
            </tr>
            </tbody>
        </table>
        </a>
    </div>
  )
}

export default CategoryTable