let a = 0;
let b = 1;
let c = 0;
for (let i = 0; i < 20; i++) {
  console.log(a);
  c = a + b; 
  a = b; 
  b = c;
}
