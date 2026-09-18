import Navbar from '../components/navbar'
import Footer from '../components/footer'

const PublicLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-text">
            <Navbar />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default PublicLayout