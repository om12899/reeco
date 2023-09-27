import React from 'react'
import './OrderSummary.css'

function OrderSummary() {
  return (
    <div className='shadow py-2 bg-white'>
    <div className='container'>
        <p>Orders <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg> <a href="/" className='link-offset-2 link-dark'>32457ABC</a></p>
    </div>
    <div className='d-flex container justify-content-between'>
        <div><h3>32457ABC</h3></div>
        <div className='d-flex'>
        <button type="button" class="ButtonHollowGreen">Back</button>
        <div className='px-2'>          </div>
        <button type="button" class="ButtonSolidGreen">Approve Order</button>
        </div>  
    </div>
    </div>
  )
}

export default OrderSummary