import {useMemo} from "react";

export const usePagination = (totalPages) => {
    let pages = []
    const result = useMemo(() => {
        for(let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        return pages
    }, [totalPages])
    return result
}