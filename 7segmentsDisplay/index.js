const n = 1234567890;

(()=>{
  let generateLine = n => {
    // only those 4 chuncks are required to display all 10 digits
    let patterns = ['###','# #','#  ','  #']
    // we would use tokens (for ex. '01120') to represent indexes of previous chunks
    /* to minimize the length of this array, those "strings" are converted to base 4 numbers (eg: 84 <=> '01110')
    * /!\ THIS HAS NO USE OUTSIDE OF THE GOLF
    */
    let lineTokens = [84,1023,200,204,335,140,644,255,68,79]
  //let lineTokens = ["01110","33333","03020","03030","11033","02030","22010","03333","01010","01033"] <- that's a lot longer
    
    // converting pattern back to its '01120' state
    let matchPattern = ('0'+lineTokens[n].toString(4)).substr(-5)
    return matchPattern.replace(/(.)/g,(w,c)=>patterns[+c]+',')
  }
  
  const raw = (''+n).split('').map(char => generateLine(+char).split(','))
  const display = raw[0].map((line, index) => [raw.map(each => each[index])].join())
  display.map(d => console.log(d.replace(/,/g,'\t')))
})(n)
