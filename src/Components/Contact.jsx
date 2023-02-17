import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact us</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder='Name'/>
          </div>
          <div>
            <label>email</label>
            <input type="email" required placeholder='@xyz'/>
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder='message...'/>
          </div>
         <button type='submit'>Send</button>

        </form>

        
      </main>

    </div>
  )
}

export default Contact