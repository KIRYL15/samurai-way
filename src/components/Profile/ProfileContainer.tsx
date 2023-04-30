import React from 'react';
import axios from "axios";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostsType, ProfileType} from "../../redux/type";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & UserProfileTypeProps
export type UserProfileTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
    profile: null| ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '28906'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }
    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent)