import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const SignInSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (values): void => {
    console.log(values);
  };

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={6}>
          <Input
            name="email"
            id="email"
            error={errors.email}
            type="email"
            label="E-mail"
            {...register('email')}
          />
          <Input
            name="password"
            id="password"
            error={errors.password}
            type="password"
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
