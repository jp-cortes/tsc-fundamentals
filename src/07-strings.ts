(() => {
  let productTitle = 'My amazing design';
  productTitle = null;//error
  productTitle = () => {};//error
  productTitle = 123;//error

  productTitle = 'my amazin design change';
  console.log('Product Title', productTitle);

  const productDescription = "I'm bla bla ba bla bl s asasas";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);

  const myString: string = '';
})();
