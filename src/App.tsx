/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  ChevronDown, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Users, 
  Award,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oatmeal/90 backdrop-blur-md border-b border-dashed border-stitch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-warm-blue rounded-lg flex items-center justify-center stitch-border">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-ink-gray">织梦专升本</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['首页', '核心产品', '产品优势', '咨询入口', '关于我们'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-sm font-medium text-ink-gray/80 hover:text-ink-gray transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink-gray transition-all group-hover:w-full border-b border-dashed border-ink-gray/40"></span>
              </a>
            ))}
          </div>

          {/* Search & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-white/50 stitch-border rounded-full px-3 py-1">
              <Search className="w-4 h-4 text-ink-gray/40" />
              <input 
                type="text" 
                placeholder="搜索真题/课程..." 
                className="bg-transparent border-none focus:ring-0 text-xs w-32 placeholder:text-ink-gray/30"
              />
            </div>
            <button 
              className="md:hidden p-2 text-ink-gray"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-oatmeal border-b border-dashed border-stitch px-4 py-6 space-y-4"
          >
            {['首页', '核心产品', '产品优势', '咨询入口', '关于我们'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="block text-lg font-medium text-ink-gray"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-warm-yellow/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-warm-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-warm-yellow/50 text-xs font-semibold tracking-wider uppercase mb-6 stitch-border">
            专升本备考神器
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-ink-gray mb-6 leading-tight">
            用专业产品，<br />
            <span className="text-warm-blue">助你高效上岸</span>
          </h1>
          <p className="text-lg text-ink-gray/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            织就备考之路，手作般用心打磨产品。<br />
            我们深耕专升本领域，守护每一份上岸希望，让备考更有温度。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-fabric bg-warm-yellow w-full sm:w-auto flex items-center justify-center gap-2 group shadow-md">
              查看核心产品
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-fabric bg-white w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm">
              咨询产品详情
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ title, desc, tag, icon: Icon }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="fabric-card p-6 stitch-border flex flex-col h-full group"
    >
      <div className="mb-4 flex justify-between items-start">
        <div className="w-12 h-12 bg-oatmeal rounded-xl flex items-center justify-center stitch-border group-hover:bg-warm-blue/20 transition-colors">
          <Icon className="w-6 h-6 text-ink-gray" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-warm-blue bg-warm-blue/10 px-2 py-1 rounded-md">
          {tag}
        </span>
      </div>
      <h3 className="text-xl font-bold text-ink-gray mb-2">{title}</h3>
      <p className="text-sm text-ink-gray/60 mb-6 flex-grow leading-relaxed">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-dashed border-stitch">
        <button className="text-sm font-semibold text-warm-blue flex items-center gap-1 hover:underline">
          立即咨询 <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const CoreProducts = () => {
  const products = [
    {
      title: "历年真题套卷",
      desc: "真题解析详细，贴合最新考纲。手作整理易错点，助你精准查漏补缺，备考更高效。",
      tag: "真题解析",
      icon: BookOpen
    },
    {
      title: "线上全科精讲课",
      desc: "师资深耕专升本多年，全程陪伴。课程可无限回放，适配不同基础，零基础也能稳步提升。",
      tag: "精品网课",
      icon: Star
    },
    {
      title: "考点精讲笔记",
      desc: "重点突出，适配备考背诵。采用手作笔记风格，逻辑清晰，让枯燥的知识点变得亲切易记。",
      tag: "核心笔记",
      icon: Award
    }
  ];

  return (
    <section id="核心产品" className="py-20 bg-linen/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ink-gray mb-4 relative inline-block">
            核心推广产品
            <div className="absolute -bottom-2 left-0 w-full h-1 border-b border-dashed border-warm-blue/40"></div>
          </h2>
          <p className="text-ink-gray/50 mt-4">用心打磨每一份资料，只为你的上岸梦想</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-sm font-medium text-ink-gray/60 hover:text-ink-gray flex items-center gap-2 mx-auto transition-colors">
            查看全部产品 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const items = [
    {
      title: "品质优势",
      desc: "真题严格筛选，贴合最新考纲；笔记手作整理，重点清晰可见。",
      icon: CheckCircle2
    },
    {
      title: "适配优势",
      desc: "适配零基础/基础薄弱学生，分阶段适配备考进度，高效提分。",
      icon: Users
    },
    {
      title: "服务优势",
      desc: "咨询全程响应，产品使用指导，专业老师为你解答备考疑惑。",
      icon: MessageCircle
    }
  ];

  return (
    <section id="产品优势" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 bg-warm-yellow/20 rounded-2xl stitch-border">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center stitch-border mb-6">
                <item.icon className="w-5 h-5 text-warm-blue" />
              </div>
              <h3 className="text-lg font-bold text-ink-gray mb-3">{item.title}</h3>
              <p className="text-sm text-ink-gray/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Consultation = () => {
  return (
    <section id="咨询入口" className="py-20 px-4">
      <div className="max-w-4xl mx-auto fabric-card p-10 md:p-16 stitch-border text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-warm-blue/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-warm-yellow/10 rounded-tr-full"></div>

        <h2 className="text-3xl font-bold text-ink-gray mb-6">有任何产品疑问？</h2>
        <p className="text-ink-gray/60 mb-10 max-w-lg mx-auto">
          随时咨询我们，专业老师为你解答。咨询即送<span className="text-warm-blue font-bold">备考小资料</span>一份。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="btn-fabric bg-warm-yellow flex items-center gap-2 shadow-md w-full sm:w-auto justify-center">
            <MessageCircle className="w-5 h-5" />
            微信在线咨询
          </button>
          <button className="btn-fabric bg-white flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center">
            <Phone className="w-5 h-5" />
            拨打咨询热线
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenPrivacy, onOpenTerms }: any) => {
  return (
    <footer className="bg-linen pt-20 pb-10 border-t border-dashed border-stitch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-warm-blue rounded-lg flex items-center justify-center stitch-border">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-ink-gray">织梦专升本</span>
            </div>
            <p className="text-sm text-ink-gray/50 leading-relaxed max-w-sm">
              织就备考之路，用心打磨每一款专升本产品。我们深耕教育领域，致力于为每一位学子提供最优质、最温暖的备考支持。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-gray uppercase tracking-widest mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-ink-gray/60">
                <Phone className="w-4 h-4 text-warm-blue" />
                400-123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-gray/60">
                <MessageCircle className="w-4 h-4 text-warm-blue" />
                WeChat: ZM_ZSB_OFFICIAL
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dashed border-stitch flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-ink-gray/40">
              © 2026 织梦专升本. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-ink-gray/30">
              <a href="https://beian.mps.gov.cn/#/query/websearch?code=41140002800770" rel="noreferrer" target="_blank" className="flex items-center gap-1 hover:text-ink-gray/50">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFQklEQVRYw+3Wa1BUdRjH8SOpMeg4WhZGpDIxiaaTeUFgWrxE4AVRQJGlRRAVIV1JkbgMgQLi5AVBQSVLSp0xlEAUKBEEFZCrCstll8UV2AV2YbmoGCrYv31+R95UL5pmmtamZ+bz6rz5nvOc/5zDcX9jGLs/iTxuyvIlWYkRFeTHA2HVRFtzfhthTG5KuH96/vUgNlC4mMgyw1NJit/aAXLKazYje9xtIMZ/OZz50gW+9hcNkvoLEemEPbnrSP47QYwxQ5Ifv54RqzcXwFFvSyjaOhfavN8F7Y5ZcC/HH9JOB4LNa9Zw5YA76OZV8vIGMdZtSp7cDrtOnOavYiQhTAiPwi1AMtIQaqyngsxpBtw2GAGDKfaQmpUAa6xc4Vfp4UtEdzAMycsT9JQ1Tyctl/2eEkuTlYysF/rCUNxMqDEzgTqzSXBnpgnIHCzgjvEEuD52DLBr3rA1MAaWmNtB582wdtIljZ9G9D+IPU6aTxIPBjHCcXvg3CEh9K2fDLWvjIH6D6fwTIyheuwEqLUyhzLOALq8pkN+bgRw3HY4FBsMzxojZxP9DequLjAlQwVrbpIjhyIY4UYGQ/buhdBqPxlk3Gion2IMDQIz3kJe/ZS34I7uHkmD7VSQVgYDNyIAwsNCgfXGXoOBPjP9DKrOCAogA2etGTmTHAMcFwFZye7wS5QlVHGjoEw4A2qPCUBZ6AzNcQ5Q/YYRdO+YB1U3dsDwypLio4FJ3ECryIzWz6Cm3NgTRHN8HiPF6eHAGSbAdh8feFZkB7krzaHE9h2o85sDsiAbkIsXQMN+e2CtGyF0kzdwXCgU5++D/ouLQFV4OEU/g2Q/iNuIPNaKkQflAWBqexxGjhLDVUcL6IwSQN3SGVChe6FJg9dckCx6D1QBliDZLIAxo7eA8eyv4KE0BJqTrHkZvnL9DJKn+Twmt0NsGGHZy2Dn3kQYfsQ53Hh4/r4RNGz8AIpdzKEuaAF0RC2E57MmQgE3ATjuM/CPiANW7AqSfQJQ5vk362eQKmd3JrmXsoSRocpNIMnbB9zbceDIWUPmuHFQNMkISqa9DpUvNK6YDpW2s8DfwBK48WFQnhMCgzUBoLy0BrRVe5P0NWjPLdKUsJiR1tR1wGp8IeZwMgx/SrgRvjxuAziNcwLvyathLOcJHLflhRDYGRYFrNET2rJ5yvPLoas0tOj/oL8UpC4JHyTSU+6MNCS4gvKoAB5WiKG+MAQSg0WwLXQ/ZJ3xhao0FxB5hYCbUwAEfhEF3Td8QP2dAOQnPwFlxgrolUVq9TPoaX+ZB2nLc2Gk6awj1MU78HZZwJMid2Byb550JQwVO0NfxlJgdz14vWKeRAiK6DlQF28PLZdcoLNcBIO92bb6GTQ8Q/13RURT6tlH2gvXMlITLYD6uI+gp2ozdF0VQXumM6ivCqGvahM8kPiDItkeGo8tB025GFQ3xFrSr06zI3/4yde7oN7m0sWk5eKWDqK5JWJQvAHac9ygq3Adr9gTNNc3QG85rzPfHe5/7wDtPwuhp/Zz6CjyhaZzwi6ivfetHdH/oP77+3PJQOsuRnqkQdCa4wWqyx6gyecpL64GTaEX7ycXUJz4GJp1B4O0X/Hg0Xp1tFV+8Ei1k6c5coHofxBrrzQinbKYo0SVJ+wn6iurGHlY5gY911aDJnMFaHXXiDp9GQyvtKfUA9QFTtBZ7gPdit0tpFd9OpwwFmlA9D/o9yNLDpxIKmI8PMnNSNtviCLVpYTITzrXEGWaq4qos0WgOPdpCenIF+eRrurjB4k0PXopYZG6gMg/D/gNBUxhAbSAmKMAAAAASUVORK5CYII=" style={{ width: '16px', height: '16px' }} /> 豫公网安备41140002000770号
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="https://beian.miit.gov.cn/" target="_Blank" className="hover:text-ink-gray/50">豫ICP备2024048033号</a>
            </div>
          </div>
          <div className="flex gap-6">
            <button onClick={onOpenPrivacy} className="text-xs text-ink-gray/40 hover:text-ink-gray">隐私政策</button>
            <button onClick={onOpenTerms} className="text-xs text-ink-gray/40 hover:text-ink-gray">服务说明</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const Modal = ({ isOpen, onClose, title, children }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-gray/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl stitch-border overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-6 border-b border-dashed border-stitch flex justify-between items-center bg-linen/30">
              <h3 className="text-xl font-bold text-ink-gray">{title}</h3>
              <button onClick={onClose} className="p-2 hover:bg-oatmeal rounded-full transition-colors">
                <X className="w-5 h-5 text-ink-gray" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-ink-gray/70 leading-relaxed space-y-4">
              {children}
            </div>
            <div className="p-4 border-t border-dashed border-stitch bg-linen/30 text-center">
              <button onClick={onClose} className="btn-fabric bg-warm-yellow py-2 text-sm">我知道了</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-warm-blue/20">
      <Navbar />
      <main>
        <Hero />
        <CoreProducts />
        <Advantages />
        <Consultation />
      </main>
      <Footer 
        onOpenPrivacy={() => setActiveModal('privacy')} 
        onOpenTerms={() => setActiveModal('terms')} 
      />

      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)}
        title="隐私政策"
      >
        <p>欢迎使用“织梦专升本”提供的服务。我们非常重视您的隐私保护。</p>
        <h4 className="font-bold text-ink-gray">1. 信息收集</h4>
        <p>我们仅在您主动咨询时收集必要的联系信息（如微信号、电话号码），用于为您提供产品咨询服务。</p>
        <h4 className="font-bold text-ink-gray">2. 信息使用</h4>
        <p>您的信息将仅用于回复您的咨询、发送备考资料或向您介绍相关备考产品。我们承诺不会将您的信息泄露给任何第三方。</p>
        <h4 className="font-bold text-ink-gray">3. 信息安全</h4>
        <p>我们采取合理的安全措施保护您的个人信息，防止未经授权的访问、公开披露、使用、修改、损坏或丢失。</p>
        <h4 className="font-bold text-ink-gray">4. 您的权利</h4>
        <p>您可以随时联系我们要求查询、更正或删除您的个人信息。</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)}
        title="服务说明"
      >
        <p>在您使用“织梦专升本”服务前，请仔细阅读以下说明：</p>
        <h4 className="font-bold text-ink-gray">1. 产品性质</h4>
        <p>本网站展示的产品（包括但不限于真题套卷、线上课程、精讲笔记）均为备考辅助资料，旨在帮助学生提高学习效率。</p>
        <h4 className="font-bold text-ink-gray">2. 咨询服务</h4>
        <p>我们提供的咨询服务仅供参考，不构成对考试结果的任何保证。备考效果取决于个人的学习投入与实际情况。</p>
        <h4 className="font-bold text-ink-gray">3. 知识产权</h4>
        <p>本网站展示的所有产品内容、设计、文字及图片均受版权保护。未经授权，禁止任何形式的翻印、转载或商业用途。</p>
        <h4 className="font-bold text-ink-gray">4. 免责声明</h4>
        <p>我们尽力确保产品内容的准确性，但不对因使用本产品而产生的任何直接或间接损失承担法律责任。</p>
      </Modal>
    </div>
  );
}
