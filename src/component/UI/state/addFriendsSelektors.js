export const getUsersData = (state) => {
    return state.addFriendsPage.usersData
}

export const getPageSize = (state) => {
    return  state.addFriendsPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.addFriendsPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.addFriendsPage.currentPage
}

export const getIsFetching = (state) => {
    return state.addFriendsPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.addFriendsPage.followingInProgress
}