function toLowerCase(str) {
  let strArray = str.split('');
  
  return strArray.map(char => {
    let charCode = char.charCodeAt();

    if (charCode >= 65 && charCode <= 90) { charCode += 32 }
    
    return String.fromCharCode(charCode);
  }).join("");
};