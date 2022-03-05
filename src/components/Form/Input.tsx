import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as Inputchakra,
  InputProps as InputChakraProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputChakraProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, error = null, ...rest }: InputProps, ref): JSX.Element => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Inputchakra
        name={name}
        type="email"
        id="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      <FormErrorMessage>{!!error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

// Made ref to using on children components
export const Input = forwardRef(InputBase);
