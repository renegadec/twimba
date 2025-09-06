import './style.css'
import { v4 as uuidv4 } from 'uuid';

// Import the data
import { tweetsData } from '../public/assets/data/data.js';

const tweetInput = document.getElementById('tweet-input')

document.addEventListener('click', function(e){
    if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }

    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }

    if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }

    if(e.target.id === "tweet-btn"){
        handleTweetBtnClick()
    }

    if(e.target.dataset.ellipsis) {
        handleEllipsis(e.target.dataset.ellipsis)
    }

    if(e.target.dataset.delete){
        handleDelete(e.target.dataset.delete)
    }
})

function handleTweetBtnClick(){
    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@web3Dev 💎`,
            profilePic: `/assets/images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: `${tweetInput.value}`,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4(),
        })
        tweetInput.value = ''
        render()
    }

}

function handleReplyClick(replyID) {
    document.getElementById(`replies-${replyID}`).classList.toggle('hidden')
}

function handleLikeClick(tweetId){ 
    
    
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    if(targetTweetObj.isLiked){
        targetTweetObj.likes--
    }else{
        targetTweetObj.likes++

    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render()
}

function handleEllipsis(ellipsisId){
   document.getElementById(`delete-btn-${ellipsisId}`).classList.toggle('show-btn')
}

function handleDelete(deleteId) {
    
    const index = tweetsData.findIndex(tweet => tweet.uuid === deleteId);
    
    if (index !== -1) {
        tweetsData.splice(index, 1); 
        render(); 
    }
    render()
}


function getFeedHtml(){
    let feedHtml = ``

    tweetsData.forEach(function(tweet){
        let likeIconClass = ''

        if(tweet.isLiked){
            likeIconClass = 'liked'
        }

        let retweetIconClass = ''

        if(tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }

        let repliesHtml = ''

        if(tweet.replies.length > 0) {
            tweet.replies.forEach(function(reply){
                repliesHtml += `
                    <div class="tweet-reply">
                        <div class="tweet-inner">
                            <img src="${reply.profilePic}" class="profile-pic">
                                <div>
                                    <p class="handle">${reply.handle}</p>
                                    <p class="tweet-text">${reply.tweetText}</p>
                                </div>
                            </div>
                    </div>
                `
            })
        }
    
    
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        
        <div>
           <div class="tweet-head">
                <p class="handle">${tweet.handle}</p>
                <div class="delete-btn-container">
                    <i class="fa-solid fa-ellipsis-vertical" id="ellipsis" data-ellipsis="${tweet.uuid}"></i>
                    <div class="delete-btn show-btn" id="delete-btn-${tweet.uuid}" data-delete="${tweet.uuid}">Delete</div>
                </div>
                
           </div>
            
            <p class="tweet-text">${tweet.tweetText}</p>
            
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                        data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                        data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>  
</div>
`
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()