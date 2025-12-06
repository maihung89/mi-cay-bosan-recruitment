import Header from './components/Header'
import Hero from './components/Hero'
import WhyJoinUs from './components/WhyJoinUs'
import JobOpenings from './components/JobOpenings'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <Hero />
                <WhyJoinUs />
                <JobOpenings />
                <ApplicationForm />
            </main>
            <Footer />
        </div>
    )
}

export default App
