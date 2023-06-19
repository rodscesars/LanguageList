# LanguageList

O projeto foi desenvolvido como parte de um desafio para a empresa [DESCARTES](https://www.descartes.com/br/home-pt-br), implementado com React Native e Expo.

## 📋 Requisitos

Criar uma aplicação que apresente uma lista de recursos de tradução, a partir de um endpoint não otimizado, com opções de filtros. Aplicar scroll contínuo. Planejar comportamento offline e dar feedback ao usuário.
O design preferencialmente deve ser da cor verde, remetendo ao meio ambiente. Se possível, realizar testes.

## 🎨 Layout


![LanguageList](https://github.com/rodscesars/LanguageList/assets/67443869/e8f5c692-427a-4b3b-8590-79f80cc4b4a7)


## 💻 Considerações

- O prazo para conclusão foi de 3 dias.
- O endpoint não apresenta paginação, limit ou offset.
- O tamanho da response é de aproximadamente 40MB.
- Escolhi utilizar Expo porque ele apresenta um conjunto de ferramentas e serviços criados em torno do React Native que permitem o desenvolvimento imediato.
- Optei por fazer o download dos dados do endpoint e salvar em um arquivo externo json, pois permite uma busca offline e facilita o gerenciamento de cache no estado local da aplicação utilizando o Redux, evitando assim repetidas requisições ao endpoint. 
- Devido a restrição de tempo, não consegui criptografar os dados salvos em arquivo externo. Isto é aconselhável pois outras aplicações têm acesso ao arquivo salvo.
- Também não foi possível adicionar lógica de atualização dos dados, onde planejava deletar o arquivo de tempos em tempos para fazer o download novamente. Caso os dados do endpoint sejam atualizados, o arquivo precisa ser deletado manualmente. 
- Não foi possível implementar testes. Foi planejado adicionar um teste E2E com Detox, um teste de integração e um teste unitário na lista de resources.
- O layout foi previsto em iOS, torna-se necessário ajustes para Android



