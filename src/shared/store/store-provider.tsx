"use client";
import { FC, PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppStore, makeStore, persistor, PesistorType } from "./store";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
    const storeRef = useRef<AppStore>(undefined);
    const persistorRef = useRef<PesistorType>(undefined);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    if (!persistorRef.current) {
        persistorRef.current = persistor();
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    );
};
