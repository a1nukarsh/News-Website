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
        articles.forEach(function(element, index){
            let index1=1
            console.log(element, index)
                let news = `<div class="accordion-item">
                                <h2 class="accordion-header" id="heading${index}">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><strong>
                                    ${index+1}.&nbsp</strong> 
                                    ${element["title"]}
                                    </button>
                                </h2>
                                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                                    <div class="accordion-body">
                                    ${element["content"]}.<a href="${element["url"]}" target="_blank"> Read more. </a>
                                    </div>
                                </div>
                                </div>
                            </div>`
                newsHtml += news
        });
        newsAccordion.innerHTML = newsHtml
    }
    else{
        console.log("some error occured")
    }
}

// send the request
xhr.send()




