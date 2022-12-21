import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
// import './App.css';



export default function ProductCart(props) {
    const navigate = useNavigate();
    return (
        <div className='card m-2 cursor-pointer' style={{width:300}} role="button" onClick={()=>navigate(`/product/${props.id}`)}>
            <div >
                <img src={props.thumbnail} height={150} width={180} alt={props.title} className='memo' />
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <h6 className='mt-2'>Price:${props.price}</h6>
                <h6 className='mt-2'>Discount:{props.discountPercentage}%</h6>
                <h6 className='mt-2'>Rating:{props.rating}</h6>
                <div>
                    {props.stock > 0 ? <button className='btn btn-primary '>Available</button>: <button className='btn btn-danger '>Out of stock</button>}
                    
                </div>
            </div>
        </div>
    )
}
