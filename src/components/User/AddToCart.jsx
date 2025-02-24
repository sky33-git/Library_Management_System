import React, { useState } from 'react'
import '../../assets/styles/Cart.css'
import { useNavigate } from 'react-router-dom'

const AddToCart = () => {

  let navigate = useNavigate()
  let [cartBooks, setCartBooks] = useState([])

  let fetchApi = async () => {
    let cartDetails = await (await fetch('http://localhost:4000/cart')).json()
    setCartBooks(cartDetails);
  }
  fetchApi()

  let readBook = (id)=>{
    navigate(`/userportal/readbooks/${id}`)
  }

  let deleteBooks = (id, title) => {

    let bool = window.confirm(`Do you want to remove ${title} book from your cart?`)

    if (bool) {
      fetch(`http://localhost:4000/cart/${id}`, { method: "DELETE" })
      alert(`${title} Book is deleted!`)
    } else {
      alert(`${title} Book is not deleted!`)
    }
  }

  return (
    <>
      <div className="cart">
        <h1>CART ITEMS</h1>
        <div className="cartItems">
          {
            cartBooks.map((ele) => {

              let { id, title, isbn, pageCount, thumbnailUrl, status, authors, categories } = ele

              return (
                <>
                  <div className="cartList">
                    <>
                      <div className="cartPic">

                        <img src={thumbnailUrl} alt="" />
                        <p>{title}</p>
                      </div>

                      <div className="cartDetails">

                        <h3>{title}</h3>
                        <table border={console} cellSpacing={2}>

                          <tr>
                            <td>Reg No</td>
                            <td>{isbn}</td>
                          </tr>

                          <tr>
                            <td>Author</td>
                            <td>{authors}</td>
                          </tr>

                          <tr>
                            <td>Status</td>
                            <td>{status}</td>
                          </tr>

                          <tr>
                            <td>Category</td>
                            <td>{categories}</td>
                          </tr>

                          <tr>
                            <td>Pages</td>
                            <td>{pageCount}</td>
                          </tr>

                        </table>

                        <div className="buttons">
                          <button onClick={()=> readBook(id)}>Read More</button>
                          <button onClick={() => deleteBooks(id, title)} className='remove'>Remove</button>

                        </div>
                      </div>
                    </>

                  </div>
                </>
              )

            })

          }

        </div>
      </div>
    </>
  )
}

export default AddToCart
