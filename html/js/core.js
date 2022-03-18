const sendbutton = document.querySelector('#BTNSEND');
sendbutton.addEventListener("click", ()=>{
    const inputstr= document.querySelector('#mystr').value
    if (inputstr === ""){return}
    request =new  XMLHttpRequest()
    const requestdata = `stringtoencode=${encodeURIComponent(inputstr)}`
    request.open('POST',"/createQRCODE", true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.responseType = 'blob'
    request.onload = async (e)=>{
     
      
      const objectimg = document.querySelector("#QRIMAGE") 
      objectimg.src = URL.createObjectURL(request.response)
      

   }
    request.send(requestdata)

})
function clickCustomButton(){
  console.log('clickCustomButton')
}