for (let i = 50; i <= 100; i++) {
  if (i % 5 == 0) {
    if (i <= 60) {
      console.log(i + " KURANG");
    } else if (i > 60 && i <= 70) {
      console.log(i + " CUKUP");
    } else if (i > 70 && i <= 80) {
      console.log(i + " BAIK");
    } else {
      console.log(i + " LUAR BIASA");
    }
  }
}
