import React from 'react'
// import { useDispatch } from 'react-redux';
// import { removeItem } from '../redux/reducer/cart';
// import { useParams } from 'react-router-dom'
// import { ProductList } from '../data/ProductList'

export default function ProductListItem(props) {
    
    return (
        <div className='d-flex m-4 justify-content-center'>
           
                <img src={props.thumbnail} height={150} width={180} alt={props.title} className='memo me-5' />
                <h5 className='mt-2 me-5 mt-4'>{props.title}</h5>
                <h6 className='mt-2 me-5 mt-4'>Price:${props.price}</h6>
                <h6 className='mt-2 me-5 mt-4'>Discount:{props.discountPercentage}%</h6>
                <h6 className='mt-2 me-5 mt-4'>Rating:{props.rating}</h6>
                <div className='mt-2 me-5 mt-4'>
                     {/* <button className='btn btn-primary me-4' onClick={props.incrementItem}>+</button>
                     <span className='ms-3'>{props.count}</span>
                     <button className='btn btn-primary ms-4 ' onClick={props.decrementItem}>-</button> */}
                     <button className='btn btn-danger ms-4' onClick={props.removeItem}>Remove</button>

                </div>
        </div>
    )
}
