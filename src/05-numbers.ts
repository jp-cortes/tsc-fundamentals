(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('ProductPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1; //29

  let productInStock: number;
  console.log('ProductInStock', productInStock); //error the variable is not yet declared
  if(productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if(discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;//4095
  console.log('hex', hex);

  let bin = 0b111; //7
  console.log('bin', bin);

  const myNumber: number = 10;
})();
