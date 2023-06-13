import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";

function useBookContext() {
    return useContext(BooksContext);
}

export {useBookContext};
