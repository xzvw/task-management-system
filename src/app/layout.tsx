import 'normalize.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Task Management System',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
