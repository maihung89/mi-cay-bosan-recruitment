import { motion } from 'framer-motion'
import { DollarSign, Users, TrendingUp } from 'lucide-react'

const benefits = [
    {
        icon: DollarSign,
        title: 'Thu Nhập Hấp Dẫn',
        description: 'Lương, thưởng cạnh tranh và các khoản phụ cấp theo chính sách.',
        color: 'bg-green-500',
    },
    {
        icon: Users,
        title: 'Môi Trường Năng Động',
        description: 'Đồng đội trẻ trung, nhiệt huyết, luôn sẵn sàng hỗ trợ nhau.',
        color: 'bg-blue-500',
    },
    {
        icon: TrendingUp,
        title: 'Lộ Trình Rõ Ràng',
        description: 'Cơ hội được đào tạo và thăng tiến lên các vị trí quản lý.',
        color: 'bg-primary',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

const WhyJoinUs = () => {
    return (
        <section className="py-20 bg-white">
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
                        Vì Sao Nên Chọn Chúng Tôi
                    </span>
                    <h2 className="section-title mt-2 mb-4">
                        Tại Sao Chọn <span className="text-primary">Bosan</span>?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Chúng tôi không chỉ tạo ra những bát mì ngon mà còn tạo ra môi trường làm việc tuyệt vời
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card group text-center"
                        >
                            {/* Icon */}
                            <motion.div
                                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.4 }}
                            >
                                <benefit.icon size={32} />
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-text-dark mb-3">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default WhyJoinUs
