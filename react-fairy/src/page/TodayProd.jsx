import React from 'react'

const TodayProd = ({photo, name, price }) => {
  return (
    <div className='ctgItem'>
      <h2>오늘의 물품상품</h2>
          <table>
            <tbody>
                <tr>
                  TodayProd를 Ctegories 양식을 그대로 베껴왔는데 
                  "img""name""price"가 안딸려와
                  import를 해야하는거야?
                    <td className='ctgImgBox' style={{backgroundImage:`url(${photo})`}}></td>
                </tr>
                <tr>
                    <td data-name="VIEW MORE" className='ctgbtn'><h6>{name}</h6><p>{price}</p></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TodayProd
{/* <ul>
    <li>
      <img src='https://picsum.photos/id/251/150/150' alt="준비중.." />
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/251/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
</ul> */}