import { Input, FormControl, FormErrorMessage, Text } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import {
  UseFormGetValues,
  UseFormRegister,
  FieldErrors,
  FieldValues,
} from 'react-hook-form/dist/types';

import { isNationalID } from 'lib';

export interface NationalIDInputProps {
  errors: FieldErrors;
  validation: object;
  register: UseFormRegister<FieldValues>;
}

const NationalIDInput = ({
  errors,
  validation,
  register,
}: NationalIDInputProps) => {
  return (
    <FormControl
      isInvalid={errors.nationalId || errors?.nationalId?.type === 'validate'}
    >
      <Input
        as={InputMask}
        _focus={{ borderColor: 'primary' }}
        mask="9-9999-99999-99-9"
        maskChar={null}
        placeholder="X-XXXX-XXXXX-XX-X"
        id="nationalId"
        {...register('nationalId', {
          ...validation,
          validate: isNationalID,
        })}
      />
      <FormErrorMessage>
        {(errors.nationalId || errors?.nationalId?.type === 'validate') && (
          <Text fontStyle="italic">Please input your valid national ID</Text>
        )}
      </FormErrorMessage>
    </FormControl>
  );
};

export default NationalIDInput;
