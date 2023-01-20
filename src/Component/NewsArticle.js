

const NewsArticle = ( {item} ) => {
   
   const {url, urlToImage, title, author, description, publishedAt} = item;
   
   let date = new Date(publishedAt);

   let year = date.getFullYear();
   let month = date.getMonth() +1 ;
   let day =date.getDate();
    return (
        <li>
            <a href={url}>
                <img src={urlToImage} alt={title}/>
                <div>
                    <p>{author===null ? "기자없음" : author}</p>
                    <p>{`${year}년 ${month}월 ${day}일`}</p>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

            </a>
        </li>
    )
}

export default NewsArticle;