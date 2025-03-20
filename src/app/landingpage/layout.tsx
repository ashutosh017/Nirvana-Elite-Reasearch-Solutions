import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nirvana Elite Research Solutions - PhD Assistance & Academic Support",
  description:
    "Expert assistance for PhD students with synopsis writing, research methodology, and academic assignments.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div lang="en" suppressHydrationWarning>
      <div className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppChat />
          <EnhancedChatbot/>
        </ThemeProvider>
      </div>
    </div>
  )
}



import { ThemeProvider } from "./components/theme-provider"
import { WhatsAppChat } from "./components/whatsapp-chat"
import EnhancedChatbot from "../_components/Chatbot"

