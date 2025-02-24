import React from 'react'
import '../../assets/styles/Addbooks.css'
import { useRef } from 'react'

const Addbooks = () => {

  let formDetails = useRef()

    let handleSubmit = (e)=>{
        e.preventDefault()

        let inputField = formDetails.current

        let newBook = {
            title: inputField[0].value,
            isbn : inputField[1].value,
            pageCount : inputField[2].value,
            thumbnailURL : inputField[3].value,
            shortDescription : inputField[4].value,
            longDescription : inputField[5].value,
            status : inputField[6].value,
            authors : [inputField[7].value],
            categories : [inputField[8].value]
        }

        fetch("http://localhost:4000/books", {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newBook)
        }
        )
    }
  return (
    <>
    <div className="addBook">
        <div className="formDiv">

            

        <form onSubmit={handleSubmit} ref={formDetails}>

            <label htmlFor="title">Name of the Book</label> <br />
            <input type="text" id='title' placeholder='Enter the book name!' required /> <br /> <br />

            <label htmlFor="isbn">Registration Number</label> <br /> 
            <input type="number" id="isbn" placeholder='Enter the registration number'required /> <br /> <br />
            
            <label htmlFor="pageCount">Number of Pages</label> <br />
            <input type="number" id="pageCount" placeholder='Page Count' required /> <br /> <br />

            <label htmlFor="thumbnailURL">BookProfile URL Link</label> <br />
            <input type="text" id="thumbnailURL" placeholder='Paste the link here!' /> <br /> <br />

            <label htmlFor="shortDescription">Description - short</label> <br />
            <textarea name="shortDescription" id="" cols="30" rows="3" placeholder='Describe shortly!' ></textarea> <br /> <br />

            <label htmlFor="longtDescription">Description - long</label> <br />
            <textarea name="longDescription" id="" cols="30" rows="6" placeholder='Describe briefly!' ></textarea> <br /> <br />

            <label htmlFor="status" placeholder='status'>Status</label> <br />
            <input type='text' name="" id="" /> <br /> <br />

            <label htmlFor="authors">Author Name</label> <br />
            <input type="text" placeholder='Enter the author name!' required /> <br /> <br />

            <label htmlFor="categories">Categories</label> <br />
            <input type="text" id="categories" required /> <br /> <br />

        <button type='submit'>Add Book to the Library!</button>


        </form>


        </div>


    </div>
    </>
  )
}

export default Addbooks
