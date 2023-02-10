const selection = document.querySelectorAll('.selection')
const btn = document.getElementById('btn')
const reset_btn = document.getElementById('btn_reset')
let x
reset_btn.addEventListener('click',()=>{
    document.location.reload()
})
btn.addEventListener('click',()=>{
    result.innerText= `${input.value*selection[1].value}   ${selection[1].options[selection[1].selectedIndex].text}  `
    
})

const fetchData = async()=>{
    const fetchedData = await fetch("https://v6.exchangerate-api.com/v6/9311ec01803632d505e14b30/latest/INR")
    const data = await fetchedData.json()
    const data_conversion_rate = data.conversion_rates
    const key_value_array = Object.entries(data_conversion_rate)
    key_value_array.map(([key,value],index)=>{
        selection[0].innerHTML += `<option value=${value} class="option" id=first${index}>${key}</option>`
    })
    key_value_array.map(([key,value],index)=>{
        selection[1].innerHTML += `<option value=${value} class="option" id=first${index}>${key}</option>`
    })
}

const fetchValue = async(x)=>{
    const fetchedData = await fetch(`https://v6.exchangerate-api.com/v6/9311ec01803632d505e14b30/latest/${x}`)
    const data = await fetchedData.json()
    const data_conversion_rate = data.conversion_rates
    const key_value_array = Object.entries(data_conversion_rate)
    selection[1].innerHTML = ""
    key_value_array.map(([key,value],index)=>{
        selection[1].innerHTML += `<option value=${value} class="option" id=first${index}>${key}</option>`
    })
}
fetchData()

function myFunction(selTag) {
    x = selTag.options[selTag.selectedIndex].text;
    fetchValue(x)
  }
 