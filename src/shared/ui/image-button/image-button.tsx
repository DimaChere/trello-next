import classNames from "classnames";
import { getClasses } from "./styles/get-classes";

type ImageButtonType = {
    icon: React.ReactNode;
    additionalStyles?: string;
    onClickFunction?: (e: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ImageButton: React.FC<ImageButtonType> = ({
    icon,
    additionalStyles = "",
    onClickFunction,
    ...props
}) => {
    const { cnButton } = getClasses();

    return (
        <button
            onClick={classNames.bind(cnButton, additionalStyles)}
            className={cnButton}
            {...props}
        >
            {icon}
        </button>
    );
};
