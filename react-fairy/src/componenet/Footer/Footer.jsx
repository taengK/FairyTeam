import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
        <ul>
            <li>
              <div className='footerLeftBox'>
                <h3>OUR OFFICE INFO</h3>
                <p><i class="fa-solid fa-location-dot icon1"></i>sangmu Road, Sangmu 1205</p>
                <p><i class="fa-solid fa-phone"></i>+82 62 123 1234</p>
                <p><i class="fa-solid fa-envelope"></i>hermes@gmail.com</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.848286190469!2d126.87518697627273!3d35.11049906111389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718b03033bfeef%3A0x9148e0a92fb527ab!2z7Iqk66eI7Yq47J247J6s6rCc67Cc7JuQ!5e0!3m2!1sko!2skr!4v1688455483973!5m2!1sko!2skr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </li>
            <li>
              <h3>DROP A MESSAGE</h3>
                <form>
                  <input type="text" name="name" required placeholder="*NAME*"
                  class="input1" />
                  <input type="text" name="email" placeholder="E-mail"
                  class="input1" />
                  <input type="text" name="subject" required placeholder="subject"
                  class="input2" />
                  <textarea name="message" required placeholder="Message"
                  class="input2"></textarea>
                  <input type="submit" value="S E N D" class="input3"/>
              </form>
            </li>
        </ul>
    </div>
  )
}

export default Footer