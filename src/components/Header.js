import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className='p-3 bg-primary '>
            <div className='row'>
                <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex '>
                    <button className='btn btn-primary me-4 ' onClick={()=>navigate('/')}>Home</button>
                    {/* <input className='form-control' type="search" placeholder='search...'/> */}
                    <button className='btn btn-primary ms-4' onClick={()=>navigate('/cart')}>Cart</button>
                </div>
                
            </div>
        </div>
    )
}
