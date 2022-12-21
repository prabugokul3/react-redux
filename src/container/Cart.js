import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../redux/reducer/cart';
import { modifyItem } from '../redux/reducer/cart';


import ProductListItem from '../components/ProductListItem'

export default function Cart() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch()

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  }

  const removeItemCart = (item) => {
    dispatch(removeItem(item))
  }
  return (
    <>
      {list.map((item) => <ProductListItem {...item} key={item.id}
        incrementItem={() => incrementItem(item)}
        // decrementItem= {()=>}
        removeItem={() => removeItemCart(item)} />)}
    </>
  )
}
