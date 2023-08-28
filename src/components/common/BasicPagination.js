import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({
  count,
  currentPage,
  handlePageChange,
}) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count} // 마지막 페이지 번호
        page={currentPage} //현재 페이지
        onChange={handlePageChange} //클릭 이벤트
      />
    </Stack>
  );
}
