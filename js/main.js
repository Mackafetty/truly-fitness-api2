document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const dayTarget = document.querySelector('input').value
    try{
        const response = await fetch(`https://thoughtful-moth-cap.cyclic.app/api/${dayTarget}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.exercise
    }catch(error){
        console.log(error)
    }
}