import dynamic from 'next/dynamic'
const MobileAnalyzer = dynamic(() => import('../components/MobileAnalyzer'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50">
      <MobileAnalyzer />
    </main>
  )
}
