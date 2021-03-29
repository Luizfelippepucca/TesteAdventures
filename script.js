 const carregarCards  = () => {
fetch("https://radioprotecaonapratica.com.br/wp-json/wp/v2/posts?_embed")
.then((response)=>{
   
    return response.json();
})
.then((data)=>{

   const areaCard = document.querySelector('ul');
   const arrayCard = data;
   const itemsCard =  arrayCard.map((itemCard)=>{
 
     //console.log(itemCard._embedded['wp:featuredmedia']['0'].media_details.sizes);
        return  `<li>
                    <div class='card-content'>
                    <img src='${itemCard._embedded['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url}' alt='imagem autor'/>
                    <h5 > ${itemCard._embedded.author[0].name}</h5>
                    <h2 class='title'>  ${itemCard.title.rendered}</h2>
                    <h3 class='excerpt'> ${itemCard.excerpt.rendered}</h3>
                    <a href='${itemCard.link}' target='_blanck' >Ver Post Completo</a>
                    <h4> Data:${itemCard.date}</h4>
                    </div>
          
                 </li>`;
   })
   
   
  areaCard.innerHTML = itemsCard;

 
});

}

carregarCards();