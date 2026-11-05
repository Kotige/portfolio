// Conteúdo de todos os cases. Para publicar um case novo, acrescente um objeto à lista:
// a home e a página do case se montam sozinhas.
// Tudo entre [colchetes] é placeholder e precisa ser trocado antes de divulgar.

export const cases = [
  {
    slug: 'campanha-email',
    numero: '01',
    status: 'publicado', // ou 'em-breve'
    tipo: 'Machine learning · projeto em grupo',
    titulo: 'Campanha de e-mail: quem tem mais chance de comprar',
    resumo: 'Com o mesmo orçamento, o modelo encontra 3,5× mais compradores do que um envio aleatório.',
    tags: ['Python', 'scikit-learn', 'Árvore de decisão'],
    manchete: 'Com o mesmo orçamento, o modelo encontra 3,5× mais compradores.',
    selo: 'Projeto em grupo · Bootcamp [nome] · Meu papel: interpretação dos resultados e construção da apresentação.',
    metricas: [
      { valor: '3,5×', legenda: 'mais compradores que o envio aleatório' },
      { valor: '86,5%', legenda: 'compram entre os 4% mais bem pontuados' },
      { valor: '0,82', legenda: 'de AUC, estável em 100 testes' },
    ],
    secoes: [
      {
        titulo: 'O problema',
        texto: '[texto a escrever — orçamento de R$ 40 mil, base de 1 milhão de clientes, 40 mil e-mails (4% da base): para quem enviar?]',
      },
      {
        titulo: 'O que os dados mostraram',
        texto: '[texto a escrever — idade, engajamento e sexo; Status × idade mostrando a confusão pela idade]',
        grafico: 'idade',
      },
      {
        titulo: 'O modelo',
        texto: '[texto a escrever — versão enxuta, creditada ao grupo: árvore de decisão com pesos balanceados, desempenho no topo da lista]',
      },
      {
        titulo: 'Quem é o público-alvo',
        texto: '[texto a escrever — mulheres de 30 a 44 anos com engajamento alto no site]',
      },
      {
        titulo: 'Confiabilidade',
        texto: '[texto a escrever — taxa de compra no top 4% em 100 testes: média 86%, pior caso 79%]',
      },
      {
        titulo: 'Limitações',
        texto: '[texto a escrever — propensão não é efeito causal; próximo passo seria um teste A/B com grupo controle]',
      },
    ],
    lateral: {
      papel: 'Interpretação dos resultados e apresentação',
      dados: '22.223 clientes, dataset público',
      stack: 'Python, pandas, scikit-learn',
      links: [
        { rotulo: 'Notebook', url: '' },
        { rotulo: 'Relatório completo (PDF)', url: '' },
        { rotulo: 'Repositório no GitHub', url: '' },
      ],
    },
  },
  {
    slug: 'desempenho-escolar',
    numero: '02',
    status: 'em-breve',
    tipo: 'Análise exploratória · dashboard',
    titulo: 'Desempenho escolar: como identificar cedo quem precisa de apoio',
    resumo: 'O que explica as diferenças de desempenho entre alunos e turmas, a partir de notas e frequência.',
    tags: ['Python', 'SQL', 'Dashboard'],
  },
  {
    slug: 'volei',
    numero: '03',
    status: 'em-breve',
    tipo: 'Dados longitudinais · previsão',
    titulo: 'Vôlei: a evolução de cada atleta ao longo do tempo',
    resumo: 'Frequência e aproveitamento de saque registrados no dia a dia, usados para prever evolução e faltas.',
    tags: ['Python', 'Séries temporais'],
  },
  {
    slug: 'jogos',
    numero: '04',
    status: 'em-breve',
    tipo: 'Projeto pessoal',
    titulo: 'Jogos: o que os dados de partidas revelam',
    resumo: '[resumo a definir quando a fonte de dados for escolhida]',
    tags: ['Python'],
  },
]

// Dados dos gráficos, separados dos componentes.
// ATENÇÃO: os valores abaixo são DE EXEMPLO — troque pelos números reais do projeto.
export const graficos = {
  idade: {
    titulo: 'Taxa de compra por faixa de idade',
    nota: '[dados de exemplo — trocar pelos valores reais]',
    descricao:
      'Gráfico de barras da taxa de compra por faixa de idade. As faixas de 30 a 44 anos ficam acima da média. [dados de exemplo]',
    formato: 'porcentagem',
    media: 10,
    dados: [
      { rotulo: '18–24', valor: 5 },
      { rotulo: '25–29', valor: 8 },
      { rotulo: '30–34', valor: 16, destaque: true },
      { rotulo: '35–39', valor: 18, destaque: true },
      { rotulo: '40–44', valor: 15, destaque: true },
      { rotulo: '45–54', valor: 9 },
      { rotulo: '55+', valor: 6 },
    ],
  },
}
