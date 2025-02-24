import React, { useEffect, useState } from 'react'

const useFetch = (bookId) => {

    let [bookDetails, setBookDetails] = useState(null)
    console.log(bookDetails);
    

    useEffect(() => {
        fetchData()
    }, [])


    let fetchData = async () => {

        let data = await fetch(`http://localhost:4000/books/${bookId}`)
        let finalData = await data.json()
        setBookDetails(finalData)
        // console.log(finalData);
        
    }

    return bookDetails

}

useFetch(8)

export default useFetch;
