import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToForm = () => {
        const formSection = document.getElementById('application-form')
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className="text-2xl md:text-3xl font-extrabold">
                            <span className="text-primary">Mì cay</span>{' '}
                            <span className={isScrolled ? 'text-text-dark' : 'text-white'}>
                                Bosan
                            </span>
                        </span>
                    </motion.a>

                    {/* Desktop CTA */}
                    <motion.button
                        onClick={scrollToForm}
                        className="hidden md:block btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ứng Tuyển Ngay
                    </motion.button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2"
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? 'text-text-dark' : 'text-white'} size={28} />
                        ) : (
                            <Menu className={isScrolled ? 'text-text-dark' : 'text-white'} size={28} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <button
                            onClick={scrollToForm}
                            className="w-full btn-primary"
                        >
                            Ứng Tuyển Ngay
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.header>
    )
}

export default Header
