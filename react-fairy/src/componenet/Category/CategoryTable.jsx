import React from 'react'

const CategoryTable = ( {name, price, photo} ) => {
    /*
        리액트에서 table 생성시
        tbody태그를 넣어주어야 개발자모드에서 에러가 나오지 않음
    */
    return (
   
    <div className='ctgItem'>
        <table>
            <tbody>
                <tr>
                    <td className='ctgImgBox' style={{backgroundImage:`url(${photo})`}}></td>
                </tr>
                <tr>
                    <td className='ctgCttBox'>{name}</td>
                </tr>
                <tr>
                    <td className='ctgPriBox'>{price}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    )
}

export default CategoryTable