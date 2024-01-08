import Link from "next/link"
import React from "react"

const AdminPanel = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      Hello World{" "}
      <Link href="/" className="text-blue-600 underline font-semibold">
        Go back home
      </Link>
    </div>
  )
}

export default AdminPanel
