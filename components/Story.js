export default function Story(story) {
    // console.log(story);
    return `
    <div class="story">
    <div>
    <span class="gray">${story.index || ""}</span>
    <span class="upvote">▲</span>
    <a href="${story.url}">${story.title}</a>
    <span>(${story.domain})
    </div>
    <div class="gray">
    ${story.point} points by ${story.user} ${story.time_ago}
    |
    <a href="#/item?id=${story.id}">
    ${story.comments_count} comments
    </a>
    |
    <span class="favorite" data-story='${JSON.stringify(story)}'>
    <img class="heart" src="https://icon.now.sh/heart/ccc">
    ${story.isFavorite ? "Remove from Favorites" : "Add To Favorites"}
    </span>
    </div>`

}