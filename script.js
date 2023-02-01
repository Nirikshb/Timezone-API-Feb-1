// const zone = document.getElementById('zone')
const address = document.getElementById('address')

const error = document.getElementById('error')

// error.addEventListener('click', submitBtn);

// function submitBtn(){
//     try{
//         const addressDetail = address.value
        
//         if(addressDetail == '') throw 'TimeZone Could Not be Foud'
//     document.getElementById('output').innerHTML=''
//     }
//  catch(err){
//     console.log(err);
//     document.getElementById('output').innerHTML = err;
//     document.getElementById('output').style.color = 'red'
// }


navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    document.getElementById("lat").innerHTML = `Lat : ${latitude}`;
    document.getElementById("long").innerHTML = `Long : ${longitude}`;
    latitude.innerHTML =  latitude;
    longitude.innerHTML =  + longitude;
    let Api = "f3df1cdb0d6347218cec5d3d43a03ff3";
 

    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${Api}`)
    .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        // document.getElementById('timezone).innerHTML = data.features[0].properties.timezone.name;
        //timezone.innerHTML = data.features[0].properties.timezone.name; 
        lati.innerHTML = data.features[0].properties.lat;
        longi.innerHTML = data.features[0].properties.lon;
        std.innerHTML= data.features[0].properties.timezone.offset_STD
        stdsec.innerHTML= data.features[0].properties.timezone.offset_STD_seconds
        dst.innerHTML = data.features[0].properties.timezone.offset_DST
        //dstsec.innerHTML=data.features[0].properties.timezone.offset_DST_seconds
        country.innerHTML=data.features[0].properties.country
        postcode.innerHTML = data.features[0].properties.postcode
        cityy.innerHTML = data.features[0].properties.city;
        
        // console.log(`data.features[0].properties.city);
        // console.log(data.features[0].properties.country);
      })
      .catch((error) => {
        console.error(error);
      });
      console.log();
  });


//   function renderData(){
//     const name = searchInput.value;
//     console.log(name);
    
//   }