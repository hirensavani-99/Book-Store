//actions
export const addCart = (book) => {
    return {
        type: "ADDITEM",
        payload: book
    }


}
export const delCart = (book) => {
    return {
        type: "DELITEM",
        payload: book
    }
}

export const updateItemQuantity = (book, sign) => {
    return {
        type: "UpdateCart",
        payload: { book, sign }

    }
}
