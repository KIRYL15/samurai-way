import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {changeNewText, PostsType, state} from "../../../redux/state";

type MyPostsType = {
    postData: PostsType[],
    addPost: (postMessage: string) => void
    //changeNewText:(newText:string)=>void
}

export const MyPosts = (props: MyPostsType) => {
    // let postData = [
    //     {numberOfLikes: 2, postTitle: 'Hi Friends'},
    //     {numberOfLikes: 33, postTitle: 'Hello World'},
    //     {numberOfLikes: 34, postTitle: 'Peace for everyone'},
    //     {numberOfLikes: 6, postTitle: 'Summer is coming'},
    // ]
    let postsElement = props.postData.map((data, index) =>
        <Post key={index} numberOfLikes={data.numberOfLikes} postTitle={data.postTitle}/>)

    //let postMessageRef = React.createRef<HTMLTextAreaElement>() //убрали так как нет необходимости
    let onClickHandler = () => {
        /*if (postMessageRef.current) {*/               //убрали так как нет необходимости
            props.addPost(state.profilePage.newPostText)
            //changeNewText('') //зануление перенесли в бизнес-логику (в стейт)
        /*}*/                                          //убрали так как нет необходимости
        /*let text = newPostElement.current?.value
         props.addPost(newPostElement.current?.value)*/
    }
    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>changeNewText(e.currentTarget.value)
    return (
        <div className={style.postsBlock}><h2>My posts</h2>
            <div>
                {state.profilePage.newPostText}
                <div><textarea
                        value={state.profilePage.newPostText}
                        onChange={onChangeHandler}
                        /*ref={postMessageRef}*/ //убрали так как нет необходимости
                    />
                </div>
                <div>
                    <button onClick={onClickHandler}>Add post
                    </button>
                </div>
            </div>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};