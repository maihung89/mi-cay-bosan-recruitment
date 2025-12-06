import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-text-dark text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-extrabold mb-4">
                            <span className="text-primary">Mì cay</span> Bosan
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Chuỗi nhà hàng mì cay hàng đầu Việt Nam với hương vị đậm đà,
                            không gian hiện đại và dịch vụ chuyên nghiệp.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Facebook size={20} />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Instagram size={20} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold mb-4">Liên Hệ Tuyển Dụng</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">Hotline</p>
                                    <a href="tel:0987918119" className="text-gray-400 hover:text-primary transition-colors">
                                        0987 918 119
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href="mailto:tuyendung@micaybosan.vn" className="text-gray-400 hover:text-primary transition-colors">
                                        tuyendung@micaybosan.vn
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">Thời Gian Hỗ Trợ</p>
                                    <p className="text-gray-400">8:00 - 22:00 (Hàng ngày)</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold mb-4">Địa Chỉ Cửa Hàng</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400">
                                        Số 295 Tô Hiệu, Nghĩa Đô, Hà Nội
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-bold mb-4">Liên Kết Nhanh</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#job-openings" className="text-gray-400 hover:text-primary transition-colors">
                                    Vị trí tuyển dụng
                                </a>
                            </li>
                            <li>
                                <a href="#application-form" className="text-gray-400 hover:text-primary transition-colors">
                                    Nộp hồ sơ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                    Về Mì cay Bosan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                    Chính sách nhân sự
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Mì cay Bosan. Tất cả quyền được bảo lưu.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Thiết kế với <span className="text-primary">♥</span> cho đội ngũ Bosan
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
