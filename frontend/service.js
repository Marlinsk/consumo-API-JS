async function getContent() {
    try {
        const response = await fetch('http://localhost:8889/json') 
        // console.log(response)
        const data = await response.json()
        // console.log(data)
        showData(data)
    } catch (err) {
        console.log(err)    
    }
}

getContent();

function showData(items){
    let output = ''

    for( let item of items) {
        output += `<div><strong>Nome: </strong>${item.name}<br/><strong>E-mail: </strong>${item.email}<br/><br/></div>`
    }

    document.querySelector('#panelList').innerHTML = output
}