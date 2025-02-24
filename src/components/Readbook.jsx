import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./../assets/styles/Readbook.css";

const Readbook = () => {
  let params = useParams();
  let bookId = params.id;

  let [book, setBook] = useState({});

  useEffect(() => {
    fetchBook();
  }, [])

  let fetchBook = async () => {
    let bookData = await axios.get(`http://localhost:4000/books/${bookId}`);
    setBook(bookData.data);
  };

  let {
    id,
    title,
    isbn,
    pageCount,
    thumbnailUrl,
    status,
    authors,
    categories, shortDescription, longDescription
  } = book;

  // console.log(book);


  let [short, setShort] = useState(true)

  let shortDesc = () => {
    setShort(!short)
  }


  let [long, setLong] = useState(true)

  let longDesc = () => {
    setLong(!long)
  }

  let loc = useLocation()
  let pathBool = loc.pathname.startsWith("/adminportal")

  let navigate = useNavigate()
  let backButton = () => {

    if (pathBool) {
      navigate("/adminportal/books")
    } else {
      navigate("/userportal/books")
    }

  }

  return (
    <>
      <div className="readInfo">
        <div className="info">
          <div className="infoImg">
            <img src={thumbnailUrl} />
            <b>{title}</b>
          </div>

          <div className="infoDetails">

            <div className="divfirst">
              <h3>{title}</h3>
              <p>{authors}</p>

              <button className="desc" onClick={shortDesc}>
                <div>
                  Short Description
                </div>

                <div>
                  {short ? "" : <>{shortDescription} </>}
                </div>

              </button> <br /> <br />
              <button className="desc" onClick={longDesc} >

                <div>
                  Long Description
                </div>

                <div>
                  {long ? "" : <>{longDescription} </>}
                </div>
              </button>
            </div>

            <div className="infoend">

              <div className="status">
                <b>Status</b>
                <p>{status}</p>
              </div>

              <div className="categories">
                <b>Categories</b>
                <p>{categories}</p>
              </div>

              <div className="pagecount">
                <b>pagecount</b>
                <p>{pageCount}</p>
              </div>

            </div>

            <button className="backButton" onClick={backButton}>back</button>


          </div>
        </div>
      </div>
    </>
  );
};

export default Readbook;
