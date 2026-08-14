import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">

            <header>
                <Navbar />
            </header>

            <main className="flex-1">
                {children}
            </main>

            <Footer />

        </div>
    );
}