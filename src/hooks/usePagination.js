import {useMemo} from "react";

export const usePagination = (totalPages) => {
    const result = useMemo(() => {
        return new Array(totalPages).fill().map((_,i) => ++i)}, [totalPages])
    return result
}