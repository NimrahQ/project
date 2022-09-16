const counters= document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    counter.innerText='0';
    var updateCounter =() =>{
        const target = +counter.getAttribute('data-target');
        console.log("target", target);
        const c = +counter.innerText;

      const increment = target / 250 ;

      if (c < target){
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter,1);
          
      }else{
          counter.innerText = target;
      }
    };
    updateCounter();
});