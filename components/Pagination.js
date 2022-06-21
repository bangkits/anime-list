/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Stack, Pagination } from "@mui/material"

const paginationWrapper = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginBottom: 30,
  marginTop: 30
});

const CustomPagination = (props) => {
  const { count, page, handlePageChange } = props;

  return (
    <div css={paginationWrapper}>
      <Stack spacing={6}>
        <Pagination count={count} page={page} onChange={handlePageChange} />
      </Stack>
    </div>
  )
};

export default CustomPagination;