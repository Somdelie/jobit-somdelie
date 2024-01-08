import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      Hello World{" "}
      <Link
        href="/admin-panel"
        className="text-blue-600 underline font-semibold">
        Admin-panel
      </Link>
    </div>
  )
}
