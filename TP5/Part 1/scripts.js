const APIKEY ="j2nwu6TJQVvp4s1V6JpEjNAld2XBiwyA"

const onSuccess = (res) => {
    console.log(res)
}

const onFail = (res) => {
    console.log('err')
    console.log(res)
    res.text().then(finalTreatment)
}

const finalTreatment = (text) => {
    console.log("coucou")
    console.log(text)
    let  content = "<div>"
    const object = text.response.docs;
    for(const elem of object){
        content +="<div class='article'>"
        content += `<a href="${elem.web_url}">${elem.headline.main}</a>`
        try{
            content += `<img src="https://nytimes.com/${elem.multimedia[0].url}"><p>${elem.abstract}</p>`
        }catch{

        }

        content += `<p>${elem.pub_date.slice(0,10)}</p>`
        content +='</div>'
    }
    content +='</div>'
    document.getElementById("container").innerHTML = content
}

const search = () => {
    const keyword = document.getElementById("search").value
    let text =  document.getElementById("container").innerHTML
    console.log(keyword)
    text = text.replaceAll("<span>","")
    text = text.replaceAll("</span>","")
    text = text.replaceAll(keyword,`<span>${keyword}</span>`)

    document.getElementById("container").innerHTML = text
}

fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=science&api-key=${APIKEY}`).then(function(result) {
    return result.json();
}).then(function(json) {
    finalTreatment(json);
});


