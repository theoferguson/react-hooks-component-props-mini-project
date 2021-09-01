import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    let articleTime;
    if(minutes >= 30) {
        articleTime = (Array((Math.ceil(minutes / 10))+1).join("🍱"))
    } else {
        articleTime = (Array((Math.ceil(minutes / 5))+1).join("☕️"))
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {articleTime} {minutes} minute read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;