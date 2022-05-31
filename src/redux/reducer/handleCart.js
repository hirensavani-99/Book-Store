//reducer
const cart = [];
const handleCart = (state = cart, action) => {
    const book = action.payload;
    console.log(book);
    switch (action.type) {

        case "ADDITEM":

            //find if book is already exist  
            const exist = state.find((x) => x.id === book.id);
            if (exist) {
                return state.map((x) => x.id === book.id ? { ...x, qty: x.qty + 1 } : x);

            } else {                   // if book is not exist 
                const book = action.payload;
                return [
                    ...state,  // copy prv state 
                    {
                        ...book,   // add new state 
                        qty: 1,
                    }
                ]

            }

            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === book.id); // checking if exist 
            if (exist1.length !== 0) {
                return state.filter((x) => x.id !== exist1.id);  // if yes perfom operation
            }

        case "UpdateCart":

            if (book.sign === '+') {
                return state.map((x) => x.id === book.book.id ? { ...x, qty: x.qty + 1 } : x);  // + books in cart 
            } 
            if (book.sign === '-') {
                return state.map((x) => x.id === book.book.id && x.qty >= 2 ? { ...x, qty: x.qty - 1 } : x); // reduce books qty from cart 
            }
            break;

        default: return state;
    }
}
export default handleCart