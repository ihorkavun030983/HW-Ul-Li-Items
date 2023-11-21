const liItems = document.querySelectorAll('ul.root>li');
liItems.forEach((liItem)=>{
    const ulItems = liItem.querySelectorAll('ul');
    ulItems.forEach((ulItem)=>{
    const lastLiItems = ulItem.querySelector('li:last-of-type');
    lastLiItems.className = 'last';
    setTimeout(function() {
      lastLiItems.style.background = 'green';
    }, 2000);
    
  });
});

const root = document.querySelector('ul.root')
console.log(root)

const setFirstItemClassName = (level, ul) =>{

 level--

  const firstLiItem = ul.querySelector('li:first-of-type');
  firstLiItem.className = 'first';
  setTimeout(function() {
    firstLiItem.style.background = 'red';
  }, 2000);
  

  if(level > 0) {
    const liOriginArray = [...ul.children];
    liOriginArray.forEach(li => {
      const innerUls = [...li.children];
      console.log(innerUls);

      innerUls.forEach(innerUl => setFirstItemClassName(level, innerUl))
      
    })
  }
  
};

setFirstItemClassName(2, root)
