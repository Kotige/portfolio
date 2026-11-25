// Conteúdo de todos os cases. Para publicar um case novo, acrescente um objeto à lista:
// a home e a página do case se montam sozinhas.

export const cases = [
  {
    slug: 'gravidade-social-enem',
    numero: '01',
    status: 'publicado', // ou 'em-breve'
    tipo: 'Engenharia e análise de dados · em andamento',
    titulo: 'Gravidade Social: o peso da origem na nota de Ciências da Natureza do ENEM',
    resumo:
      'Seis edições do ENEM em Minas Gerais, um pipeline em SQL com testes e a primeira resposta: o tamanho da diferença entre as redes de ensino.',
    tags: ['Python', 'SQL', 'DuckDB'],
    manchete:
      'Em Minas, cerca de 80 pontos separam a rede privada da rede pública estadual e municipal em Ciências da Natureza.',
    selo: 'Projeto individual · em andamento · Claude Code como assistente de engenharia; perguntas, decisões e interpretação são minhas.',
    metricas: [
      { valor: '~80', legenda: 'pontos de diferença entre a rede privada e a estadual/municipal em 2023' },
      { valor: '6', legenda: 'edições do ENEM harmonizadas (2020–2025), com cerca de 80 variáveis' },
      { valor: '12', legenda: 'testes de qualidade dos dados a cada build' },
    ],
    secoes: [
      {
        titulo: 'A pergunta',
        texto:
          'Quanto da nota de Ciências da Natureza de um estudante mineiro é explicado pela origem: renda, escolaridade dos pais, rede de ensino e município? A pergunta surgiu depois do segundo dia do ENEM 2026, quando ouvi de muitos alunos relatos sobre a dificuldade da prova. Os microdados públicos do INEP, de 2020 a 2025, permitem investigá-la com todos os participantes de Minas Gerais.',
      },
      {
        titulo: 'Entender os dados antes de analisar',
        texto:
          'Antes de qualquer gráfico, precisei entender os próprios dados. Em 2024 e 2025, o INEP passou a publicar a nota e o questionário socioeconômico em tabelas separadas, sem chave comum; por isso, a análise por renda e família fica restrita a 2020–2023. Na mesma época, a escola do participante passou a vir do Censo Escolar: em MG, a rede estadual/municipal com escola identificada saltou de 28.887 para 73.206 participantes, uma quebra de série que impede comparar os dois períodos diretamente. Também encontrei cartões-resposta em branco com nota zero, concentrados em 2023, que excluí das análises de nota.',
      },
      {
        titulo: 'O pipeline',
        texto:
          'Construí um pipeline reproduzível dos arquivos brutos do INEP até um banco DuckDB, sem carregar os CSVs inteiros na memória. As seis edições foram harmonizadas e o modelo de dados em SQL tem três camadas: staging, tabelas analíticas com a população de cada pergunta e tabelas agregadas. Os 12 testes de qualidade rodam a cada build, e cada um foi conferido com dados adulterados de propósito, para garantir que consegue falhar. Cada decisão metodológica está registrada com contexto, alternativas e consequências.',
      },
      {
        titulo: 'Primeiro resultado: a diferença entre as redes',
        texto:
          'Entre 2020 e 2023, as redes privada e federal ficaram de 65 a 85 pontos acima da rede estadual/municipal em Ciências da Natureza, sem sinal de a diferença fechar. Privada e federal andaram juntas até 2022 e se separaram em 2023, um movimento que ainda não consigo explicar. Depois de 2023, as linhas ficam separadas de propósito: com a mudança na fonte da escola, a queda da rede estadual/municipal em 2024 reflete a entrada de muito mais participantes na conta, e não uma piora dos estudantes.',
        imagem: {
          src: '/cases/gravidade-social-enem/media-cn-por-rede.png',
          largura: 1627,
          altura: 1061,
          alt: 'Gráfico de linhas da nota média em Ciências da Natureza por rede de ensino em Minas Gerais, de 2020 a 2025. Privada e federal ficam entre 550 e 570 pontos; a rede estadual/municipal fica entre 475 e 492. Uma linha tracejada entre 2023 e 2024 marca a mudança na fonte da escola, e as séries não são ligadas entre os dois períodos.',
        },
      },
      {
        titulo: 'Próximos passos',
        texto:
          'A análise exploratória continua com renda per capita, escolaridade dos pais e o mapa dos municípios mineiros. Depois vêm a modelagem estatística (o que mais pesa na nota e quem falta à prova), um raio-X das questões de Ciências da Natureza com TRI e um app interativo em React.',
      },
    ],
    lateral: {
      papel: 'Projeto individual: da pergunta à análise',
      dados: 'Microdados do ENEM 2020–2025 (INEP), participantes de Minas Gerais',
      stack: 'Python, DuckDB (SQL), Parquet, pandas, matplotlib',
      links: [
        { rotulo: 'Repositório no GitHub', url: 'https://github.com/Kotige/gravidade-social-enem' },
        {
          rotulo: 'Notebook: a diferença entre as redes',
          url: 'https://github.com/Kotige/gravidade-social-enem/blob/main/notebooks/01_q1_tamanho_da_diferenca.ipynb',
        },
        {
          rotulo: 'Registro de decisões',
          url: 'https://github.com/Kotige/gravidade-social-enem/blob/main/docs/decisoes.md',
        },
      ],
    },
  },
  {
    slug: 'titanic-eda',
    numero: '02',
    status: 'publicado',
    tipo: 'Análise exploratória · estatística',
    titulo: 'Titanic: o que a estatística revela sobre quem sobreviveu',
    resumo:
      'Estatística descritiva e inferencial com 891 passageiros, com atenção ao viés escondido nos dados faltantes.',
    tags: ['Python', 'pandas', 'Estatística'],
    manchete: 'No Titanic, a classe da passagem dividiu as chances de sobreviver, e até os dados faltantes têm classe.',
    selo: 'Projeto individual · dataset público com 891 passageiros · notebook em português e inglês.',
    metricas: [
      { valor: '63% × 24%', legenda: 'de sobrevivência na 1ª e na 3ª classe' },
      { valor: '74% × 19%', legenda: 'de sobrevivência entre mulheres e homens' },
      { valor: '28%', legenda: 'da 3ª classe sem idade registrada, contra 14% da 1ª' },
    ],
    secoes: [
      {
        titulo: 'A pergunta',
        texto:
          'O arquivo tem 891 passageiros do Titanic, uma amostra das mais de 2.200 pessoas a bordo. Usei estatística descritiva e inferencial para entender como idade, tarifa, classe e sexo se distribuem e para verificar se os padrões que aparecem são reais ou artefatos de registros incompletos.',
      },
      {
        titulo: 'Tarifa e idade',
        texto:
          'A tarifa é fortemente assimétrica: a média supera a mediana em quase 18 libras, e 116 passageiros ficam além de 1,5×IQR. Quase todos são da primeira classe: 48% dos passageiros dela são outliers de tarifa, contra menos de 3% nas outras. A idade é quase simétrica: 72% dos passageiros com idade registrada ficam a um desvio padrão da média, perto dos 68% da regra empírica, e o intervalo de confiança de 95% para a idade média vai de 28,6 a 30,8 anos.',
      },
      {
        titulo: 'Sobrevivência: diferença real ou registro perdido?',
        texto:
          'Sobreviveram 63% dos passageiros da primeira classe e 24% dos da terceira. Seria tentador atribuir parte dessa diferença a registros perdidos da terceira classe, mas os próprios dados descartam essa hipótese: a terceira classe é o maior grupo do arquivo e concentra 372 dos 549 óbitos registrados. A diferença reflete uma desigualdade histórica real. Por sexo, ela é ainda maior: 74% das mulheres sobreviveram, contra 19% dos homens.',
        grafico: 'sobrevivenciaClasse',
      },
      {
        titulo: 'O viés nos dados faltantes',
        texto:
          'A idade falta para 177 passageiros, e não de forma aleatória: estão sem idade 28% da terceira classe, 14% da primeira e 6% da segunda. Por isso, toda estatística de idade calculada só com as linhas completas, incluindo o intervalo de confiança, representa melhor as classes mais altas. Descartar essas linhas sem reconhecer isso introduziria um viés de seleção na análise.',
      },
    ],
    lateral: {
      papel: 'Projeto individual',
      dados: '891 passageiros, dataset público da Data Science Dojo',
      stack: 'Python, pandas, matplotlib, Jupyter',
      links: [
        { rotulo: 'Repositório no GitHub', url: 'https://github.com/Kotige/titanic-eda' },
        {
          rotulo: 'Notebook em português',
          url: 'https://github.com/Kotige/titanic-eda/blob/main/titanic_eda.pt-br.ipynb',
        },
      ],
    },
  },
]

// Dados dos gráficos, separados dos componentes.
export const graficos = {
  sobrevivenciaClasse: {
    titulo: 'Taxa de sobrevivência por classe da passagem',
    nota: '891 passageiros do arquivo; a linha tracejada é a taxa geral.',
    descricao:
      'Gráfico de barras da taxa de sobrevivência por classe: 1ª classe 63%, 2ª classe 47,3%, 3ª classe 24,2%, contra 38,4% no geral.',
    formato: 'porcentagem',
    media: 38.4,
    dados: [
      { rotulo: '1ª classe', valor: 63 },
      { rotulo: '2ª classe', valor: 47.3 },
      { rotulo: '3ª classe', valor: 24.2, destaque: true },
    ],
  },
}
