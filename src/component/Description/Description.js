
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../../redux/action/index'


import classes from './Description.module.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import logo from '../../assets/logo.jpg'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ToastContainer, toast } from 'react-toastify';

export default function Description(props) {


    const [btnText, setBtnText] = useState('Add to cart')

    const addedToCart = (book) => {

        dispatch(addCart(book))
        toast.success(book.title + 'is in your cart now')
        setBtnText('Added')
    }

    const dispatch = useDispatch()
    const cart = useSelector(state => state.handleCart)
    console.log(cart);
    return (<>
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
        <Box sx={{ minWidth: 275 }} className={classes.root}>
            <Card sx={{ display: 'flex' }} className={classes.card}>

                <CardMedia
                    component="img"
                    sx={{ width: 250, height: 300 }}
                    image={props.book.cover_image !== '' ? props.book.cover_image : logo}
                    alt="Live from space album cover"
                />
                <CardContent sx={{ width: 500 }} >
                    <Typography gutterBottom variant="h4" component="div">
                        {props.book.title}
                        <Typography variant="h6" color="text.secondary">
                            <b>price</b> : <b>$ {props.book.pages / 10}</b>
                        </Typography>
                    </Typography>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={props.book.id / 2} precision={0.5} readOnly />
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        <b>Number of pages</b> : {props.book.pages}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Released on</b>  :{props.book.releaseDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>isbn</b> : {props.book.isbn}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Description</b> : {props.book.title} is a {props.book.releaseDate} book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.
                    </Typography>

                    <CardActions>
                        <button className={classes.button} onClick={() => props.HandleBook('')}>{<ArrowBackIcon />}back</button>
                        <button className={classes.button} onClick={() => addedToCart(props.book)}>{<AddShoppingCartIcon />}{btnText}</button>
                    </CardActions>
                </CardContent>

            </Card>

        </Box >
    </>
    )
}
