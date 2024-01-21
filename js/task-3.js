function getElementWidth(content, padding, border);{
const isContentNumber = Number.parseFloat(content);
const isPaddingNumber = Number.parseFloat(padding);
const isBorderNumber = Number.parseFloat(border);
   return (isContentNumber + isPaddingNumber * 2 + isBorderNumber * 2);
};

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));
