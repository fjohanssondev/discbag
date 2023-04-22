import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const Layout = ({ children, font }: { children: React.ReactNode, font: string}) => {

  const { data: session } = useSession()
  return (
    <>
      <header className="py-6">
        <div className="md:container md:mx-auto px-4 flex justify-between items-center">
          <Link href="/" className={`${font} text-2xl font-bold`}>Discbag</Link>
          {session ? (
            <button className="bg-white" onClick={() => void signOut()}>Sign out</button>
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