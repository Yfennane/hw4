window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
 
  

// Loop through the json object and gather all the passengers data

for (let i=0; i<json.length; i++) {

  let fullname = json[i].passengerDetails.first +` `+ json[i].passengerDetails.last
  let phoneNumber = json[i].passengerDetails.phoneNumber
  let numberOfPassengers = json[i].numberOfPassengers
  let pickUp1 = json[i].pickupLocation.address
  let pickUp2 = json[i].pickupLocation.city +` `+json[i].pickupLocation.state +` `+json[i].pickupLocation.zip
  let dropOff1 = json[i].dropoffLocation.address
  let dropOff2 = json[i].dropoffLocation.city +` `+json[i].dropoffLocation.state +` `+json[i].dropoffLocation.zip
  let premium = json[i].purpleRequested

// Identify the type of ride
let ride =` `
if (premium == true) {ride = `Noober Purple`} else if (numberOfPassengers > 3 && premium == false) {ride = `Noober XL`} else {ride = `Noober X`}

// Locate the HTML element to change 

let tripDetails = document.querySelector(`.rides`)

// Add the appropriate HTML based on the ride type

if (ride == `Noober Purple`) {tripDetails.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl text-purple-600">
<i class="fas fa-car-side"></i>
<span>Noober Purple</span>
</h1>

<div class="border-4 border-purple-500 p-4 my-4 text-left">
<div class="flex">
  <div class="w-1/2">
    <h2 class="text-2xl py-1">${fullname}</h2>
    <p class="font-bold text-gray-600">${phoneNumber}</p>
  </div>
  <div class="w-1/2 text-right">
    <span class="rounded-xl bg-purple-600 text-white p-2">
      ${numberOfPassengers} passengers
    </span>
  </div>
</div>
<div class="mt-4 flex">
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">PICKUP</div>
    <p>${pickUp1}</p>
    <p>${pickUp2}</p>
  </div>
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
    <p>${dropOff1}</p>
    <p>${dropOff2}</p>
  </div>
</div>
</div> `)} 

else if (ride == `Noober XL`) {tripDetails.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl text-gray-900">
<i class="fas fa-car-side"></i>
<span>Noober XL</span>
</h1>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
<div class="flex">
  <div class="w-1/2">
    <h2 class="text-2xl py-1">${fullname}</h2>
    <p class="font-bold text-gray-900">${phoneNumber}</p>
  </div>
  <div class="w-1/2 text-right">
    <span class="rounded-xl bg-gray-900 text-white p-2">
      ${numberOfPassengers} passengers
    </span>
  </div>
</div>
<div class="mt-4 flex">
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-900">PICKUP</div>
    <p>${pickUp1}</p>
    <p>${pickUp2}</p>
  </div>
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-900">DROPOFF</div>
    <p>${dropOff1}</p>
    <p>${dropOff2}</p>
  </div>
</div>
</div>`)}

else {tripDetails.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl text-gray-500">
<i class="fas fa-car-side"></i>
<span>Noober X</span>
</h1>

<div class="border-4 border-gray-500 p-4 my-4 text-left">
<div class="flex">
  <div class="w-1/2">
    <h2 class="text-2xl py-1">${fullname}</h2>
    <p class="font-bold text-gray-600">${phoneNumber}</p>
  </div>
  <div class="w-1/2 text-right">
    <span class="rounded-xl bg-gray-600 text-white p-2">
      ${numberOfPassengers} passengers
    </span>
  </div>
</div>
<div class="mt-4 flex">
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">PICKUP</div>
    <p>${pickUp1}</p>
    <p>${pickUp2}</p>
  </div>
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
    <p>${dropOff1}</p>
    <p>${dropOff2}</p>
  </div>
</div>
</div>`)

} }})
