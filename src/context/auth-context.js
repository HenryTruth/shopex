import React from 'react'

const authContext = React.createContext({
    cartProduct:[],
    quantity:0,
    totalPrice:0,
    sum:true
});

export default authContext;