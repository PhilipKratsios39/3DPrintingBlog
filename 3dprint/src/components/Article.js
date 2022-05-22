import React from "react"

const exampleArticle = {
    "title": "Ultimaker and MakerBot merge into a 3D printing giant",
    "description": "The new company plans to grow the 3D printing industry but won’t say how or when.",
    "content": "Audio player loading…\nMakerBot and Ultimaker, two of the biggest names in the 3D printing industry, are merging into one big corporation.\nThe companies are joining forces because, according to a release on the merger, they want to speed global adopti... [2335 chars]",
    "url": "https://www.techradar.com/news/ultimaker-and-makerbot-merge-into-a-3d-printing-giant",
    "image": "https://cdn.mos.cms.futurecdn.net/2628a3a7ff78d1c215b277ade0cc39e1-1200-80.jpg",
    "publishedAt": "2022-05-12T17:53:02Z",
    "source": {
        "name": "TechRadar",
        "url": "https://www.techradar.com"
    }
}
//https://gnews.io/api/v4/search?q=3d%20printing&max=5&token=ec6eea47b9b5ffbd7c8b7ab3afeb1442




function Article({title, description, image, url}) {

    return (

        <>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={image}/>
            <a href={url}>link to article</a>
        </>
    )


}


export default Article
