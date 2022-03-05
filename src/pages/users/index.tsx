import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';

export default function Users(): JSX.Element {
  const isWiredScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha" overflowX="scroll">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8">Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Henrique Vieira</Text>
                    <Text fontSize="sm" color="gray.300">
                      henriquevieira@alu.ufc.br
                    </Text>
                  </Box>
                </Td>
                <Td>{isWiredScreen ? '19 de abril, 2021' : '19/04/2021'}</Td>
                <Td>
                  <HStack>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={
                        <Icon as={MdOutlineRemoveCircleOutline} fontSize="16" />
                      }
                    >
                      Remover
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Henrique Vieira</Text>
                    <Text fontSize="sm" color="gray.300">
                      henriquevieira@alu.ufc.br
                    </Text>
                  </Box>
                </Td>
                <Td>{isWiredScreen ? '19 de abril, 2021' : '19/04/2021'}</Td>
                <Td>
                  <HStack>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={
                        <Icon as={MdOutlineRemoveCircleOutline} fontSize="16" />
                      }
                    >
                      Remover
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Henrique Vieira</Text>
                    <Text fontSize="sm" color="gray.300">
                      henriquevieira@alu.ufc.br
                    </Text>
                  </Box>
                </Td>
                <Td>{isWiredScreen ? '19 de abril, 2021' : '19/04/2021'}</Td>
                <Td>
                  <HStack>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={
                        <Icon as={MdOutlineRemoveCircleOutline} fontSize="16" />
                      }
                    >
                      Remover
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
