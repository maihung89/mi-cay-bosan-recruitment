import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Clock, MapPin, ArrowRight, ChevronDown, ChevronUp, DollarSign, User } from 'lucide-react'

const jobs = [
    {
        id: 1,
        title: 'Quản Lý Cửa Hàng',
        type: 'Toàn thời gian',
        location: 'Số 295 Tô Hiệu, Nghĩa Đô, Hà Nội',
        salary: '10.000.000 - 15.000.000 VNĐ + Thưởng KPI',
        reportsTo: 'Chủ đầu tư',
        tags: ['Quản lý', 'Kinh nghiệm 1-2 năm', 'F&B'],
        featured: true,
        description: {
            responsibilities: [
                {
                    category: 'Vận hành & Quản lý chất lượng (Operations & QSC)',
                    note: 'Đây là yếu tố sống còn của mô hình mì cay do tính chất sản phẩm cần đồng nhất về "cấp độ cay" và nước dùng.',
                    items: [
                        'Kiểm soát QSC (Quality - Service - Cleanliness): Đảm bảo cửa hàng luôn đạt chuẩn về vệ sinh, chất lượng món ăn (đặc biệt là độ tươi của hải sản, kim chi) và thái độ phục vụ.',
                        'Quản lý bếp (Kitchen QC): Kiểm tra ngẫu nhiên định lượng và vị nước dùng đầu ca/giữa ca. Đảm bảo 7 cấp độ cay chuẩn xác theo công thức.',
                        'Giải quyết sự cố: Xử lý trực tiếp các phàn nàn của khách hàng về món ăn hoặc thái độ nhân viên ngay tại sàn.'
                    ]
                },
                {
                    category: 'Quản lý Tài chính & Hàng hóa (Finance & Inventory)',
                    items: [
                        'Kiểm soát COGS (Cost of Goods Sold): Chịu trách nhiệm về tỷ lệ giá vốn hàng bán. Kiểm soát hủy/hỏng (waste) của các nhóm hàng dễ hỏng như bò Mỹ, hải sản, rau nấm.',
                        'Đặt hàng (Ordering): Dự báo sức bán (forecast) để lên đơn đặt hàng với kho tổng hoặc nhà cung cấp, đảm bảo không đứt hàng vào giờ cao điểm.',
                        'Quản lý doanh thu: Chịu trách nhiệm nộp tiền mặt, đối soát bill, báo cáo doanh thu daily/weekly cho ASM.'
                    ]
                },
                {
                    category: 'Quản lý Nhân sự (People Management)',
                    items: [
                        'Sắp xếp ca (Scheduling): Phân bổ định biên nhân sự hợp lý giữa Full-time và Part-time, tối ưu chi phí nhân sự (Labor cost) không vượt quá 8-12% doanh thu.',
                        'Đào tạo & Tuyển dụng: Trực tiếp phỏng vấn nhân viên phục vụ/bếp. Đào tạo hội nhập và quy trình order/bưng bê an toàn.'
                    ]
                }
            ],
            requirements: [
                'Kinh nghiệm: Tối thiểu 1-2 năm ở vị trí Quản lý/Giám sát trong ngành F&B (ưu tiên mô hình chuỗi như Golden Gate, Highlands hoặc các chuỗi mì cay Sasin, Seoul...).',
                'Hiểu biết về An toàn vệ sinh thực phẩm (bắt buộc với mô hình tươi sống).',
                'Kỹ năng sử dụng phần mềm POS (iPOS) và Excel cơ bản để làm báo cáo.',
                'Có tư duy về chi phí (Cost-mindset) và định hướng kết quả (Result-oriented).',
                'Độ tuổi: Thường từ 22 - 35 tuổi để đảm bảo sức khỏe và sự nhanh nhạy trong môi trường áp lực cao.'
            ]
        }
    },
    {
        id: 2,
        title: 'Nhân Viên Phục Vụ',
        type: 'Fulltime / Parttime',
        location: 'Số 295 Tô Hiệu, Nghĩa Đô, Hà Nội',
        salary: '22.000 – 25.000đ/giờ',
        tags: ['Không yêu cầu kinh nghiệm', 'Linh hoạt', 'Sinh viên'],
        featured: false,
        description: {
            overview: 'Thu nhập thực tế có thể tăng thêm từ thưởng, phụ cấp và tip (nếu có). Mức lương phù hợp mặt bằng nhân viên phục vụ F&B bình dân hiện nay.',
            responsibilities: [
                {
                    category: 'Mô tả công việc',
                    items: [
                        'Đón tiếp, hướng dẫn khách vào bàn, đưa menu và tư vấn món mì cay/phần ăn phù hợp.',
                        'Nhận order của khách, ghi gọi món chính xác theo số bàn và cấp độ cay.',
                        'Phục vụ món ăn, đồ uống nhanh chóng, đảm bảo an toàn khi bưng bê tô mì nóng.',
                        'Hỗ trợ setup/bày trí bàn trước ca, thu dọn và vệ sinh khu vực bàn ghế sau khi khách dùng xong.',
                        'Giữ gìn vệ sinh khu vực làm việc: sàn, quầy phục vụ, khu vực tự phục vụ (topping, khăn giấy…).',
                        'Phối hợp cùng thu ngân/bếp trong giờ cao điểm để đảm bảo lên món đúng, đủ và đúng bàn.',
                        'Thực hiện các công việc khác theo phân công của Quản lý ca/Cửa hàng trưởng.'
                    ]
                },
                {
                    category: 'Thời gian làm việc',
                    items: [
                        'Fulltime: Làm việc 8 giờ/ngày, xoay ca sáng/chiều/tối theo sắp xếp của cửa hàng.',
                        'Parttime: Tối thiểu 4 giờ/ca, ưu tiên làm được ca tối và cuối tuần; linh hoạt sắp ca theo lịch học/lịch cá nhân.',
                        'Ưu tiên ứng viên có thể làm việc lâu dài, không nghỉ đột xuất trong giờ cao điểm (tối, cuối tuần, lễ).'
                    ]
                }
            ],
            requirements: [
                'Nhanh nhẹn, trung thực là yêu cầu bắt buộc; có tinh thần trách nhiệm, đi làm đúng giờ.',
                'Thái độ vui vẻ, lịch sự, biết lắng nghe và hỗ trợ khách hàng.',
                'Sức khỏe tốt, chịu được môi trường đông khách và có thể đứng trong thời gian dài.',
                'Không yêu cầu kinh nghiệm, được đào tạo khi nhận việc; ưu tiên ứng viên đã từng làm F&B/phục vụ.',
                'Phù hợp với sinh viên, người cần tăng thu nhập, mong muốn lịch làm linh hoạt.'
            ],
            benefits: [
                'Thu nhập cạnh tranh theo giờ, thanh toán đúng hẹn; cơ hội tăng lương theo đánh giá hiệu quả làm việc.',
                'Được training quy trình phục vụ, kỹ năng giao tiếp khách hàng, làm việc nhóm.',
                'Môi trường làm việc trẻ trung, thân thiện; cơ hội lên Ca trưởng/Phó quản lý cho ứng viên gắn bó và làm việc tốt.',
                'Có thể xem xét hỗ trợ bữa ăn ca.'
            ]
        }
    },
    {
        id: 3,
        title: 'Nhân Viên Phụ Bếp',
        type: 'Fulltime / Parttime',
        location: 'Số 295 Tô Hiệu, Nghĩa Đô, Hà Nội',
        salary: '22.000 – 25.000đ/giờ',
        reportsTo: 'Bếp chính / Cửa hàng trưởng',
        tags: ['Không yêu cầu kinh nghiệm', 'Đào tạo nghề bếp', 'Cơ hội thăng tiến'],
        featured: false,
        description: {
            responsibilities: [
                {
                    category: 'Sơ chế nguyên liệu (Prep work)',
                    items: [
                        'Sơ chế, rửa sạch và cắt thái các loại rau nấm (bông cải, bắp cải, kim chi...), các loại thịt và hải sản theo đúng quy cách và định lượng của cửa hàng.',
                        'Chuẩn bị các loại topping (xúc xích, cá viên, bò viên) sẵn sàng cho giờ cao điểm.'
                    ]
                },
                {
                    category: 'Hỗ trợ ra món (Cooking Support)',
                    items: [
                        'Sắp xếp topping vào thố đất (đảm bảo đúng định lượng: bao nhiêu gram bò, bao nhiêu con tôm) để Bếp chính nấu.',
                        'Hỗ trợ trụng mì, nấu các món ăn kèm (kimbap, takoyaki...) nếu được Bếp chính hướng dẫn và phân công.'
                    ]
                },
                {
                    category: 'Vệ sinh & Quản lý bếp (Hygiene & Cleaning)',
                    items: [
                        'Rửa dọn: Phụ trách rửa thố đất, dụng cụ nấu nướng và chén bát trong ca làm việc (đặc thù thố mì cay rất nặng và dễ vỡ, cần cẩn thận).',
                        'Giữ gìn vệ sinh khu vực bếp, tủ bảo ôn, bồn rửa luôn sạch sẽ, khô ráo để đảm bảo An toàn vệ sinh thực phẩm.'
                    ]
                },
                {
                    category: 'Thời gian làm việc',
                    items: [
                        'Fulltime: 8 - 10 tiếng/ngày (xoay ca gãy hoặc ca thẳng tùy sắp xếp).',
                        'Parttime: Đăng ký theo ca (4 - 6 tiếng/ca), ưu tiên làm được các buổi tối và ngày cuối tuần (T7, CN).'
                    ]
                }
            ],
            requirements: [
                'Nhanh nhẹn, trung thực và có sức khỏe tốt (do môi trường bếp nóng và phải đứng liên tục).',
                'Sạch sẽ: Tác phong gọn gàng, móng tay cắt ngắn, tuân thủ quy định đội mũ/đeo tạp dề khi làm việc.',
                'Tinh thần học hỏi: Chịu khó lắng nghe hướng dẫn của Bếp chính, không tự ý thay đổi công thức.',
                'Không yêu cầu bằng cấp hay kinh nghiệm (sẽ được đào tạo), nhưng ưu tiên ứng viên đã từng làm phụ bếp hoặc tạp vụ.'
            ],
            benefits: [
                'Lương trả theo giờ làm việc thực tế + Thưởng doanh số (nếu có) hoặc thưởng chuyên cần.',
                'Được đào tạo nghề bếp căn bản: cách sơ chế, cách bảo quản thực phẩm, quy trình nấu mì cay.',
                'Môi trường làm việc công bằng, có cơ hội thăng tiến lên Bếp chính nếu tay nghề tốt và gắn bó lâu dài.'
            ]
        }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

const JobOpenings = () => {
    const [expandedJob, setExpandedJob] = useState(null)

    const scrollToForm = () => {
        const formSection = document.getElementById('application-form')
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const toggleExpand = (jobId) => {
        setExpandedJob(expandedJob === jobId ? null : jobId)
    }

    return (
        <section id="job-openings" className="py-20 bg-gray-50">
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
                        Cơ Hội Việc Làm
                    </span>
                    <h2 className="section-title mt-2 mb-4">
                        Các Vị Trí <span className="text-primary">Đang Tuyển</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Khám phá các vị trí phù hợp với bạn và bắt đầu hành trình mới cùng Bosan
                    </p>
                </motion.div>

                {/* Job Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            variants={itemVariants}
                            className={`card relative overflow-hidden ${job.featured ? 'border-2 border-primary' : 'border border-gray-200'
                                }`}
                        >
                            {/* Featured Badge */}
                            {job.featured && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    Hot 🔥
                                </div>
                            )}

                            <div className="flex flex-col gap-4">
                                {/* Job Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    {/* Job Info */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-text-dark mb-2">
                                            {job.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={16} className="text-primary" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={16} className="text-primary" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <DollarSign size={16} className="text-primary" />
                                                {job.salary}
                                            </span>
                                            {job.reportsTo && (
                                                <span className="flex items-center gap-1">
                                                    <User size={16} className="text-primary" />
                                                    Báo cáo: {job.reportsTo}
                                                </span>
                                            )}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {job.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <motion.button
                                            onClick={() => toggleExpand(job.id)}
                                            className="btn-secondary flex items-center justify-center gap-2 whitespace-nowrap"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {expandedJob === job.id ? 'Thu gọn' : 'Chi tiết'}
                                            {expandedJob === job.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </motion.button>
                                        <motion.button
                                            onClick={scrollToForm}
                                            className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Nộp Hồ Sơ
                                            <ArrowRight size={18} />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                <AnimatePresence>
                                    {expandedJob === job.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-gray-200 pt-4 mt-2"
                                        >
                                            {/* Overview if exists */}
                                            {job.description.overview && (
                                                <p className="text-gray-600 mb-4 bg-primary/5 p-3 rounded-lg">
                                                    <span className="font-semibold text-primary">💡 </span>
                                                    {job.description.overview}
                                                </p>
                                            )}

                                            {/* Responsibilities */}
                                            <div className="mb-4">
                                                <h4 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                                                    <span className="w-1 h-5 bg-primary rounded-full"></span>
                                                    Nhiệm vụ trọng tâm
                                                </h4>
                                                {job.description.responsibilities.map((resp, idx) => (
                                                    <div key={idx} className="mb-4 ml-3">
                                                        <h5 className="font-semibold text-gray-800 mb-2">{resp.category}</h5>
                                                        {resp.note && (
                                                            <p className="text-sm text-gray-500 italic mb-2">{resp.note}</p>
                                                        )}
                                                        <ul className="space-y-1.5">
                                                            {resp.items.map((item, i) => (
                                                                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                                    <span className="text-primary mt-1">•</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Requirements */}
                                            <div className="mb-4">
                                                <h4 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                                                    <span className="w-1 h-5 bg-accent rounded-full"></span>
                                                    Yêu cầu năng lực
                                                </h4>
                                                <ul className="space-y-1.5 ml-3">
                                                    {job.description.requirements.map((req, idx) => (
                                                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                                            <span className="text-accent mt-1">✓</span>
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Benefits if exists */}
                                            {job.description.benefits && (
                                                <div>
                                                    <h4 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                                                        <span className="w-1 h-5 bg-green-500 rounded-full"></span>
                                                        Quyền lợi
                                                    </h4>
                                                    <ul className="space-y-1.5 ml-3">
                                                        {job.description.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                                                <span className="text-green-500 mt-1">★</span>
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default JobOpenings
