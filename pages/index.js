function Home() {
  return (
    <div>
      <div className="text-center p-4 bg-purple-100">
        <h1 className="text-2xl font-bold text-purple-600">
          Adri, eu amo você. Te amo minha lindinha!
        </h1>
      </div>

      <header className="bg-slate-800 text-white text-center p-8">
        <h1 className="text-4xl font-bold">Soluções em Pavers</h1>
        <p className="mt-2">Qualidade e durabilidade para seu projeto</p>
      </header>

      <div className="max-w-6xl mx-auto p-8">
        <section className="my-8 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Pavers Drenantes</h2>
          <img
            src="/api/placeholder/800/400"
            alt="Exemplo de Paver Drenante"
            className="w-full rounded-lg mb-4"
          />
          <p className="mb-6">
            Os pavers drenantes são a solução ideal para áreas que necessitam de
            drenagem eficiente. Desenvolvidos com tecnologia avançada, permitem
            a infiltração da água da chuva, contribuindo para a sustentabilidade
            e prevenção de alagamentos.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Benefícios</h3>
              <ul className="list-disc pl-5">
                <li>Alta capacidade de drenagem</li>
                <li>Redução de poças d'água</li>
                <li>Contribui para recarga do lençol freático</li>
                <li>Menor impacto ambiental</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Aplicações</h3>
              <ul className="list-disc pl-5">
                <li>Estacionamentos</li>
                <li>Calçadas</li>
                <li>Praças</li>
                <li>Áreas de lazer</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-8 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Pavers Tradicionais</h2>
          <img
            src="/api/placeholder/800/400"
            alt="Exemplo de Paver Tradicional"
            className="w-full rounded-lg mb-4"
          />
          <p className="mb-6">
            Nossos pavers tradicionais são fabricados com os mais altos padrões
            de qualidade, oferecendo resistência e durabilidade excepcional.
            Ideais para diversos tipos de pavimentação, com várias opções de
            cores e formatos.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Características</h3>
              <ul className="list-disc pl-5">
                <li>Alta resistência mecânica</li>
                <li>Durabilidade superior</li>
                <li>Fácil manutenção</li>
                <li>Variedade de cores e formatos</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Ideal para</h3>
              <ul className="list-disc pl-5">
                <li>Garagens</li>
                <li>Calçadas residenciais</li>
                <li>Áreas comerciais</li>
                <li>Pátios industriais</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center my-12">
          <h2 className="text-2xl font-bold mb-4">Solicite um Orçamento</h2>
          <p className="mb-6">
            Entre em contato conosco para conhecer melhor nossos produtos e
            receber um orçamento personalizado.
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      <footer className="bg-slate-800 text-white text-center p-4">
        <p>© 2024 Sua Empresa de Pavers. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
