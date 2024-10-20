import React from 'react'

export default function Contact() {
  return (
    <div>
      <h2 className='title'>Contact Us</h2>

      <form>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Phone'/>
        <input type="text" placeholder='Email'/>
        <button>Submit</button>
      </form>
      
    </div>
  )
}
