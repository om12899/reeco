import React, { useState, useEffect } from 'react';
import './OrderSummary.css';
import AvocadoImage from '../media/avocado.jpg';
import jsonData from '../data.json';

function ItemList() {
  const [itemStates, setItemStates] = useState(jsonData.items.map(() => ({ tickColor: 'black', crossColor: 'black' })));
  const [confirm, setConfirm] = useState(false);

  const updateTickAndCrossColorsGreen = (index) => {
    const updatedStates = [...itemStates];
    const currentState = updatedStates[index];
    currentState.tickColor = currentState.tickColor === 'black' ? 'green' : 'black';
    currentState.crossColor = 'black';
    setItemStates(updatedStates);
  }

  const updateTickAndCrossColorsRed = (index) => {
    const updatedStates = [...itemStates];
    const currentState = updatedStates[index];
    currentState.tickColor = 'black';
    currentState.crossColor = 'red';
    setItemStates(updatedStates);
    setConfirm(true);
  }

  return (
    <div className='container bg-white rounded border border-light-subtle p-4'>
      <div className='container d-flex justify-content-between'>
        {/* ... (Search input and buttons) */}
      </div>
      <div>
        <table className="table">
          <thead className='py-1'>
            <tr className='border border-light-subtle rounded-4'>
              <th scope="col"></th>
              <th scope="col" style={{ width: '20%' }}>Product Name</th>
              <th scope="col" style={{ width: '15%' }}>Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col" style={{ width: '35%' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.items.map((item, index) => (
              <tr key={item.id}>
                <th scope="row"><img width='45px' src={AvocadoImage} alt="" /></th>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td><strong>{item.quantity}</strong></td>
                <td>{item.total}</td>
                <td className='bg-light d-flex justify-content-between align-middle'>
                  <div className='d-flex justify-content-between align-middle'>
                    <div></div>
                    <div className=''>
                      <svg onClick={() => updateTickAndCrossColorsGreen(index)} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill={itemStates[index].tickColor} className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <svg onClick={() => updateTickAndCrossColorsRed(index)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill={itemStates[index].crossColor} className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                      <a className='link link-underline-light link-dark link-underline-opacity-0 link-offset-2' href="/">Edit</a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {confirm && (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setConfirm(false)}></button>
              </div>
              <div className="modal-body">
                {/* ... (Modal content) */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setConfirm(false)}>Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemList;
