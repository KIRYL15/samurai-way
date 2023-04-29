import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { ProfileType} from "../../redux/type";

export type UserProfileTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
class ProfileContainer extends React.Component<UserProfileTypeProps > {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }
    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        profile: state.profilePage.profile
    }

}
export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer)