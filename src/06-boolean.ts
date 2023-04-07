(()=> {
  let isEnable = true;
  isEnable = 'as';//error
  isEnable = 1212;//error
  isEnable = false;//error

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true;
})();
