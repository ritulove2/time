// app.js
// টাইম কনভার্টার (ক্লায়েন্ট সাইড). Uses REST Countries API and Intl API.
// কোর আইডিয়া:
// - REST Countries থেকে countries + timezones নিয়ে আসে
// - প্রতি টাইমজোনের "বর্তমান সময়" দেখাতে setInterval ব্যবহার করে আপডেট করে
// - দুই টাইমজোনের offset minute বের করে datetime কনভার্ট করে

const API = "https://restcountries.com/v3.1/all?fields=name,timezones,cca2,translations";

let allCountries = [];
let filtered = [];
let currentTimer = null;

const el = {
  searchInput: document.getElementById('searchInput'),
  countriesList: document.getElementById('countriesList'),
  selectedCountry: document.getElementById('selectedCountry'),
  countryTitle: document.getElementById
