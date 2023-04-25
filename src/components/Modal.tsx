import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
  children: React.ReactNode;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ children, buttonText }) => (
  <Dialog.Root>
    <Dialog.Trigger className='flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 text-sm text-indigo-50 px-4 py-2 rounded' asChild>
      <button>{buttonText}</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
      <Dialog.Content className='fixed p-4 bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm'>
        {children}
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;