import classNames from "classnames/bind";
import styles from "./image-button.module.sass";

const cn = classNames.bind(styles);

export const getClasses = () => {
    const cnButton = cn("button");

    const cnButtonApplyChanges = cn("button-apply-changes");

    return {
        cnButton,
        cnButtonApplyChanges,
    };
};
