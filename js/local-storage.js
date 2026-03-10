const addToLS = () =>{
    const number = Math.ceil(Math.random()*100) ;
    console.log(number) ;

    localStorage.setItem('Number' , number) ;
}


const setObjToLS = () =>{
    const customer = {name: 'jion' , roll: 'CO' , age: 24} ;
    const customerString = JSON.stringify(customer) ;
    localStorage.setItem('customer' , customerString)
}


const readObjFLS = () =>{
    const customerJson = localStorage.getItem('customer') ;
    const customer = JSON.parse(customerJson) ;
    console.log(customer) ;
}

const getNumberFromLS = () =>{
    const number = localStorage.getItem('number') ;
    console.log(number)
}

