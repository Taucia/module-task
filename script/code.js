function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }

  
 // let properties = JSON.parse(localStorage.getItem('property')) ?JSON.parse(localStorage.getItem('property')) :
let properties = JSON.parse(localStorage.getItem('property'))?
JSON.parse(localStorage.getItem('property')):
localStorage.setItem('property',JSON.stringify([{
        id: 1,
        type: 'Apartment',
        location: 'Cape Town',
        url: "https://i.postimg.cc/x11LwsVj/00a19f3f8242329547c008f419bead41.jpg",
        url1: "https://i.postimg.cc/Tw208cVj/view-1-1.jpg",
        url2: "https://i.postimg.cc/GpbgrDGQ/2-1.jpg",
        bed: 4,
        toilet: 2,
        price:15000,
        for: 'Sale'
    },
    {
        id: 2,
        type: 'Apartment',
        location: 'Johannesburg',
        url: "https://i.postimg.cc/pVBhPDZm/5b687231639838184bda69a5a748282c.jpg",
        url1: "https://i.postimg.cc/VsdpZjYQ/view-1-2.jpg",
        url2: "https://i.postimg.cc/SsCGMN6s/2-2.jpg",
        bed: 3,
        toilet: 2,
        price:15000
    },
    {
        id: 3,
        type: 'Apartment',
        location: 'Durban',
        url: "https://i.postimg.cc/Vk25K4YV/7.jpg",
        url1: "https://i.postimg.cc/MHVD2ZPR/view-1-3.jpg",
        url2: "https://i.postimg.cc/857zKjKp/2-3.jpg",
        bed: 2,
        toilet: 2,
        price:70000
    },
    {
        id: 4,
        type: 'Apartment',
        location: 'Chicago, Illinois',
        url: "https://i.postimg.cc/sDFDtmbF/8.jpg",
        url1: "https://i.postimg.cc/2SMVvd8k/view-1-4.jpg",
        url2: "https://i.postimg.cc/5yGv7hqG/2-4.jpg",
        bed: 5,
        toilet: 3,
        price:70050
    },
    {
        id: 5,
        type: 'Apartment',
        location: 'Seattle',
        url: "https://i.postimg.cc/Rhw9Sryk/21f59207f31a1be0657c9b10492ed527.jpg",
        url1: "https://i.postimg.cc/tT2bdyt3/view-1-5.jpg",
        url2: "https://i.postimg.cc/QCP4QnBN/2-5.jpg",
        bed: 3,
        toilet: 2,
        price:10050,
        for: 'Sale'
    },
    {
        id: 6,
        type: 'Apartment',
        location: 'New York',
        url: "https://i.postimg.cc/Wpw5963S/99.jpg",
        url1: "https://i.postimg.cc/ryHXqfhw/view-1-6.jpg",
        url2: "https://i.postimg.cc/QM1FhBgf/2-6.jpg",
        bed: 3,
        toilet: 1,
        price:10500,
        for: 'Sale'
    },
    {
        id: 7,
        type: 'Apartment',
        location: 'East London',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/YCHpwX9m/1-7.jpg",
        url2: "https://i.postimg.cc/yNp7qstL/2-7.jpg",
        bed: 3,
        toilet: 2,
        price:10070
    },
    {
        id: 8,
        type: 'Apartment',
        location: '	Los Angeles, California',
        url: "https://i.postimg.cc/yYW0FFSD/20072093-1-a3b6dda0b39bd0968ab4e7b28a350cc3-m.jpg",
        url1: "https://i.postimg.cc/ZYNtKrXP/1-8.jpg",
        url2: "https://i.postimg.cc/4yJPzRNT/2-8.jpg",
        bed: 3,
        toilet: 2,
        price:100080
    },
    {
        id: 9,
        type: 'Apartment',
        location: 'San Francisco,',
        url: "https://i.postimg.cc/QNFp7Q7H/images.jpg",
        url1: "https://i.postimg.cc/d3VynsMw/1-9.jpg",
        url2: "https://i.postimg.cc/SsmCP706/2-9.jpg",
        bed: 3,
        toilet: 2,
        price:10000
    },
    {
        id: 10,
        type: 'Apartment',
        location: 'Tokyo',
        url: "https://i.postimg.cc/VN5NhRmt/ccd5ccd6c88be5bb4e3fa256e5798478.jpg",
        url1: "https://i.postimg.cc/Y2P9TfY1/1-10.jpg",
        url2: "https://i.postimg.cc/mkYDWKQh/2-10.jpg",
        bed: 3,
        toilet: 2,
        price:100512
    },
    {
        id: 11,
        type: 'Apartment',
        location: 'Munich',
        url: "https://i.postimg.cc/Kc7mJVBV/5b687231639838184bda69a5a748282c.jpg",
        url1: "https://i.postimg.cc/PqKZDpc2/1-11.jpg",
        url2: "https://i.postimg.cc/dtgWxX5G/2-11.jpg",
        
        bed: 3,
        toilet: 2,
        price:10000
    },
    {
        id: 12,
        type: 'Apartment',
        location: 'Toronto',
        url: "https://i.postimg.cc/kg6Zh6L4/cbce6718be5470d2e4e4673dae2a2c41.jpg",
        url1: "https://i.postimg.cc/3JgZRRKb/1-12.jpg",
        url2: "https://i.postimg.cc/BnxCwvLG/2-12.jpg",
        bed: 3,
        toilet: 2,
        price:10000
    }
]));
// console.log(JSON.parse(localStorage.getItem('property')))
// console.log(localStorage.removeItem('property'))

function getProperties(prop){
    document.getElementById('properties-row').innerHTML = '';
    prop.forEach((property,index) => {
        document.getElementById('properties-row').innerHTML +=
            `
            <div class="col-md-3 p-3">
            <div class="card card-property-height" style="width: 15rem h-10; ">
            <img src="${property.url}" class="card-img-top h-25 " alt="...">
            <div class="card-body bg-dark " >
            
              <h4 class="card-title">${property.type} in ${property.location}</h4>
              <h4 class="card-title "> <i class="fa-solid fa-bed"> ${property.bed}</i></h4> 
              <h4></i> <i class="fa-solid fa-toilet"> ${property.toilet}</i></h4>
              <h5>R ${property.price}</h5><br>
              <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}" onclick="modalProperties()">
                View 
               </button>
            <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${property.type}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div id="carouselExampleIndicators${index}" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${property.url1}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${property.url2}" class="d-block w-100" alt="...">
                      </div>
                      
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                       
                    </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </div>`
    })
}
getProperties(properties);


// For  ToiletSearch
function toilet(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newToilets = properties.filter(property => {
        return property.toilet <= event.target.value
    })
    getProperties(newToilets)
}

// For Room Search
function room(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newRooms = properties.filter(property => {
        return property.bed <= event.target.value
    })
    getProperties(newRooms)
}

// For Buget Search
function budget(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newBudget = properties.filter(property => {
        return property.price == event.target.value
    })
    getProperties(newBudget)
}

document.querySelector('#property-toilets').addEventListener('change',toilet);
document.querySelector('#property-rooms').addEventListener('change',room);
document.querySelector('#property-budget').addEventListener('change',budget);


    // localStorage.setItem('property',JSON.stringify(property))
    // console.log(localStorage)