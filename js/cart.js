const handleAddProduct = ()=>{

    const productElm = document.getElementById('product') ;
    const quantityElm = document.getElementById('quantity') ;
    const product = productElm.value ;
    const quantity = parseInt(quantityElm.value) ;
    // console.log('product added' , product, quantity) ;

    displayProducts(product, quantity)
   addProductToCart(product, quantity)

    productElm.value = ' ' ;
    quantityElm.value = '' ;
}

const getCart = () =>{
    let cart = {} ;
    const cartJSON = localStorage.getItem('cart') ;
    if(cartJSON){
        cart = JSON.parse(cartJSON) ;
    }
    return cart ;
}

const addProductToCart = (product, quantity) =>{

    const cart = getCart() ;

    if(cart[product]){

        cart[product] =cart[product] + quantity ;
    }
    else{

        cart[product] = quantity ;
    }
    console.log('cart' ,cart) ;
    const cartJSON = JSON.stringify(cart) ;
    localStorage.setItem('cart', cartJSON) ;


}


const displayProducts = (product, quantity) =>{
    const li = document.createElement('li') ;
    li.innerText  = `${product} : ${quantity}` ;

    const productContainer =document.getElementById('product-container') ;
    productContainer.appendChild(li) ;
}


// display product from stored local storage 

const displayStoredProducts = ()=>{
    const cart = getCart() ;

    for (const product in cart) {
        const quantity = cart[product]
      
        console.log(product , quantity) ;
        displayProducts(product, quantity)
        
    }
}

displayStoredProducts()



// To save the object/array in the local storage 
// 1--convert the object to JSON using JSON.stringify 
// 2--localStorage.setItem()



// To get Object/array from the local storage 
// 1-get the item from local storage and it will be in JSON string
// 2-convert the JSON string to js object by using JSON.parse