import * as Toasty from '@radix-ui/react-toast';

interface Toast {
  title: string;
  description: string;
  disc?: string;
}

const Toast: React.FC<Toast> = ({ title, description, disc }) => {
  return (
    <Toasty.Provider swipeDirection="right">
    <Toasty.Root className="bg-indigo-700 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut">
      <Toasty.Title className="[grid-area:_title] text-white mb-[5px] font-medium">
        {title}
      </Toasty.Title>
      <Toasty.Description className="[grid-area:_description] font-light m-0 text-indigo-100 text-[13px] leading-[1.3]">
        <span className='font-bold text-white'>{disc}</span> {description}
      </Toasty.Description>
      <Toasty.Close />
    </Toasty.Root>
    <Toasty.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
  </Toasty.Provider>
  )
}

export default Toast