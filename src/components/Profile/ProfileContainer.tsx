import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostsType, ProfileType} from "../../redux/type";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfileThunkCreator, setUserProfileAC} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
type PathParamsType = {
    userId: string,
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & UserProfileTypeProps
export type UserProfileTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '28906'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        //if (!props.isAuth) return <Redirect to={'/login'}/>
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
export default withAuthRedirect(connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
    getUserProfile: getUserProfileThunkCreator
})(WithUrlDataContainerComponent))