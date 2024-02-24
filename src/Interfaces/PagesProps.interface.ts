import { Dispatch, SetStateAction } from "react";

export interface pageProps {
    setFooterText: Dispatch<SetStateAction<string>>,
}