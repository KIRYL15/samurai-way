import {addPostAC, ProfileReducer} from "./profile-reducer";
import {v1} from "uuid";


it("new post should be added", () => {
    //1.test data
    let action = addPostAC("text for test")
    let state = {
        newPostText: '',
        posts: [
            {id: v1(), numberOfLikes: 2, postTitle: 'Hi Friends'},
            {id: v1(), numberOfLikes: 33, postTitle: 'Hello World'},
            {id: v1(), numberOfLikes: 34, postTitle: 'Peace for everyone'},
            {id: v1(), numberOfLikes: 6, postTitle: 'Summer is coming'},
        ],
        profile: null,
        status: "",
    }
    //2.action
    let newState = ProfileReducer(state, action)
    //3.expectation
    expect(newState.posts.length).toBe(5)
})
