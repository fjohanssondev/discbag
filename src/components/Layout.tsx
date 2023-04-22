import { ExitIcon } from '@radix-ui/react-icons'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Layout = ({ children, font }: { children: React.ReactNode, font: string}) => {

  const { data: session } = useSession()
  return (
    <>
      <header className="py-6">
        <div className="md:container md:mx-auto px-4 flex justify-between items-center">
          <Link href="/" className={`${font} text-2xl font-bold`}>Discbag</Link>
          {session ? (
            <>
              <div className='flex items-center'>
                <Image src={session?.user?.image || ''} width={40} height={40} alt="" className="rounded-full" />
                <span className='ml-2'>{session.user.name}</span>
                <button className="bg-white ml-4" onClick={() => void signOut()}>
                  <ExitIcon />
                </button>
              </div>
            </>
          ) : (
            <button className="bg-white" onClick={() => void signIn()}>Sign in</button>
          )}
        </div>
      </header>
      <main className={font}>
        {children}
      </main>
    </>
  )
}

export default Layout