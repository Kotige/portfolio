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
      'Seis edições do ENEM em Minas Gerais, um pipeline em SQL com testes e a primeira pergunta respondida: o tamanho da diferença por rede de ensino, renda e escolaridade dos pais.',
    tags: ['Python', 'SQL', 'DuckDB'],
    manchete:
      'Em Minas, renda, rede de ensino e escolaridade dos pais separam as notas de Ciências da Natureza em cerca de um desvio-padrão, sempre nessa ordem.',
    selo: 'Projeto individual · em andamento · Claude Code como assistente de engenharia; perguntas, decisões e interpretação são minhas.',
    metricas: [
      { valor: '~30', legenda: 'pontos a mais na média a cada faixa de renda per capita (2020–2023)' },
      { valor: '60–93', legenda: 'pontos entre a rede estadual/municipal e as redes federal e privada (2020–2025)' },
      { valor: '69% × 95%', legenda: 'dos inscritos com nota em 2021, na rede estadual/municipal e na privada' },
    ],
    secoes: [
      {
        titulo: 'A pergunta',
        texto:
          'Quanto da nota de Ciências da Natureza de um estudante mineiro é explicado pela origem: renda, escolaridade dos pais, rede de ensino e município? E em quais conteúdos essa diferença pesa mais? Sou professor de Física na rede estadual, e a pergunta surgiu depois do segundo dia do ENEM 2026, quando ouvi de muitos alunos relatos sobre a dificuldade da prova. Os microdados públicos do INEP, de 2020 a 2025, permitem investigá-la com todos os participantes de Minas Gerais.',
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
        titulo: 'Rede de ensino: uma diferença que não fecha',
        texto:
          'Em todos os anos, a rede estadual/municipal fica de 60 a 93 pontos abaixo das redes federal e privada em Ciências da Natureza, cerca de um desvio-padrão das notas. Federal e privada andaram juntas até 2022 e se separaram em 2023; comparando a variação com o erro-padrão da média, de cerca de 1 ponto, vi que a federal ficou estável e que a separação veio da subida da privada. Depois de 2023, as linhas ficam separadas de propósito: com a mudança na fonte da escola, a queda da rede estadual/municipal em 2024 reflete a entrada de muito mais participantes na conta, e não uma piora dos estudantes. A desigualdade aparece também antes da nota: em 2021, 69% dos inscritos da rede estadual/municipal chegaram a ter nota, contra 92% na federal e 95% na privada.',
        imagem: {
          src: '/cases/gravidade-social-enem/media-cn-por-rede.png',
          largura: 1627,
          altura: 1061,
          alt: 'Gráfico de linhas da nota média em Ciências da Natureza por rede de ensino em Minas Gerais, de 2020 a 2025. Privada e federal ficam entre 550 e 570 pontos; a rede estadual/municipal fica entre 475 e 492. Uma linha tracejada entre 2023 e 2024 marca a mudança na fonte da escola, e as séries não são ligadas entre os dois períodos.',
        },
      },
      {
        titulo: 'Renda: uma escada de 30 pontos',
        texto:
          'Entre 2020 e 2023, a média sobe cerca de 30 pontos a cada faixa de renda per capita, e as faixas extremas, até meio salário mínimo e acima de dois, ficam de 80 a 104 pontos uma da outra. Os passos são regulares, e os limites das faixas dobram de uma para a outra, o que sugere que a nota cresce com o logaritmo da renda, uma hipótese que vou testar na modelagem. As distribuições se sobrepõem: em 2023, 6,8% dos alunos da faixa mais pobre ficaram acima da mediana da faixa mais rica. A renda descreve uma tendência forte, mas não determina a nota de cada aluno.',
        imagem: {
          src: '/cases/gravidade-social-enem/media-cn-por-renda.png',
          largura: 2369,
          altura: 1591,
          alt: 'Gráfico de linhas da nota média em Ciências da Natureza por faixa de renda per capita em Minas Gerais, de 2020 a 2023. As quatro linhas ficam empilhadas na ordem da renda, sem se cruzar: acima de 2 salários mínimos, entre 563 e 580 pontos; de 1 a 2, entre 532 e 547; de 1/2 a 1, entre 500 e 515; até 1/2, entre 470 e 484.',
        },
      },
      {
        titulo: 'Escolaridade dos pais: o salto do ensino superior',
        texto:
          'Com a escolaridade dos pais, considerando a maior entre pai e mãe, o padrão é outro. Do fundamental incompleto ao médio completo, os passos são pequenos, de 8 a 17 pontos; a passagem para o superior completo acrescenta de 36 a 45. Na renda, cada degrau conta; na escolaridade dos pais, o que mais separa as notas é ter ou não um pai ou uma mãe com ensino superior. Os alunos que não sabem a escolaridade dos pais têm desempenho parecido com o dos filhos de pais com fundamental incompleto.',
        imagem: {
          src: '/cases/gravidade-social-enem/media-cn-por-escolaridade-pais.png',
          largura: 1682,
          altura: 1117,
          alt: 'Gráfico de linhas da nota média em Ciências da Natureza pela maior escolaridade entre pai e mãe em Minas Gerais, de 2020 a 2023. Superior completo fica entre 532 e 544 pontos, bem acima de médio completo, entre 489 e 501. Fundamental completo, fundamental incompleto e "não sabe" ficam próximos, entre 464 e 485.',
        },
      },
      {
        titulo: 'Os três fatores na mesma escala',
        texto:
          'Para comparar fatores medidos de formas diferentes, usei o d de Cohen, que expressa a diferença entre dois grupos em desvios-padrão, calculado sempre na mesma população. A ordem se repete em todos os anos: renda, rede e escolaridade dos pais, os três acima de 0,8, a referência para um efeito grande. A comparação tem limites que deixo explícitos: o d depende de quão extremos são os grupos (a faixa de renda mais alta reúne cerca de 10% dos alunos; o superior completo, cerca de 36%), e os três fatores estão ligados entre si. Essas diferenças descrevem os grupos, e não o efeito de cada fator; separá-los é o trabalho da próxima etapa.',
        grafico: 'cohenFatores2023',
      },
      {
        titulo: 'Próximos passos',
        texto:
          'A análise exploratória segue com o mapa dos municípios mineiros. Depois vem a modelagem estatística, para separar o peso de renda, rede e escolaridade dos pais e entender quem falta à prova. Por fim, um raio-X das questões de Ciências da Natureza com TRI, que pode ajudar a explicar um acúmulo de notas perto de 340 pontos nos grupos de menor renda, e um app interativo em React.',
      },
    ],
    lateral: {
      papel: 'Projeto individual: da pergunta à análise',
      dados: 'Microdados do ENEM 2020–2025 (INEP), participantes de Minas Gerais',
      stack: 'Python, DuckDB (SQL), Parquet, pandas, matplotlib',
      links: [
        { rotulo: 'Repositório no GitHub', url: 'https://github.com/Kotige/gravidade-social-enem' },
        {
          rotulo: 'Notebook: diferença por rede',
          url: 'https://github.com/Kotige/gravidade-social-enem/blob/main/notebooks/01_q1_tamanho_da_diferenca.ipynb',
        },
        {
          rotulo: 'Notebook: renda e escolaridade dos pais',
          url: 'https://github.com/Kotige/gravidade-social-enem/blob/main/notebooks/01b_q1_renda_e_escolaridade.ipynb',
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
  cohenFatores2023: {
    titulo: 'Tamanho da diferença em Ciências da Natureza, por fator (2023)',
    nota: 'd de Cohen entre os grupos extremos: renda acima de 2 SM × até 1/2 SM; rede privada × estadual/municipal; pais com superior completo × fundamental incompleto. Concluintes com escola informada em MG.',
    descricao:
      'Gráfico de barras do d de Cohen em 2023: renda per capita 1,26, rede de ensino 1,09 e escolaridade dos pais 0,91, todos acima de 0,8, a referência para um efeito grande.',
    formato: 'decimal',
    dados: [
      { rotulo: 'Renda', valor: 1.26, destaque: true },
      { rotulo: 'Rede', valor: 1.09 },
      { rotulo: 'Escolaridade', valor: 0.91 },
    ],
  },
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
