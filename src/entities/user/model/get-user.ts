import { selectors } from "@/shared/store";
import { useSelector } from "react-redux";

export const getUser = () => {
    const user = useSelector(selectors.user.selectUser);

    return user;
};
