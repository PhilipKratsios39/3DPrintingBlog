import React, {useState, useEffect} from "react"
import Article from "./Article"

function ArticleFeed() {
    const exampleArticleArray = [{
        "title": "Ultimaker and MakerBot EXAMPLE 1 merge into a 3D printing giant",
        "description": "The new company plans to grow the 3D printing industry but won’t say how or when.",
        "content": "Audio player loading…\nMakerBot and Ultimaker, two of the biggest names in the 3D printing industry, are merging into one big corporation.\nThe companies are joining forces because, according to a release on the merger, they want to speed global adopti... [2335 chars]",
        "url": "https://www.techradar.com/news/ultimaker-and-makerbot-merge-into-a-3d-printing-giant",
        "image": "https://cdn.mos.cms.futurecdn.net/2628a3a7ff78d1c215b277ade0cc39e1-1200-80.jpg",
        "publishedAt": "2022-05-12T17:53:02Z",
        "source": {
            "name": "TechRadar",
            "url": "https://www.techradar.com"
        }
    },{
      "title": "Ultimaker and MakerBot EXAMPLE 2merge into a 3D printing giant",
      "description": "The new company plans to grow the 3D printing industry but won’t say how or when.",
      "content": "Audio player loading…\nMakerBot and Ultimaker, two of the biggest names in the 3D printing industry, are merging into one big corporation.\nThe companies are joining forces because, according to a release on the merger, they want to speed global adopti... [2335 chars]",
      "url": "https://www.techradar.com/news/ultimaker-and-makerbot-merge-into-a-3d-printing-giant",
      "image": "https://cdn.mos.cms.futurecdn.net/2628a3a7ff78d1c215b277ade0cc39e1-1200-80.jpg",
      "publishedAt": "2022-05-12T17:53:02Z",
      "source": {
          "name": "TechRadar",
          "url": "https://www.techradar.com"
      }
    },{
      "title": "Ultimaker and MakerBot EXAMPLE 3 merge into a 3D printing giant",
      "description": "The new company plans to grow the 3D printing industry but won’t say how or when.",
      "content": "Audio player loading…\nMakerBot and Ultimaker, two of the biggest names in the 3D printing industry, are merging into one big corporation.\nThe companies are joining forces because, according to a release on the merger, they want to speed global adopti... [2335 chars]",
      "url": "https://www.techradar.com/news/ultimaker-and-makerbot-merge-into-a-3d-printing-giant",
      "image": "https://cdn.mos.cms.futurecdn.net/2628a3a7ff78d1c215b277ade0cc39e1-1200-80.jpg",
      "publishedAt": "2022-05-12T17:53:02Z",
      "source": {
          "name": "TechRadar",
          "url": "https://www.techradar.com"
      }
    }]
      const [articleState, setArticleState] = useState(exampleArticleArray)
    
    
      useEffect(() => {
        //Runs only on the first render
        function getNewsArticles() {
          fetch('https://gnews.io/api/v4/search?q=3d%20printing&max=5&token=ec6eea47b9b5ffbd7c8b7ab3afeb1442')
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              setArticleState(data.articles)
              console.log(data);
          });
      }
      getNewsArticles()
      
      }, []);
    
      console.log(articleState, "articleState")


    return (
        <>
              {articleState.map((article) => {
        return (
            <>
             <Article title = {article.title} description= {article.description} image= {article.image} url= {article.url}/>
            </>

        )

      })}
        </>
    )
}

export default ArticleFeed