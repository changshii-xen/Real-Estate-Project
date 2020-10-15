// Defines globals
const lists = {
    province: "Western Cape,KwaZulu Natal,Johannesburg".split(","),
    propertyT:   "Apartment,Cottage,Penthouse".split(","),
    rooms:  "1 Room,2 Rooms,3 Rooms".split(","),
    prices:  "210 000.00,290 000.00,330 000.00,450 000.00,510 000.00,530 000.00,630 000.00,690 000.00,720 000.00,750 000.00,776 000.00,789 000.00,850 000.00,1 200 000.00".split(","),
    priceRange: "R200K-R490K,R500K-R690K,R700K-R790K,R800K+".split(","),
    bathrooms:  "1 bathroom,2 bathrooms,3 bathrooms".split(","),
    img: `../../Public/images/CapeTown-a.jpg,.../../Public/images/CapeTown-p.jpg,../../Public/images/CapeTown-c.jpg,../../Public/images/CapeTown-a2.jpg,.../../Public/images/CapeTown-p2.jpg,
    ../../Public/images/CapeTown-c2.jpg,../../Public/images/CapeTown-a3.jpg,.../../Public/images/CapeTown-p3.jpg,../../Public/images/CapeTown-c3.jpg,../../Public/images/KwaZulu-a.jpg,
    ../../Public/images/KwaZulu-p.jpg,../../Public/images/KwaZulu-c.jpg,../../Public/images/KwaZulu-a2.jpg,
    ../../Public/images/KZN-p2.jpg,../../Public/images/KZN-c2.jpg,../../Public/images/KZN-a3.jpg,
    ../../Public/images/KZN-p3.jpg,../../Public/images/KZN-c3.jpg,../../Public/images/JHB-a.jpg,../../Public/images/JHB-p.jpg,../../Public/images/JHB-c.jpg,
    ../../Public/images/JHB-a2.jpg,../../Public/images/JHB-p2.jpg,../../Public/images/JHB-c2.jpg,../../Public/images/JHB-a3.jpg,../../Public/images/JHB-p3.jpg,../../Public/images/JHB-c3.jpg,`.split(","),
  };
  let data = [
      { id: 101, province: 'Western Cape',  prices: '450 000.00',  propertyT: 'Apartment',  rooms: '1 Room',  priceRange:  'R200K-R490K', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-a.jpg' },
      { id: 102, province: 'KwaZulu Natal',  prices: '330 000.00',  propertyT: 'Cottage',  rooms: '2 Rooms',  priceRange:'R200K-R490K', bathrooms : '3 bathrooms', img : '../../Public/images/KwaZulu-c.jpg' },
      { id: 103, province: 'Johannesburg',  prices: '850 000.00',  propertyT: 'Penthouse',  rooms: '3 Rooms',  priceRange: 'R800K+', bathrooms : '1 bathroom', img : '../../Public/images/JHB-p.jpg'},
      { id: 104, province: 'KwaZulu Natal',  prices: '510 000.00',  propertyT: 'Apartment',  rooms: '1 Room',  priceRange: 'R500k-R690K', bathrooms : '2 bathrooms', img : '../../Public/images/KwaZulu-a.jpg' },
      { id: 105, province: 'Johannesburg',  prices: '290 000.00',  propertyT: 'Cottage',  rooms: '2 Rooms',  priceRange:'R200K-R490K', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-c.jpg'},
      { id: 106, province: 'Western Cape',  prices: '530 000.00',  propertyT: 'Penthouse',  rooms: '3 Rooms',  priceRange: 'R500k-R690K', bathrooms : '1 bathroom', img : '../../Public/images/CapeTown-p.jpg'},
      { id: 107, province: 'Johannesburg',  prices: '530 000.00',  propertyT: 'Apartment',  rooms: '1 Room',  priceRange: 'R500K-R690K', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-a.jpg' },
      { id: 108, province: 'Western Cape',  prices: '450 000.00',  propertyT: 'Cottage',  rooms: '2 Rooms',  priceRange:'R200K-R490K', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-c.jpg' },
      { id: 109, province: 'KwaZulu Natal',  prices: '720 000.00',  propertyT: 'Penthouse',  rooms: '3 Rooms',  priceRange: 'R700K-R790K', bathrooms : '1 bathroom', img : '../../Public/images/KwaZulu-p.jpg' },
      { id: 110, province: 'Johannesburg',  prices: '210 000.00',  propertyT: 'Apartment',  rooms: '2 Room',  priceRange:'R200K-R490K', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-a2.jpg' },
      { id: 111, province: 'Western Cape',  prices: '720 000.00',  propertyT: 'Cottage',  rooms: '1 Rooms',  priceRange: 'R700K-R790K', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-c2.jpg' },
      { id: 112, province: 'KwaZulu Natal',  prices: '776 000.00',  propertyT: 'Penthouse',  rooms: '3 Rooms',  priceRange: 'R700K-R790K', bathrooms : '2 bathrooms', img : '../../Public/images/KZN-p2.jpg' },
      { id: 113, province: 'Western Cape',  prices: '630 000.00',  propertyT: 'Apartment',  rooms: '3 Room',  priceRange: 'R500K-R690K', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-a2.jpg' },
      { id: 114, province: 'KwaZulu Natal',  prices: '210 000.00',  propertyT: 'Cottage',  rooms:  '1 Rooms',  priceRange:'R200K-R490K', bathrooms : '1 bathroom', img : '../../Public/images/KZN-c2.jpg' },
      { id: 115, province: 'Johannesburg',  prices: '789 000.00',  propertyT: 'Penthouse',  rooms: '3 Rooms',  priceRange: 'R700K-R790K', bathrooms : '1 bathroom', img : '../../Public/images/JHB-p2.jpg'},
      { id: 116, province: 'KwaZulu Natal',  prices: '330 000.00',  propertyT: 'Apartment',  rooms: '1 Room', priceRange:'R200K-R490K', bathrooms : '1 bathroom', img : '../../Public/images/KZN-a2.jpg' },
      { id: 117, province: 'Johannesburg',  prices: '690 000.00',  propertyT: 'Cottage',  rooms: '2 Rooms',  priceRange: 'R500K-R690K', bathrooms : '1 bathroom', img : '../../Public/images/JHB-c2.jpg'},
      { id: 118, province: 'Western Cape',  prices: '1 200 000.00',  propertyT: 'Penthouse',  rooms: '2 Rooms',  priceRange: 'R800K+', bathrooms : '1 bathroom', img : '../../Public/images/CapeTown-p2.jpg'},
      
  ];

  const dropdowns = document.getElementsByClassName("filterable");
  
  // Runs the `filterData` function when the user changes something
  document.addEventListener("change", filterData);
  
  // Defines the `filterData` function
  function filterData(event){
  
    // Converts the NodeList to an Array so we can use the `.includes`,
    //   `.map`, and `.filter` methods
    const dropdownArr = Array.from(dropdowns);
  
    // Makes sure the changed element was one we care about before proceeding
    if(dropdownArr.includes(event.target)){
  
      // Makes a new array from the selected values
      const currentFilter = dropdownArr.map(dropdownArr => dropdownArr.value);
  
      // Makes a new (filtered) array by applying each element of `currentFilter`
      //   to its respective property in each element of `data`
      //   (This is the fragile bit because it assumes the order is correct.)
      const output = data.filter(item =>
        (!currentFilter[0] || currentFilter[0] == item.province) &&
        (!currentFilter[1] || currentFilter[1] == item.propertyT) &&
        (!currentFilter[2] || currentFilter[2] == item.rooms)&&
        (!currentFilter[3] || currentFilter[3] == item.bathrooms)&&
        (!currentFilter[4] || currentFilter[4] == item.priceRange)
        
      );
  
      // Does something with the filtered data
      let propertyCards = "";
for ( let i=0; i<output.length; i++){
  propertyCards += `<div class='propertyCard'>
                        <div class="row"> 
                        <div class="column">  
                        <div class="card1" > 
                        <img src='${output[i].img}'/> 
                        <div class="propertText"> 
                        <h3 style="color:#303841;"><img class="img1" src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png"/>  ${output[i].province}</h3>  
                        <h4 style="color:#303841;"><img class="img1" src="https://img.icons8.com/pastel-glyph/64/000000/house.png"/>   ${output[i].propertyT}</h4>
                        <h6 style="color:#303841;"><img class="img1" src="https://img.icons8.com/fluent-systems-filled/24/000000/bed.png"/>  Rooms: ${output[i].rooms}</h6>
                        <h6 style="color:#303841;"><img class="img1" src="https://img.icons8.com/android/24/000000/shower.png"/>   Bathrooms: ${output[i].bathrooms}</h6>
                        <h6 style="color:#303841;"><img class="img1" src="https://img.icons8.com/android/24/000000/price-tag.png"/>  Price: R ${output[i].prices}</h6>
                        </div>
                        </div>
                        </div>
                        </div>
                   </div>`;
}
    document.getElementById("PropertyDiv").innerHTML = propertyCards;
      console.log(output.length > 0 ? output : "No matching results");
    }
  }
  
  var slideIndex = 1;
        showDivs(slideIndex);

          function plusDivs(n) {
            showDivs(slideIndex += n);
          }

          function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
          }
          // making the functionalty onclick in the js file 
          // looping through different img