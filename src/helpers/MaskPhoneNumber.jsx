import { IMaskMixin } from 'react-imask';
import { Input } from '../page/AuthPage/RenderForm.styled';
import { forwardRef } from 'react';

const MaskedStyledInput = IMaskMixin(
  ({ CustomComponent = Input, inputRef, ...props }) => (
    <CustomComponent {...props} ref={inputRef} />
  ),
);

const MaskedInput = forwardRef(function MaskedInput({ ...props }, ref) {
  return (
    <MaskedStyledInput
      mask="+38(#*0)000-00-00"
      definitions={{
        '#': /[0]/,
        '*': /[6,7,8,9,5]/,
      }}
      radix="."
      inputRef={ref}
      overwrite
      {...props}
    />
  );
});

export default MaskedInput;
