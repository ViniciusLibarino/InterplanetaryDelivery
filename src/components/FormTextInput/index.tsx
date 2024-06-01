import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {Text, TextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

type LabelProps = {
  label: string;
  errorMessage?: string;
};

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType> & LabelProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              placeholder={name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...textInputProps}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </>
        )}
      />
    </>
  );
}
