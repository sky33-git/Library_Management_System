import { useState } from 'react'
import '../assets/styles/Books.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from "react";

const Books = () => {

  let [books, setbooks] = useState([])
  let [filteredData, setFilteredData] = useState([])
  let navigate = useNavigate()
  let [searchData, setSearchData] = useState("")

  useEffect(() => {

    let fetchApi = async () => {

      let fetchData = await fetch('http://localhost:4000/books')
      let resData = await fetchData.json()
      setbooks(resData)
      setFilteredData(resData)
    }
    fetchApi()
  }, [])

  let readBook = (id) => {
    if (pathBool) {
      navigate(`/adminportal/readbooks/${id}`)
    }
    else {
      navigate(`/userportal/readbooks/${id}`)
    }
  }

  let deleteBook = (id, title) => {

    let bool = window.confirm(`Do you want to delete ${title} book?`)

    if (bool) {
      fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" })
      alert(`${title} Book is deleted!`)
    } else {
      alert(`${title} Book is not deleted!`)
    }

  }

  let loc = useLocation()
  let pathBool = loc.pathname.startsWith("/adminportal")

  let cart = async (id, title) => {

    let bool = window.confirm(`Do you want to add ${title} book to your Cart?`)
    if (bool) {

      let cartItems = await (await axios.get(`http://localhost:4000/books/${id}`)).data
      // console.log(cartItems.data);

      alert(`${title} Book is added to your Cart!`)

      fetch("http://localhost:4000/cart", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItems)
      })
    } else {
      alert(`${title} Book is not added!`)
    }
  }

  const bigBook = () => {

    let data = books.filter((ele) => {
      return ele.pageCount > 300
    })

    setFilteredData(data)
  }

  const smallBook = () => {

    let data = books.filter((ele) => {
      return ele.pageCount < 300
    })
    setFilteredData(data)
  }

  return (
    <>
      <div className="books">

        <div className="header">
          <h1>Library Books!</h1>
        </div>

        <div className="filterButtons">

          <div className="searchbttn">

            <input type="text" value={searchData} onChange={(e) => {
              let data = e.target.value
              setSearchData(data)
            }} />

            <button onClick={() => {
              let newData = books.filter((ele) => {

                return ele.title.toLowerCase().includes(searchData.toLocaleLowerCase())
              })
              setFilteredData(newData);
            }}

            >Search</button>
          </div>

          <button className='bigBook' onClick={bigBook}>
            BigBook
          </button>
          <button className="smallBook" onClick={smallBook}>
            smallBook
          </button>
          <p>Total Books:{filteredData.length}</p>
        </div>
        <div className="container">
          {

            filteredData.map((ele) => {
              let { id, title, isbn, pageCount, thumbnailUrl, status, authors, categories } = ele

              return (
                <>
                  <div className="card">

                    {
                      (books.length > 0) ?
                        <>
                          <div className="bookPic">
                            <img src={thumbnailUrl} />
                            <b>{title}</b>
                            <p></p>

                          </div>
                          <div className="bookDetails">

                            <h3>{title}</h3>

                            <table border={console} cellSpacing={3} cellPadding={6} >
                              <tr>
                                <td>Reg No</td>
                                <td>{isbn}</td>
                              </tr>

                              <tr>
                                <td>Author </td>
                                <td>{authors}</td>
                              </tr>

                              <tr>
                                <td>Status</td>
                                <td>{status}</td>
                              </tr>

                              <tr>
                                <td>Categories</td>
                                <td>{categories}</td>
                              </tr>

                              <tr>
                                <td>PageCount</td>
                                <td>{pageCount}</td>
                              </tr>

                            </table>

                            <div className='buttonDiv'>
                              <button onClick={() => readBook(id)}>Read More</button>

                              {
                                pathBool ?
                                  <>
                                    <button className='delete' onClick={() => deleteBook(id, title)}>
                                      Delete
                                    </button>
                                  </>
                                  :
                                  <>
                                    <button onClick={() => { cart(id, title) }}>
                                      Add To Cart
                                    </button>
                                  </>

                              }


                            </div>

                          </div>

                        </>
                        :
                        <>
                          <h1 className='noData'>No Data Found!</h1>
                        </>
                    }
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

export default Books
