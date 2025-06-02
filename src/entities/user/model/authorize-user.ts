import { actions } from "@/shared/store";
import { useAppDispatch } from "@/shared/store/hooks";
import { UserType } from "@/shared/store/user";

/**
 * Хук для авторизации пользователя в приложении.
 * Предоставляет метод `authorize`, который сохраняет данные пользователя в Redux-хранилище.
 *
 * @example
 * const { authorize } = useAuthorizeUser();
 * authorize({ name: 'John' });
 *
 * @returns {Object} Объект с методом `authorize` для авторизации пользователя.
 * @property {function} authorize - Функция, принимающая данные пользователя и сохраняющая их в хранилище.
 */
export const useAuthorizeUser = () => {
    const dispatch = useAppDispatch();

    const authorize = (user: UserType) => {
        dispatch(actions.user.addUser(user));
    };

    return { authorize };
};
