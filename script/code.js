function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }

  
  let properties = JSON.parse(localStorage.getItem('property')) ?
    JSON.parse(localStorage.getItem('property')) : [{
            id: 1,
            type: 'Apartment',
            location: 'New York City',
            url: "../image/00a19f3f8242329547c008f419bead41.jpg",
            bed: `<i class="fa-solid fa-bed"> 4 </i>`,
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 2,
            type: 'Apartment',
            location: 'New York City',
            url: "../image/20072093-1-a3b6dda0b39bd0968ab4e7b28a350cc3-m.jpg",
            bed: '<i class="fa-solid fa-bed"> 3</i>',
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 3,
            type: 'Apartment',
            location: 'New York City',
            url: "https://i.postimg.cc/SK3xW5dY/21f59207f31a1be0657c9b10492ed527.jpg",
            bed: '<i class="fa-solid fa-bed"> 6</i>',
            toilet: `<i class="fa-solid fa-toilet"> 3</i>`,
            price: 10000
        },
        {
            id: 4,
            type: 'Apartment',
            location: 'New York City',
            url: "../image/5b687231639838184bda69a5a748282c.jpg",
            bed: '<i class="fa-solid fa-bed"> 5</i>',
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 5,
            type: 'Apartment',
            location: 'New York City',
            url: "../image/cbce6718be5470d2e4e4673dae2a2c41.jpg",
            bed: '<i class="fa-solid fa-bed"> 4</i>',
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 6,
            type: 'Apartment',
            location: 'New York City',
            url: "../image/ccd5ccd6c88be5bb4e3fa256e5798478.jpg",
            bed: '<i class="fa-solid fa-bed"> 6</i>',
            toilet: `<i class="fa-solid fa-toilet"> 3</i>`,
            price: 10000
        },
        {
          id: 7,
          type: 'Apartment',
          location: 'New York City',
          url: "https://i.postimg.cc/zvCXKYJD/7.jpg",
          bed: '<i class="fa-solid fa-bed"> 3</i>',
          toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
          price: 10000
      },
      {
        id: 8,
        type: 'Apartment',
        location: 'New York City',
        url: "../image/images.jpg",
        bed: '<i class="fa-solid fa-bed"> 5</i>',
        toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
        price: 10000
    },
    {
      id: 9,
      type: 'Apartment',
      location: 'New York City',
      url: "../image/taylor-uptown-penthouse-unit-333-dallas-tx-building-photo.jpg",
      bed: '<i class="fa-solid fa-bed"> 3</i>',
      toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
      price: 10000
  },     {
    id: 10,
    type: 'Apartment',
    location: 'New York City',
    url: "https://i.postimg.cc/GpL3D5Nd/8.jpg",
    bed: '<i class="fa-solid fa-bed"> 6</i>',
    toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
    price: 10000
},
  {
    id: 11,
    type: 'Apartment',
    location: 'New York City',
    url: "../image/99.jpg",
    bed: '<i class="fa-solid fa-bed"> 3</i>',
    toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
    price: 10000
},
{
  id: 12,
  type: 'Apartment',
  location: 'New York City',
  url: "../image/10.jpg.crdownload",
  bed: '<i class="fa-solid fa-bed"> 4</i>',
  toilet: `<i class="fa-solid fa-toilet"> </i>`,
  price: 10000
}
    ];


function getProperties(){
    properties.forEach((e) => {
        document.getElementById('properties-row').innerHTML +=
            `<div class="col-md-3">
            <div class="card" style="width: 18rem;">
            <img src="${e.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${e.type} in ${e.location}</h4>
              <h4 class="card-title">${e.bed} ${e.toilet}</h4>
              <h5>${e.price}</h5>
            </div>
          </div>
            </div>`
    })
}
getProperties();