const form=document.getElementById("ip-form")
const searchInfo=document.getElementById("ip-search")
// const map=document.getElementById("ip-map")
const address=document.getElementById("addressValue")
const ipLocation=document.getElementById("locationValue")
const timeZone=document.getElementById("timezoneValue")
const isp=document.getElementById("ispValue")
const map = L.map('ip-map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




async function geoInfo() {
  const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_jrJQ4LyjAAGmCDslMnce48j5TxH0K&ipAddress=8.8.8.8");
  const ipInfo = await response.json();
  console.log(ipInfo);
  address.textContent =ipInfo.ip
  ipLocation.textContent=`${ipInfo.location.city}, ${ipInfo.location.region} `
  timeZone.textContent=ipInfo.location.timezone
  isp.textContent=ipInfo.isp

  map.setView([ipInfo.location.lat,ipInfo.location.lng], 13)
        L.marker([ipInfo.location.lat,ipInfo.location.lng]).addTo(map)
}
geoInfo()


