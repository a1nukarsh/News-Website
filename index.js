// Initialize the news-api parameters
let country = 'in'
let apiKey = '6da6252ff0384d25b601d7388b662111'


// get the newscontainer
let newsAccordion = document.getElementById("newsAccordion");


// creating an ajax get request
const xhr = new XMLHttpRequest()
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true)

// onload
xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        // console.log(articles)
        let newsHtml = ""
        articles.forEach(function(element){
            
        });
        for (let news in articles){
            console.log(articles[news])
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ${articles[title]}
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                ${articles[news]}
                                </div>
                            </div>
                            </div>
                        </div>`
            newsHtml += news
        }
        newsAccordion.innerHTML = newsHtml
    }
    else{
        console.log("some error occured")
    }
}

// send the request
xhr.send()




