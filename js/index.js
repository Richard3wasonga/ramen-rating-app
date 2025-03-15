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
    img.addEventListener('click',handleClick)

   }

}
displayRamens()
const div3= document.querySelector('#image_change')
const div4 = document.createElement('div')
div3.append(div4)
div4.setAttribute('id','ramen-detail')
function handleClick(){
   const ramdetail = document.getElementById('ramen-detail')
   console.log(document.getElementById('ramen-rating'))

}
handleClick()