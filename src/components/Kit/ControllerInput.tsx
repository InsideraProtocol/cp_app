import React, { ForwardedRef, forwardRef, useCallback, useState } from "react";
import { TextInput as RNTextInput } from "react-native";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FieldPath } from "react-hook-form/dist/types";

import { TextInput, TextInputProps } from "../Kit/TextInput";

export type ControllerInputProps<FieldValues> = {
  name: FieldPath<FieldValues>;
  defaultValue?: any;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  message?: string;
  placeholder?: boolean | string;
  disabled?: boolean;
} & Omit<TextInputProps, "placeholder">;

function ControllerInputRef<FieldValues>(
  props: ControllerInputProps<FieldValues>,
  ref: ForwardedRef<RNTextInput>
) {
  const {
    name,
    defaultValue,
    control,
    errors,
    message = "",
    placeholder,
    ...restProps
  } = props;
  const [editing, setEditing] = useState<boolean>(false);

  const handleEditInput = useCallback(() => {
    setEditing((prevState) => !prevState);
  }, []);

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as unknown as any}
              error={(errors?.[name]?.message as unknown as string) ?? message}
              placeholder={
                placeholder === true
                  ? `form.placeholder.${name}`
                  : placeholder || undefined
              }
              {...restProps}
              ref={ref}
            />
          </>
        )}
      />
    </>
  );
}
//
// const ClickableList = React.forwardRef(ControllerInputRef) as <T>(
//   props: ControllerInputProps<T> & {ref?: React.ForwardedRef<RNTextInput>},
// ) => ReturnType<typeof ControllerInputRef>;

export const ControllerInput = forwardRef(ControllerInputRef) as unknown as <T>(
  props: ControllerInputProps<T>,
  ref: React.ForwardedRef<RNTextInput>
) => any;

// export const ControllerInput = (props, ref) => {
//   const {
//     name,
//     defaultValue,
//     control,
//     errors,
//     message = '',
//     placeholder,
//     ...restProps
//   } = props;
//
//   return (
//     <Controller
//       control={control}
//       name={name}
//       defaultValue={defaultValue}
//       render={({field: {onChange, onBlur, value}}) => (
//         <TextInput
//           onChange={onChange}
//           onBlur={onBlur}
//           onChangeText={onChange}
//           value={value as unknown as any}
//           error={(errors?.[name]?.message as unknown as string) ?? message}
//           placeholder={
//             placeholder === true
//               ? `form.placeholder.${name}`
//               : placeholder || undefined
//           }
//           {...restProps}
//         />
//       )}
//     />
//   );
// };
