import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList'
import { addItem } from '../redux/reducer/cart';


export default function Product() {
    const params = useParams();
    const dispatch = useDispatch();
    // console.log(params)
    const item = ProductList.find((product)=>product.id === parseInt(params.id));
    const addToCart= ()=>{
        dispatch(addItem({...item,count:1}))
    }
  return (
    <div className='card m-2 cursor-pointer'>
            <div >
                <img src={item.thumbnail} height={150} width={180} alt={item.title} className='memo' />
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{item.title}</h5>
                <h6 className='mt-2'>Price:${item.price}</h6>
                <h6 className='mt-2'>Discount:{item.discountPercentage}%</h6>
                <h6 className='mt-2'>Rating:{item.rating}</h6>
                <div>
                    {item.stock > 0 ? <><button className='btn btn-primary '>Buy Now</button><button className='btn btn-primary ms-3 ' onClick={addToCart}>Add to Cart</button></>: <button className='btn btn-danger '>Out of stock</button>}
                    
                </div>
            </div>
        </div>
  )
}
