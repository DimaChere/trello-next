import * as user from "./user";

export const selectors = {
    user: {
        selectUser: user.selectUser,
    },
};

export const actions = {
    user: {
        addUser: user.addUser,
        removeUser: user.removeUser,
    },
};
