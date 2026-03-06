function renderListData(list){

    let container = document.getElementById("recipe-list")
    
    let html=""
    
    list.forEach(function(item){
    
    html += `
    
    <div class="col">
    
    <div class="card">
    
    <img src="${item.image}">
    
    <div class="card-body">
    
    <h3 class="card-title">${item.title}</h3>
    
    <p class="card-desc">${item.desc}</p>
    
    </div>
    
    </div>
    
    </div>
    
    `
    
    })
    
    container.innerHTML = html
    
    }
    
    renderListData(recipes)
    
    
    function searchRecipe(){
    
    let keyword = document.getElementById("searchInput").value.toLowerCase()
    
    let result = recipes.filter(function(item){
    
    return item.title.toLowerCase().includes(keyword)
    
    })
    
    renderListData(result)
    
    }