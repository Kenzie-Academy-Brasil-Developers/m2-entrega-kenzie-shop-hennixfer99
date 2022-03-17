class app {

    static requisicao(){
  
        fetch('https://m2-kenzie-shop.herokuapp.com/products')
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            let info = data.products
            for(let i = 0; i < info.length; i++){
                this.template(info[i])
            }         
            
        })
  
    }
  
    static template(info){
        const bule = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${info.id}/Image.png`
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p2 = document.createElement('h4');
        const p = document.createElement('p');
        const section = document.getElementById("produtos")
        const compra = document.createElement("button")

        img.src = bule
        h3.innerText = info.productName
        if(info.promotionStatus === true){
           p2.innerText = `De R$${info.price.productPrice}`
           p.innerText = `Por R$${info.price.productPromotionPrice}`
        }else {
           p.innerText = `R$${info.price.productPrice}`
        }
         compra.innerText = "COMPRAR"

        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p2)
        li.appendChild(p)
        li.appendChild(compra)
        section.appendChild(li);
      
    }
}
app.requisicao()

