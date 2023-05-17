import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../Common/Preloader/Preloader";
import {
    followTC,
    getUsersTC,
    setCurrentPageAC,
    setToggleIsFollowingProgressAC,
    unFollowTC,
} from "../../redux/users-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {UsersType} from "../../api/api";

export type UsersTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    usersPage: UsersType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>,
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setCurrentPage: (page: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export class UsersContainer extends React.Component<UsersTypeProps> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        /*this.props.setCurrentPage(pageNumber);

        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize) 
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            })*/
    }

    render() {
        return (
            <> {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>)
    }
}

// export default connect(mapStateToProps, {follow: followSuccessAC, unFollow: unFollowSuccessAC, setCurrentPage: setCurrentPageAC, toggleIsFollowingProgress: setToggleIsFollowingProgressAC, getUsers: getUsersThunkCreator})(UsersContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: followTC,
        unFollow: unFollowTC,
        setCurrentPage: setCurrentPageAC,
        toggleIsFollowingProgress: setToggleIsFollowingProgressAC,
        getUsers: getUsersTC
    }),
    withAuthRedirect
)(UsersContainer)