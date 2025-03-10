let x = 2234; 
let terbilang = "";
let ribuan = Math.floor(x / 1000); // 2234 / 1000 = 2
let ratusan = Math.floor((x % 1000) / 100); // 234 / 100 = 2
let puluhan = Math.floor((x % 100) / 10); // 34 / 10 = 3
let satuan = x % 10; // 4
let ribuanStr = "";
let ratusanStr = "";
let puluhanStr = "";
let satuanStr = "";
let ribuanArr = [
  "",
  "Seribu",
  "Dua Ribu",
  "Tiga Ribu",
  "Empat Ribu",
  "Lima Ribu",
  "Enam Ribu",
  "Tujuh Ribu",
  "Delapan Ribu",
  "Sembilan Ribu",
];
let ratusanArr = [
  "",
  "Seratus",
  "Dua Ratus",
  "Tiga Ratus",
  "Empat Ratus",
  "Lima Ratus",
  "Enam Ratus",
  "Tujuh Ratus",
  "Delapan Ratus",
  "Sembilan Ratus",
];
let puluhanArr = [
  "",
  "Sepuluh",
  "Dua Puluh",
  "Tiga Puluh",
  "Empat Puluh",
  "Lima Puluh",
  "Enam Puluh",
  "Tujuh Puluh",
  "Delapan Puluh",
  "Sembilan Puluh",
];
let satuanArr = [
  "",
  "Satu",
  "Dua",
  "Tiga",
  "Empat",
  "Lima",
  "Enam",
  "Tujuh",
  "Delapan",
  "Sembilan",
];
if (ribuan > 0) {
  ribuanStr = ribuanArr[ribuan];
}
if (ratusan > 0) {
  ratusanStr = ratusanArr[ratusan];
}
if (puluhan > 0) {
  puluhanStr = puluhanArr[puluhan];
}
if (satuan > 0) {
  satuanStr = satuanArr[satuan];
}
terbilang = ribuanStr + " " + ratusanStr + " " + puluhanStr + " " + satuanStr;
console.log(terbilang);
