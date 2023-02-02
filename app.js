const url=' https://jsonplaceholder.typicode.com/posts'
const card=document.querySelector('.container')

async function fetchData (){
        const response=await fetch(url)
        const data= await response.json()
        data.forEach((item)=>{
            card.innerHTML+=`
            <div class="card">
            <img src="image/think.png" alt="">
            <h1>${item.title}</h1>
            <span>${item.body}</span>
            </div>
            `
        })
}
fetchData()

