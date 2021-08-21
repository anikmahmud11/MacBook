//memory
const unifiedMemory = document.getElementById("8gb-memory");
const extraUnifiedMemory = document.getElementById("16gb-memory");
const extraMemoryCost = document.getElementById('extra-memory') ;

unifiedMemory.addEventListener('click',function(){
  extraMemoryCost.innerText = '0';
  updateTotal();
});
extraUnifiedMemory.addEventListener('click',function(){
  extraMemoryCost.innerText = '180';
  updateTotal();
});
//storage
const ssdStorage = document.getElementById("256gb-storage");
const extraStorage = document.getElementById("512gb-storage");
const tbStorage = document.getElementById("1Tb-storage");
const extraStorageCost = document.getElementById('extra-storage') ;

ssdStorage .addEventListener('click',function(){
  extraStorageCost.innerText = '0';
  updateTotal();
});
extraStorage.addEventListener('click',function(){
  extraStorageCost.innerText = '100';
  updateTotal();
});
tbStorage.addEventListener('click',function(){
  extraStorageCost.innerText = '180';
  updateTotal();
});

//shipping
const freeShippinCost = document.getElementById("free-Shipping");
const onTimeShippinCost = document.getElementById("on-Time-Shipping");
const deliveryCost = document.getElementById('delevery-cost') ;

freeShippinCost.addEventListener('click',function(){
  deliveryCost.innerText = '0';
  updateTotal();
});
onTimeShippinCost.addEventListener('click',function(){
  deliveryCost.innerText = '20';
  updateTotal();
});
//best price
const bestPrice = document.getElementById('sub-total');


//total
const total = document.getElementById('total-price');
const footerTotal=document.getElementById('footer-total');
//update total
function updateTotal(){
 const totalMemoryPrice =parseInt(extraMemoryCost.innerText);
 const fixedPrice = parseInt(bestPrice.innerText);
 const grandTotal = totalMemoryPrice+fixedPrice;
 total.innerText=grandTotal;
 const totalExtraStoragePrice = parseInt(extraStorageCost.innerText);
 const previousStorageTotalPrice = parseInt(total.innerText);
 const grandTotalStorage = totalExtraStoragePrice  + previousStorageTotalPrice ;
 total.innerText=grandTotalStorage ;
 const totalDeliveryPrice =parseInt( deliveryCost.innerText);
 const previousTotal = parseInt(total.innerText);
 const deliveryGrandTotal = totalDeliveryPrice + previousTotal;
 total.innerText=deliveryGrandTotal;
 const footerGrandTotal = parseInt(total.innerText);
 footerTotal.innerText=footerGrandTotal;

}

//Add promo code and discount price
document.getElementById('promoBtn').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
   
    promoInput.value='';
  
if( promoCode == 'stevekaku'){
  const footerMainTotal = document.getElementById('footer-total');
  
  const footerPreviousTotal = parseInt(footerMainTotal.innerText);
  
  const discountPrice = parseInt( (footerPreviousTotal*20) /100) ;
  const finalDiscountPrice =  footerPreviousTotal - discountPrice ;
  footerTotal.innerText = finalDiscountPrice;
  promoBtn. disabled = true;
}
});

