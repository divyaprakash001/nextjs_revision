import {LikeButton} from "@/components/LikeButton"

export default function PostPage(){
    console.log("post-page")
    return (
        <>
            <p>This is the post page i want</p>
            <LikeButton likes={10}/>
        </>
    )
}