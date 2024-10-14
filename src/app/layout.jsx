import "../styles/global.sass"
import Header from '@/components/header/index.jsx'
export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body className="page">
        <Header />
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}
