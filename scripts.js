// const cards = document.querySelectorAll('.card');  
// Array.prototype.forEach.call(cards, card => {  
//     let down, up, link = card.querySelector('h2 a');
//     card.style.cursor = 'pointer';  
//     card.onmousedown = () => down = +new Date();
//     card.onmouseup = () => {
//         up = +new Date();
//         if ((up - down) < 200) {
//             link.click();
//         }
//     }
// });

var cards = document.querySelectorAll('.card');
Array.prototype.forEach.call(cards, function(card) {
  var down, up, link = card.querySelector('h2 a');
  card.style.cursor = 'pointer';

   card.onmousedown = function() {
     down = +new Date();
   }

   card.onmousedown = function() {
     up = +new Date();
      if((up - down) < 200) {
        link.click();
      }
   }
})