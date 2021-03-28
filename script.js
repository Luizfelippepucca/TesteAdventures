 const carregarCards  = () => {
fetch("https://radioprotecaonapratica.com.br/wp-json/wp/v2/posts?_embed")
.then((response)=>{
   
    return response.json();
})
.then((data)=>{

   const areaCard = document.querySelector('ul');
   const arrayCard = data;
   const itemsCard =  arrayCard.map((itemCard)=>{
    
  console.log(itemCard);
        return  `<li>
                    <div class='card-content'>
                    <h2> ${itemCard.title.rendered}</h2>
                    <h3> ${itemCard.excerpt.rendered}</h3>
                    <h4> ${itemCard.date}</h4>
                    <h5> ${itemCard._embedded.author[0].name}</h5>
                    <img src='${itemCard._embedded.author[0].avatar_urls = 'https://secure.gravatar.com/avatar/25a70ae2e16e3f9d3bfad271c0f7ed1e?s=96&d=mm&r=g'}' alt='img_author'/>
                    <button>Ver Post</button>
                    </div>
          
                 </li>`;
   })
   
  areaCard.innerHTML = itemsCard;
});

 
 

}

carregarCards();