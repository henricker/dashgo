import { Button } from '@chakra-ui/react';

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps): JSX.Element {
  return (
    <>
      {isCurrent ? (
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          {number}
        </Button>
      ) : (
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
        >
          {number}
        </Button>
      )}
    </>
  );
}
