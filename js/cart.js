const handleAddProduct = ()=>{

    const productElm = document.getElementById('product') ;
    const quantityElm = document.getElementById('quantity') ;
    const product = productElm.value ;
    const quantity = quantityElm.value ;
    // console.log('product added' , product, quantity) ;

    displayProducts(product, quantity)
   addProductToCart(product, quantity)

    productElm.value = ' ' ;
    quantityElm.value = '' ;
}

const getCart = () =>{
    const cart = {} ;
    return cart ;
}

const addProductToCart = (product, quantity) =>{

    const cart = getCart() ;
    cart[product] = quantity ;
    console.log('cart' ,cart)

}


const displayProducts = (product, quantity) =>{
    const li = document.createElement('li') ;
    li.innerText  = `${product} : ${quantity}` ;

    const productContainer =document.getElementById('product-container') ;
    productContainer.appendChild(li) ;
}