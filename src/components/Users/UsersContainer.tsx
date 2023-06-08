import React from 'react';
import {Users} from "./Users";
import {compose} from "redux";
import {connect} from "react-redux";
import {UsersType} from "../../api/api";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    followTC,
    getUsersTC,
    setCurrentPageAC,
    setToggleIsFollowingProgressAC,
    unFollowTC,
} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

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
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export class UsersContainer extends React.Component<UsersTypeProps> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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