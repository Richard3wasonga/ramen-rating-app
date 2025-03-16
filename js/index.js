const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg", rating:6, comment:"Divine!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Sakura Sushi Bar", image: "images/gyukotsu.jpg", rating:8, comment:"So Succulent!" },
    { id: 5, name: "Naruto Ramen", restaurant: "Kuuraku", image: "images/naruto.jpg" , rating:5, comment:"Luscious!"},
    { id: 6, name: "Nirvana Ramen", restaurant: "Yakitori Grill", image: "images/nirvana.jpg", rating: 9, comment:"Buttery!" },
 ];
const div1 = document.querySelector('div')
const div2 = document.createElement('div')
div1.append(div2)
div2.setAttribute('id','ramen-menu' )

function displayRamens(){
   const div1= document.getElementById('ramen-menu')
   for(let i = 0;i < ramens.length;i++){
    let img = document.createElement('img')
    img.src = ramens[i].image
    img.alt = 'ramen dish'
    div1.appendChild(img)
    img.addEventListener('click',() => handleClick(ramens[i]))
    

   }
   handleClick(ramens[0])

}
displayRamens()

function handleClick(ramen){
  const phi= document.getElementById('detail-image')
  phi.src=ramen.image
  const dn= document.getElementById('detail-name')
  dn.textContent = ramen.name
  const dr=document.getElementById('detail-restaurant')
  dr.textContent = ramen.restaurant 
  const rr= document.getElementById('rating-display')
  rr.textContent= ramen.rating
  const rc= document.getElementById('comment-display')
  rc.textContent = ramen.comment
}

const formsub = document.getElementById('ramen_form')
   formsub.addEventListener('submit',addSubmitListener)

function addSubmitListener(r){
  
}
