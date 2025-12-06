import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Phone, Briefcase, CheckCircle } from 'lucide-react'

const positions = [
    { value: '', label: 'Chọn vị trí ứng tuyển' },
    { value: 'manager', label: 'Quản Lý Cửa Hàng' },
    { value: 'kitchen', label: 'Nhân Viên Bếp' },
    { value: 'server', label: 'Nhân Viên Phục Vụ' },
    { value: 'other', label: 'Vị trí khác' },
]

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        position: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ fullName: '', phone: '', position: '' })
        }, 3000)
    }

    return (
        <section id="application-form" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Bắt Đầu Ngay
                    </span>
                    <h2 className="section-title mt-2 mb-4">
                        Form <span className="text-primary">Ứng Tuyển</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Điền thông tin của bạn và chúng tôi sẽ liên hệ trong vòng 24 giờ
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                                >
                                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-text-dark mb-2">
                                    Gửi Thành Công! 🎉
                                </h3>
                                <p className="text-gray-600">
                                    Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ sớm nhất!
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-text-dark mb-2"
                                    >
                                        Họ và Tên <span className="text-primary">*</span>
                                    </label>
                                    <div className="relative">
                                        <User
                                            size={20}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nguyễn Văn A"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-text-dark mb-2"
                                    >
                                        Số Điện Thoại <span className="text-primary">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone
                                            size={20}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="0912 345 678"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Position */}
                                <div>
                                    <label
                                        htmlFor="position"
                                        className="block text-sm font-medium text-text-dark mb-2"
                                    >
                                        Vị Trí Ứng Tuyển <span className="text-primary">*</span>
                                    </label>
                                    <div className="relative">
                                        <Briefcase
                                            size={20}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />
                                        <select
                                            id="position"
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white cursor-pointer"
                                        >
                                            {positions.map((pos) => (
                                                <option key={pos.value} value={pos.value}>
                                                    {pos.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            />
                                            Đang Gửi...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Gửi Thông Tin
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ApplicationForm
