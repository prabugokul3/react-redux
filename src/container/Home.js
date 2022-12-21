import React from 'react'
import Header from '../components/Header'
import Product from '../container/Product'
import Dashboard from '../components/Dashboard'
import { Route,Routes } from 'react-router-dom'
import Cart from '../container/Cart'


export default function Home() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
        </div>
    )
}
