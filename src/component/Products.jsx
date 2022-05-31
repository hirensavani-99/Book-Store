

import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Description from './Description/Description';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
import logo from '../assets/logo.jpg'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './styles.css'


const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const [loading, setLoading] = useState([false]);
    const [desc, setDesc] = useState([])
    

    let componentMounted = true;

    const searchInputRef = useRef("")  // for search bar 

    useEffect(() => {
        //geting books from api 

        //getting all the books from api 
        const getBooks = async () => {
            setLoading(true);
            const response = await axios.get('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books');
            if (componentMounted) {
                setData(await response.data);
                setFilter(await response.data)
                setLoading(false);

            }
            return () => {
                componentMounted = false;
            }
        }
        getBooks();
    }, []);




  
    //providing state childe component..
    const showDescription = (book) => {
        setDesc(book)
    }

    //search bar 
    const SearchBooks = (e) => {
        e.preventDefault()
        let filteredBooks = []
        const searchedInput = searchInputRef.current.value.toLowerCase(); // convert value in lowercase 
        if (searchedInput.trim() !== '') {  // check value is not empty 
            let searchLength = searchedInput.length;   // geting the length of searched text 


            for (let book of data) {    // mapping book 

                for (let word in book.title) {  // mapping word 

                    if (book.title[word].toLowerCase() === searchedInput[0]) {  // try to match first character of searched word 
                        let subString = book.title.substring(word, parseInt(word) + parseInt(searchLength)) // take out equal length of string 

                        if (subString.toLowerCase() === searchedInput) {
                            filteredBooks.push(book)
                        }
                    }
                }

            }
            if (filteredBooks.length !== 0) {
                toast.success("succesfully found book for you")
                setFilter(filteredBooks)
            } else {
                toast.info("Book is unavailable !")
                setFilter(data)
            }

        } else {
            toast.warning("unable to serve you right now! search with valid symbols")
            setFilter(data)
        }



    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">

                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>

                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={searchInputRef} />
                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={SearchBooks} type="submit">Search</button>

                </div>
                {filter.map((book) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={book.id}>
                                    <img src={book.cover_image !== '' ? book.cover_image : logo} className="card-img-top" alt={book.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title-top ">{book.title.substring(0, 12)}</h5>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={(book.id / 2) + 0.8} precision={0.5} readOnly />
                                        </Stack>
                                        <p className="card-text-top lead fw-bold">${book.pages / 10}</p>
                                        <button name="Add to cart" className="button" onClick={() => showDescription(book)} >Find more</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {desc.length === 0 ? <div className="container my-3">
                <div className="row">
                    <div className="col-12 ">
                        <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <p>Loading</p> : <ShowProducts />}
                </div>

            </div> : <Description book={desc} HandleBook={showDescription} />}
        </div>
    );
}
export default Products;
