import React from 'react';
import {compose} from "redux";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileType} from "../../api/api";

type PathParamsType = {
    userId: string,
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & UserProfileTypeProps
export type UserProfileTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = { profile: null | ProfileType, status: string }
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus:(status: string) => void,
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '21642'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        //if (!props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div><Profile {...this.props}/></div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//export const withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(ProfileContainer)))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        updateStatus: updateStatusThunkCreator,
        getStatus:getUserStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
