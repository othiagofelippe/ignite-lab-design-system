import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';


export interface ITextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: ITextInputRootProps) {
  return (
    <div className=" flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800   w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
      
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'


export interface ITextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: ITextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input'


export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
