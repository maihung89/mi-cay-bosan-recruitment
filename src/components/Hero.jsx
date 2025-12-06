import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import heroBackground from '../hinh-nen.jpg'

const Hero = () => {
    const scrollToJobs = () => {
        const jobsSection = document.getElementById('job-openings')
        if (jobsSection) {
            jobsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            {/* Decorative Elements */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Badge */}
                    <motion.span
                        className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        🔥 Đang Tuyển Dụng
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Gia Nhập Đại Gia Đình
                        <br />
                        <span className="text-primary">Mì Cay Bosan</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Nơi đam mê ẩm thực bùng cháy cùng cơ hội phát triển không giới hạn.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        onClick={scrollToJobs}
                        className="btn-accent text-lg px-8 py-4 inline-flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Xem Vị Trí Tuyển Dụng
                        <ChevronDown className="animate-bounce" size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-3 bg-white rounded-full"
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
