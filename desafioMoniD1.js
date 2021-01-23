function maskify(cc) {
    let splitArr = cc.split("")
    for (let i = 0; i < splitArr.length -4; i++) splitArr[i] = "#";
    return splitArr.join(""); 
  }
  
  console.log(maskify("amanda"))