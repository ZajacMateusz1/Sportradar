import { useState } from "react";
const useFormField = (validationFn: (value: string) => boolean) => {
  const [value, setValue] = useState<string>("");
  const [didEdit, setDidEdit] = useState<boolean>(false);
  const handleInputChange = (newValue: string) => {
    setValue(newValue);
    setDidEdit(false);
  };
  const handleBlur = () => {
    setDidEdit(true);
  };
  const error: boolean = didEdit && validationFn(value);
  return { value, handleInputChange, handleBlur, error };
};
export default useFormField;
