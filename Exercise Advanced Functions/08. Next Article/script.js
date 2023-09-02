function getArticleGenerator(articles) {
    let input = articles;

    return () => {
        if(input.length > 0){
            let container = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = articles.shift();
            console.log(currentText);
            article.innerText = currentText;
            container.appendChild(article);
        }
    };
}
