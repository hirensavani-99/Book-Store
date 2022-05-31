import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
const ViewBooks = () => {
    const { id } = useParams();
    const [book, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        //geting books from api 
        const getBooks = async () => {
            setLoading(true);
            const response = await axios.get(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${id}`);

            setProduct(await response.json());
            setLoading(false);
        }
        getBooks();
    }, []);
    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        <>
            <div className='col-md-6'>
                <img src={book.cover_image} alt={book.title} height="400px" width="400px" />
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {book.title}
                </h4>
            </div>
        </>
    }
    return (
        <div>
            <div className='container'>

                <div className='row'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>

    );
}
export default ViewBooks