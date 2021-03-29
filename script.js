 const carregarCards  = () => {
fetch("https://radioprotecaonapratica.com.br/wp-json/wp/v2/posts?_embed")
.then((response)=>{
   
    return response.json();
})
.then((data)=>{

   const areaCard = document.querySelector('ul');
   const arrayCard = data;
   const itemsCard =  arrayCard.map((itemCard)=>{
     //console.log(itemCard)
        return  `<li>
                    <div class='card-content'>
                   
                    <img src='${itemCard._embedded.author[0].avatar_urls = 'https://secure.gravatar.com/avatar/25a70ae2e16e3f9d3bfad271c0f7ed1e?s=96&d=mm&r=g'}' alt='imagem autor'/>
                    <h5 > ${itemCard._embedded.author[0].name}</h5>
                    <h2 class='title'>  ${itemCard.title.rendered}</h2>
                    <h3 class='excerpt'> ${itemCard.excerpt.rendered}</h3>
                    <a href='${itemCard.link}' target='_blanck' >Ver Post Completo</a>
                    <h4>  Data :${itemCard.date}</h4>
                    </div>
          
                 </li>`;
   })
   
   
  areaCard.innerHTML = itemsCard;

 
});

}

carregarCards();