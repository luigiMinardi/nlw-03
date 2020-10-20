<p align="center">
  <a href="#english">In English:</a><br>
  <a href="#-Technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Initializing">Initializing</a><br>
  <a href="#português">Em Português:</a><br>
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Inicializando">Inicializando</a>
</p>

# English

## Technology

For run this project you need to have this technologies installed on your computer:

- [Node.js]
- [React]
- [React Native]
- [Expo]
- [TypeScript]

## Initializing

Use ``yarn install`` or ``npm install`` to install the dependencies;

Go to ``backend/src/views/images_view.ts`` and change the ip (just the "yourIP"¹) on url for the yours ``http://yourIP:3333/uploads/${image.path}``. (Will become something like `http://111.111.1.111:3333/uploads/${image.path}`).

Go to ``mobile/src/services/api.ts`` and change the ip² on url for the yours ``http://yourIP:3333``.

Go to [MapBox][accmap] and copy your token than create a ``.env`` on ``/web`` put the variable ``REACT_APP_MAPBOX_TOKEN`` and your token of mapbox ``REACT_APP_MAPBOX_TOKEN=your.token`` (Will become something like ``REACT_APP_MAPBOX_TOKEN=pk.eyJ1IjoibHVnbWluIiwiYSI6ImNrZzhtbXZ5MzBjNW8zMm15MjNleHo2NmoifQ.3qR-N0w1ielTM_C398eYPw``³).



¹ - If you change the port remember to change in ``mobile/.../api.ts``.

² - Remember to put your ``IP`` and not ``localhost`` and then you'll be able to see the app on your phone. Also make shure that the IP is the same in backend and in api.

³ - If your token is literally the same as the token above is because you are using the Default Public Access Token [check about here][docmap].

*Feel free to contact me on "Issues" if you have some trouble in anything.*

# Português

## Tecnologias

Para rodar esse projeto você vai precisar ter as seguintes tecnologias instaladas no seu computador:

- [Node.js]
- [React]
- [React Native]
- [Expo]
- [TypeScript]


## Inicializando

Use ``yarn install`` ou ``npm install`` para instalar as dependencias;

Va para ``backend/src/views/images_view.ts`` e troque o ip (somente o "yourIP"¹) na url pelo seu ``http://yourIP:3333/uploads/${image.path}``. (Vai ficar algo parecido com isso `http://111.111.1.111:3333/uploads/${image.path}`).

Va para ``mobile/src/services/api.ts`` e troque o ip² na url pelo seu ``http://yourIP:3333``.

Va em [MapBox][accmap] e copie seu token, depois crie um arquivo chamado ``.env`` no ``/web`` coloque a variável ``REACT_APP_MAPBOX_TOKEN`` e seu token do mapbox ``REACT_APP_MAPBOX_TOKEN=your.token`` (Vai ficar algo parecido com isso ``REACT_APP_MAPBOX_TOKEN=pk.eyJ1IjoibHVnbWluIiwiYSI6ImNrZzhtbXZ5MzBjNW8zMm15MjNleHo2NmoifQ.3qR-N0w1ielTM_C398eYPw``³).



¹ - Se voce trocar a porta lembre de trocar tambem em ``mobile/.../api.ts``.

² - Lembre de colocar seu ``IP`` e não ``localhost`` assim você vai ser capaz de ver o app pelo seu celular. Tenha a certeza de conferir se colocou o mesmo IP no backend e na api.

³ - Se o seu token for literalmente o mesmo de exemplo acima é porque você está usando o Default Public Access Token [veja mais aqui][docmap].

*Fique a vontade de me chamar no "Issues" se você tiver qualquer problema em qualquer coisa.*


<!-- Sources: -->

[Node.js]: https://nodejs.org/en/
[React]: https://reactjs.org
[React Native]: https://facebook.github.io/react-native/
[Expo]: https://expo.io/
[TypeScript]: https://www.typescriptlang.org/

[docmap]: https://docs.mapbox.com/accounts/overview/tokens/#default-public-access-token
[accmap]: https://account.mapbox.com/
