let properties = JSON.parse(localStorage.getItem('property'))?
JSON.parse(localStorage.getItem('property')): [{
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
];

function readData(){
    let container = document.querySelector('#tbody');
    container.innerHTML ='';
    properties.forEach( (item, index)=>{

        document.getElementById('tbody').innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.type}</td>
                <td>${item.location}</td>
                <td>${item.url}</td>
                <td>${item.bed}</td>
                <td>${item.toilet}</td>
                <td>${item.price}</td>
                <td>
                    <button class='btn btn-secondary' onclick='deleteItem(${index})'>Delete</button>
                </td>
                <td>
                    <button class='btn btn-secondary'<i class="bi bi-pencil-square" onclick='editItem(${item.id})'>Edit</i></button>
                </td>
               
            </tr>
        `
    });
}
{/* <td></i></td>
<td>></td> */}
readData();

/*


id: 11,
type: 'Apartment',
location: 'Munich',
url: "",
url1: "https://i.postimg.cc/PqKZDpc2/1-11.jpg",
url2: "https://i.postimg.cc/dtgWxX5G/2-11.jpg",

bed: 3,
toilet: 2,
price:100000000

*/

function deleteItem(id) {
    if(id > -1) {
        properties.splice(id, 1);
    }
    localStorage.setItem('property', JSON.stringify(properties));
    readData();
}