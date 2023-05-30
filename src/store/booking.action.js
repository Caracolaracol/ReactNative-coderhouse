import { URL_API } from "../constants/database";


export const confirm_cart = (book, total) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: { ...items },
                    total,

                })
            })
            const result = await response.json()
            console.log(result)
            dispatch({
                type: confirm_cart,
                confirm: true
            })

        } catch (error) { 
            console.log(error)
        }
    }
}