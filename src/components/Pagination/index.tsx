import { Box, Stack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export function Pagination(): JSX.Element {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      justify="space-between"
      mt="8"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack spacing="2" direction="row">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
}
