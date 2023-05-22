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
import {ProfileType} from "../../api/api";

type PathParamsType = {
    userId: any,
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & UserProfileTypeProps
export type UserProfileTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile: null | ProfileType,
    status: string,
    authUserId:null | number,
    isAuth:boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: null | number) => void,
    getStatus: (userId: null | number) => void,
    updateStatus:(status: string) => void,
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            //debugger
            userId = this.props.authUserId
            if (!userId){
                this.props.history.push('./login')
            }
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
        status: state.profilePage.status,
        authUserId:state.auth.id,
        isAuth:state.auth.isAuth
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
    
)(ProfileContainer)
