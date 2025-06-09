"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Camera,
  Leaf,
  Eye,
  Sparkles,
  Users,
  Settings,
  Clock,
  Phone,
  Star,
  Building,
  ShoppingCart,
  Factory,
  Hospital,
  GraduationCap,
  Fuel,
  CheckCircle,
  Award,
  TrendingUp,
  MessageCircle,
  MapPin,
  Mail,
  Heart,
} from "lucide-react"

export default function LCSLandingPage() {
  const services = [
    {
      title: "Instalação de CFTV e Cerca Elétrica",
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      benefits: ["Monitoramento remoto 24h", "Alta proteção perimetral", "Tecnologia de ponta"],
      image: "/cerca.png",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Jardinagem Profissional",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      benefits: ["Residências e empresas", "Manutenção completa", "Paisagismo especializado"],
      image: "/jardinagem.png",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Portaria Virtual",
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      benefits: ["Monitoramento 24/7", "Reconhecimento facial", "Controle de acesso inteligente"],
      image: "/portariavirtual.png",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Serviço de Limpeza",
      icon: <Sparkles className="w-8 h-8 text-cyan-600" />,
      benefits: ["Limpeza hospitalar", "Empresas e residências", "Produtos ecológicos"],
      image: "/servicodelimpeza.png",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Serviço de Portaria",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      benefits: ["Plantões 12h ou 24h", "Profissionais treinados", "Controle rigoroso"],
      image: "/servicodeportaria.png",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Manutenção Predial",
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      benefits: ["Manutenção preventiva", "Reparos emergenciais", "Equipe especializada"],
      image: "/manutencaopredial.png",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const differentials = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Equipe Certificada",
      description: "Profissionais treinados e qualificados com certificações reconhecidas",
      stats: "100% Certificados",
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Tecnologia Avançada",
      description: "Equipamentos modernos e tecnologia de ponta para máxima eficiência",
      stats: "Última Geração",
    },
    {
      icon: <Eye className="w-12 h-12 text-blue-600" />,
      title: "Monitoramento 24/7",
      description: "Acompanhamento contínuo e suporte técnico em tempo real",
      stats: "24h por dia",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Resposta Rápida",
      description: "Atendimento ágil e soluções personalizadas para cada necessidade",
      stats: "< 2h resposta",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Qualidade Garantida",
      description: "Mais de 500 clientes satisfeitos e histórico comprovado de excelência",
      stats: "500+ Clientes",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Crescimento Contínuo",
      description: "Empresa em constante evolução e expansão de serviços",
      stats: "15 anos mercado",
    },
  ]

  const testimonials = [
    {
      name: "Carla Mendes",
      role: "Síndica - Residencial Jardins",
      text: "A LCS transformou completamente a segurança do nosso condomínio. O sistema de CFTV e a portaria virtual funcionam perfeitamente. Profissionais incríveis e muito atenciosos!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Roberto Silva",
      role: "Gerente - Shopping Center Plaza",
      text: "Contratamos a LCS para limpeza e jardinagem. O resultado superou nossas expectativas. Equipe pontual, eficiente e com excelente custo-benefício. Recomendo!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ana Paula Lima",
      role: "Administradora - Clínica Vida",
      text: "A portaria virtual revolucionou nosso atendimento. Maior controle, segurança e praticidade. O suporte técnico é excepcional. Estamos muito satisfeitos!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const segments = [
    { icon: <Building className="w-10 h-10" />, title: "Condomínios", subtitle: "Residenciais" },
    { icon: <ShoppingCart className="w-10 h-10" />, title: "Centros", subtitle: "Comerciais" },
    { icon: <Factory className="w-10 h-10" />, title: "Indústrias", subtitle: "& Fábricas" },
    { icon: <Hospital className="w-10 h-10" />, title: "Hospitais", subtitle: "& Clínicas" },
    { icon: <Building className="w-10 h-10" />, title: "Escritórios", subtitle: "Corporativos" },
    { icon: <GraduationCap className="w-10 h-10" />, title: "Instituições", subtitle: "de Ensino" },
    { icon: <Fuel className="w-10 h-10" />, title: "Postos", subtitle: "de Combustível" },
  ]

  const stats = [
    { number: "500+", label: "Clientes Atendidos", icon: <Users className="w-8 h-8" /> },
    { number: "15", label: "Anos de Experiência", icon: <Award className="w-8 h-8" /> },
    { number: "24/7", label: "Suporte Disponível", icon: <Clock className="w-8 h-8" /> },
    { number: "100%", label: "Satisfação Garantida", icon: <Heart className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white font-['Roboto',sans-serif] relative">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300"
          onClick={() => window.open("https://wa.me/5551988930033", "_blank")}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
          </svg>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <Image
                  src="/lcs-logo.png"
                  alt="LCS Terceirização"
                  width={180}
                  height={135}
                  className="mx-auto lg:mx-0 mb-8"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transforme Seu Espaço com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Segurança e Excelência
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Portaria, Limpeza, Jardinagem, Monitoramento e mais com qualidade garantida e profissionais
                especializados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://wa.me/5551988930033", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicite um Orçamento
                </Button>
              </div>
            </div>

            {/* Right Content - Professional Image Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/lcs-worker.png"
                      alt="Profissional LCS em ação"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">Profissionais Qualificados</h3>
                      <p className="text-sm opacity-90">Equipe treinada e certificada para todos os serviços</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Nossa História de <span className="text-blue-600">Dedicação</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Há mais de <strong className="text-slate-800">15 anos</strong>, a LCS Terceirização nasceu com um
                  propósito claro: oferecer soluções completas em terceirização que realmente fazem a diferença na vida
                  das pessoas e empresas.
                </p>
                <p>
                  Começamos como uma pequena empresa familiar e hoje somos referência no mercado, atendendo mais de
                  <strong className="text-blue-600"> 500 clientes</strong> em diversos segmentos. Nossa jornada é
                  marcada pela dedicação incansável em superar expectativas.
                </p>
                <p>
                  Cada profissional da nossa equipe carrega consigo os valores que nos definem:
                  <strong className="text-slate-800">excelência, confiabilidade e compromisso</strong>. Não somos apenas
                  prestadores de serviços, somos parceiros na construção de ambientes mais seguros e organizados.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open("https://wa.me/5551988930033", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Conheça Nossa Proposta
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Nossa Missão</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Proporcionar tranquilidade e segurança através de serviços de terceirização de alta qualidade,
                      construindo relacionamentos duradouros baseados na confiança e excelência.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Soluções Completas Para Seu Negócio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em terceirização para atender todas as suas necessidades com excelência e
              profissionalismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden transform hover:-translate-y-2 h-full flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-bold text-slate-800 ml-3">{service.title}</h3>
                    </div>
                    <ul className="space-y-3 flex-grow">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      onClick={() => window.open("https://wa.me/5551988930033", "_blank")}
                    >
                      Solicitar Orçamento
                      <MessageCircle className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LCS Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Por Que Escolher a LCS?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diferenciais que fazem da LCS a melhor escolha para sua empresa ou condomínio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {item.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Depoimentos reais de quem confia na LCS Terceirização para cuidar de seus espaços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mr-4 border-4 border-white/20"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-200 italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Segments Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Segmentos Atendidos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos diversos setores com excelência, profissionalismo e soluções personalizadas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {segments.map((segment, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {segment.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-700 mb-1">{segment.title}</h3>
                  <p className="text-xs text-gray-500">{segment.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Esclarecemos as principais dúvidas sobre nossos serviços</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Quais são os horários de atendimento?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Oferecemos atendimento 24/7 para emergências. Para orçamentos e consultas, nosso horário comercial é
                  de segunda a sexta das 8h às 18h, e sábados das 8h às 12h.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Como funciona o orçamento?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  O orçamento é totalmente gratuito! Nossa equipe faz uma visita técnica para avaliar suas necessidades
                  e apresentar a melhor solução personalizada para seu espaço.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Vocês atendem em quais regiões?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Atendemos toda a região metropolitana de Porto Alegre e interior. Para outras localidades, consulte nossa
                  equipe para verificar disponibilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Os profissionais são certificados?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sim! Todos os nossos profissionais possuem certificações específicas para suas áreas de atuação, além
                  de treinamentos regulares e equipamentos de segurança adequados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Qual o prazo para início dos serviços?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Após a aprovação do orçamento, iniciamos os serviços em até 48 horas. Para casos de emergência, temos
                  equipes disponíveis para atendimento imediato.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Oferecem garantia nos serviços?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sim! Oferecemos garantia em todos os nossos serviços. O prazo varia conforme o tipo de serviço
                  prestado. Consulte nossa equipe para mais detalhes.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://wa.me/5551988930033", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Tire Suas Dúvidas no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Entre em Contato</h2>
          <p className="text-xl text-gray-600 mb-12">
            Estamos prontos para atender você. Escolha a forma mais conveniente para entrar em contato
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Telefone</h3>
                <p className="text-gray-600">(51) 9889-3033</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">E-mail</h3>
                <p className="text-gray-600">contato@lcsterceirizacao.com.br</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600">Atendimento rápido</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Conte com uma equipe especializada para cuidar do seu espaço
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Solicite um orçamento gratuito e descubra como podemos transformar a segurança e limpeza do seu ambiente
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://wa.me/5551988930033", "_blank")}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Solicitar Orçamento
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span className="text-lg">(51) 9889-3033</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="text-lg">contato@lcsterceirizacao.com.br</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">Poto Alegre - RS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
