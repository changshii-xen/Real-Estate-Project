// Defines globals
const lists = {
    province: "WC,KZN,JHB".split(","),
    propertyT:   "Apartment,Cottage,Penthouse".split(","),
    rooms:  "1 Room,2 Rooms,3 Rooms".split(","),
    bathrooms:  "1 bathrooms,2 bathrooms,3 bathrooms".split(","),
    img: `../../Public/images/CapeTown-a.jpg,.../../Public/images/CapeTown-p.jpg,../../Public/images/CapeTown-c.jpg,../../Public/images/KwaZulu-a.jpg,
    ../../Public/images/KwaZulu-p.jpg,../../Public/images/KwaZulu-c.jpg,../../Public/images/JHB-a.jpg,../../Public/images/JHB-p.jpg,../../Public/images/JHB-c.jpg`.split(","),
  };
  let data = [
      { id: 101, province: 'WC',   propertyT: 'Apartment', rooms: '1 Room', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-a.jpg' },
      { id: 102, province: 'KZN',    propertyT: 'Cottage', rooms: '2 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/KwaZulu-a.jpg' },
      { id: 103, province: 'JHB',   propertyT: 'Penthouse', rooms: '3 Rooms', bathrooms : '1 bathrooms', img : '../../Public/images/JHB-p.jpg'},
      { id: 104, province: 'KZN',   propertyT: 'Apartment', rooms: '1 Room', bathrooms : '2 bathrooms', img : '../../Public/images/KwaZulu-a.jpg' },
      { id: 105, province: 'JHB',    propertyT: 'Cottage', rooms: '2 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-c.jpg'},
      { id: 106, province: 'WC',   propertyT: 'Penthouse', rooms: '3 Rooms', bathrooms : '1 bathrooms', img : '../../Public/images/CapeTown-p.jpg'},
      { id: 107, province: 'JHB',   propertyT: 'Apartment', rooms: '1 Room', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-a.jpg' },
      { id: 108, province: 'WC',    propertyT: 'Cottage', rooms: '2 Rooms', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-c.jpg' },
      { id: 109, province: 'KZN',   propertyT: 'Penthouse', rooms: '3 Rooms', bathrooms : '1 bathrooms', img : '../../Public/images/KwaZulu-a.jpg' },
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
        (!currentFilter[3] || currentFilter[3] == item.bathrooms)
      );
  
      // Does something with the filtered data
      let propertyCards = "";
for ( let i=0; i<output.length; i++){
  propertyCards += `<div class='propertyCard'>
                        <div class="row"> 
                        <div class="column">  
                        <div class="card">    
                        <h1>${output[i].province}</h1>
                        <img src='${output[i].img}'/>                                             
                        <h4>${output[i].propertyT}</h4>
                        <h6>Rooms: ${output[i].rooms}</h6>
                        <h6>Bathrooms: ${output[i].bathrooms}</h6>
                        </div>
                        </div>
                        </div>
                   </div>`;
}
    document.getElementById("PropertyDiv").innerHTML = propertyCards;
      console.log(output.length > 0 ? output : "No matching results");
    }
  }
  