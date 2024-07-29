
import Navigation from "../components/navigation"

export const metadata = {
  title: {
    template: "%s | Core"
  },
  description: 'Website for Core',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
