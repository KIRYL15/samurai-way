import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {UsersType, UserType} from "../../redux/type";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../Common/Preloader/Preloader";
import {
    followAC,
    setCurrentPageAC,
    setToogleIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../redux/users-reducer";
import {userAPI} from "../../api/api";

export type UsersTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    usersPage: UsersType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (page: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toogleIsFetching: (isFetching: boolean) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export class UsersContainer extends React.Component<UsersTypeProps> {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items);
            })
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
                />
            </>)
    }
}

export default connect(mapStateToProps,
    {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setUsersTotalCountAC,
        toogleIsFetching: setToogleIsFetchingAC
    }
)(UsersContainer)