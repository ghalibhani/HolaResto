(()=>{"use strict";var r,n={948:(r,n,A)=>{A.d(n,{Z:()=>a});var e=A(537),i=A.n(e),o=A(645),t=A.n(o)()(i());t.push([r.id,"@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n      grid-template-columns: 1fr auto;\r\n      padding: 8px 32px;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n      display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n      position: static;\r\n      width: 100%;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n      display: inline-block;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li a {\r\n      display: inline-block;\r\n      width: 120px;\r\n      text-align: center;\r\n      margin: 0;\r\n    }\r\n   \r\n    .movies {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n   \r\n    .movie {\r\n      grid-template-columns: auto 1fr;\r\n    }\r\n   \r\n    .movie .movie__title {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n   \r\n    .movie .movie__overview {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 2em;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 850px) {\r\n    .movies {\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1200px) {\r\n    .movies {\r\n      grid-template-columns: repeat(4, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1600px) {\r\n    .movies {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;MACE,+BAA+B;MAC/B,iBAAiB;IACnB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,WAAW;IACb;;IAEA;MACE,qBAAqB;IACvB;;IAEA;MACE,qBAAqB;MACrB,YAAY;MACZ,kBAAkB;MAClB,SAAS;IACX;;IAEA;MACE,8BAA8B;IAChC;;IAEA;MACE,+BAA+B;IACjC;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;QACI,qCAAqC;IACzC;EACF",sourcesContent:["@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n      grid-template-columns: 1fr auto;\r\n      padding: 8px 32px;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n      display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n      position: static;\r\n      width: 100%;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n      display: inline-block;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li a {\r\n      display: inline-block;\r\n      width: 120px;\r\n      text-align: center;\r\n      margin: 0;\r\n    }\r\n   \r\n    .movies {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n   \r\n    .movie {\r\n      grid-template-columns: auto 1fr;\r\n    }\r\n   \r\n    .movie .movie__title {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n   \r\n    .movie .movie__overview {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 2em;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 850px) {\r\n    .movies {\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1200px) {\r\n    .movies {\r\n      grid-template-columns: repeat(4, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1600px) {\r\n    .movies {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }"],sourceRoot:""}]);const a=t},890:(r,n,A)=>{A.d(n,{Z:()=>a});var e=A(537),i=A.n(e),o=A(645),t=A.n(o)()(i());t.push([r.id,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n   \r\n  body {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n   \r\n   \r\n  /*\r\n    AppBar\r\n  */\r\n   \r\n  .app-bar {\r\n    padding: 8px 16px;\r\n    background-color: #e1d699;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 98;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n   \r\n  .app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 30px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand h1 {\r\n    color: #395144;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    user-select: none;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: #e1d699;\r\n    overflow: hidden;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 10px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n  }\r\n   \r\n  /*\r\n    Main Content\r\n  */\r\n   \r\n  main {\r\n    padding: 32px;\r\n    flex: 1;\r\n  }\r\n   \r\n  .content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n  }\r\n   \r\n  .content .content__heading {\r\n    text-align: center;\r\n    background-color: #CFB997;\r\n    color: #383838;\r\n    padding: 6px;\r\n    font-weight: 600;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  /* skip konten */\r\n  .skip-content {\r\n    position: absolute;\r\n    top: -50px;\r\n    background-color: #face7f;\r\n    text-decoration: none;\r\n    color: #402218;\r\n    padding: 8px;\r\n    z-index: 99;\r\n  }\r\n  \r\n  .skip-content:focus {\r\n    top: 0;\r\n    z-index: 99;\r\n  }\r\n\r\n  /* hero */\r\n  .hero {\r\n    height: 400px;\r\n    width: 100%;\r\n  }\r\n\r\n  .hero picture img {\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n  \r\n  .hero h1 {\r\n    font-size: 30px;\r\n    color: #630a10;\r\n    padding: 0 5px;\r\n    border-radius: 15px;\r\n    opacity: 0.8;\r\n    text-align: center;\r\n    background-color: white;\r\n  }\r\n   \r\n  /*\r\n    Movies\r\n  */\r\n   \r\n  .movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n  }\r\n   \r\n   \r\n  /*\r\n    Movie Item\r\n  */\r\n   \r\n  .movie-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n  }\r\n   \r\n  .movie-item__header {\r\n    position: relative;\r\n  }\r\n   \r\n  /* test */\r\n  .movie-item__header__poster {\r\n    height: 220px;\r\n  }\r\n  /* test */\r\n\r\n  .movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n  }\r\n   \r\n  .movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n   \r\n  .movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n  }\r\n   \r\n  .movie-item .movie-item__content {\r\n    padding: 16px;\r\n  }\r\n   \r\n  .movie-item .movie-item__content h3 {\r\n    margin: 0 0 10px 0;\r\n    color: #395144;\r\n    font-size: 25px;\r\n  }\r\n   \r\n  .movie-item .movie-item__content h3 a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n  }\r\n   \r\n  .movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4; /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n  }\r\n\r\n  .detail-btn {\r\n    padding: 11px 5px;\r\n    background-color: #395144;\r\n    color: white;\r\n    border-radius: 12px;\r\n    text-decoration: none;\r\n  }\r\n   \r\n   \r\n  /*\r\n    Movie\r\n  */\r\n   \r\n  .movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n  }\r\n   \r\n  .movie .movie__poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n  }\r\n   \r\n  .movie .movie__info h4 {\r\n    margin: 8px 0;\r\n  }\r\n   \r\n  .movie__info {\r\n    padding: 16px;\r\n    border: 3px solid black;\r\n    border-radius: 30px;\r\n  }\r\n\r\n  /* Detail food and drink */\r\n  .detail-food li {\r\n    list-style: none;\r\n  }\r\n\r\n  .detail-drink li {\r\n    list-style: none;\r\n  }\r\n\r\n  /* Review */\r\n  .detail-review {\r\n    display: contents;\r\n    max-width: 100%;\r\n    font-size: 1em;\r\n    text-align: center;\r\n    width: 300px;\r\n  }\r\n  \r\n  .review-tag {\r\n    font-size: 30px;\r\n    background-color: #dbc879;\r\n    margin: auto;\r\n    padding: 15px;\r\n    border-radius: 27px;\r\n  }\r\n\r\n  .detail-review-item {\r\n    color: black;\r\n    background-color: #829460;\r\n    margin-bottom: 1.5em;\r\n    padding: 0em 0.5em;\r\n    border-radius: 30px;\r\n  }\r\n  \r\n  .detail-review-item:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .review-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1em 1em;\r\n    color: black;\r\n    border-bottom: 1px solid black;\r\n  }\r\n  \r\n  .review-name {\r\n    font-weight: bold;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .review-date {\r\n    font-size: 0.8em;\r\n    font-weight: lighter;\r\n  }\r\n  \r\n  .review-body {\r\n    padding: 1em;\r\n    text-align: left;\r\n  }\r\n\r\n  /*\r\n  Like\r\n  */\r\n    .like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n    \r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n    \r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  /*\r\n    Footer\r\n  */\r\n   \r\n  footer {\r\n    padding: 16px;\r\n    background-color: #624e2b;\r\n  }\r\n   \r\n  footer p {\r\n    text-align: center;\r\n    color: #ffffff;\r\n  }\r\n   \r\n  footer p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n  }","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;IACI,UAAU;IACV,SAAS;EACX;;EAEA;IACE,kCAAkC;IAClC,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;EACxB;;;EAGA;;GAEC;;EAED;IACE,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;IACb,oCAAoC;IACpC,SAAS;IACT,gBAAgB;IAChB,MAAM;IACN,WAAW;IACX,0CAA0C;EAC5C;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,aAAa;IACb,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,WAAW;EACb;;EAEA;;GAEC;;EAED;IACE,aAAa;IACb,OAAO;EACT;;EAEA;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA,gBAAgB;EAChB;IACE,kBAAkB;IAClB,UAAU;IACV,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;IACd,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,MAAM;IACN,WAAW;EACb;;EAEA,SAAS;EACT;IACE,aAAa;IACb,WAAW;EACb;;EAEA;IACE,WAAW;IACX,aAAa;EACf;;EAEA;IACE,eAAe;IACf,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;EACzB;;EAEA;;GAEC;;EAED;IACE,aAAa;IACb,0BAA0B;IAC1B,SAAS;IACT,cAAc;EAChB;;;EAGA;;GAEC;;EAED;IACE,WAAW;IACX,0CAA0C;IAC1C,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;EACpB;;EAEA,SAAS;EACT;IACE,aAAa;EACf;EACA,SAAS;;EAET;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,OAAO;IACP,qBAAqB;IACrB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB,EAAE,4BAA4B;IACnD,4BAA4B;EAC9B;;EAEA;IACE,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;EACvB;;;EAGA;;GAEC;;EAED;IACE,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,0BAA0B;IAC1B,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA,0BAA0B;EAC1B;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA,WAAW;EACX;IACE,iBAAiB;IACjB,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,YAAY;EACd;;EAEA;IACE,eAAe;IACf,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,yBAAyB;IACzB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;EAChC;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;;EAEA;;GAEC;IACC;IACA,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;;IAEzB,eAAe;IACf,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,SAAS;;IAET,eAAe;IACf,YAAY;IACZ,eAAe;EACjB;;EAEA;;GAEC;;EAED;IACE,aAAa;IACb,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,cAAc;IACd,qBAAqB;EACvB",sourcesContent:["* {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n   \r\n  body {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n   \r\n   \r\n  /*\r\n    AppBar\r\n  */\r\n   \r\n  .app-bar {\r\n    padding: 8px 16px;\r\n    background-color: #e1d699;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 98;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n   \r\n  .app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 30px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand h1 {\r\n    color: #395144;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    user-select: none;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: #e1d699;\r\n    overflow: hidden;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 10px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n  }\r\n   \r\n  /*\r\n    Main Content\r\n  */\r\n   \r\n  main {\r\n    padding: 32px;\r\n    flex: 1;\r\n  }\r\n   \r\n  .content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n  }\r\n   \r\n  .content .content__heading {\r\n    text-align: center;\r\n    background-color: #CFB997;\r\n    color: #383838;\r\n    padding: 6px;\r\n    font-weight: 600;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  /* skip konten */\r\n  .skip-content {\r\n    position: absolute;\r\n    top: -50px;\r\n    background-color: #face7f;\r\n    text-decoration: none;\r\n    color: #402218;\r\n    padding: 8px;\r\n    z-index: 99;\r\n  }\r\n  \r\n  .skip-content:focus {\r\n    top: 0;\r\n    z-index: 99;\r\n  }\r\n\r\n  /* hero */\r\n  .hero {\r\n    height: 400px;\r\n    width: 100%;\r\n  }\r\n\r\n  .hero picture img {\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n  \r\n  .hero h1 {\r\n    font-size: 30px;\r\n    color: #630a10;\r\n    padding: 0 5px;\r\n    border-radius: 15px;\r\n    opacity: 0.8;\r\n    text-align: center;\r\n    background-color: white;\r\n  }\r\n   \r\n  /*\r\n    Movies\r\n  */\r\n   \r\n  .movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n  }\r\n   \r\n   \r\n  /*\r\n    Movie Item\r\n  */\r\n   \r\n  .movie-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n  }\r\n   \r\n  .movie-item__header {\r\n    position: relative;\r\n  }\r\n   \r\n  /* test */\r\n  .movie-item__header__poster {\r\n    height: 220px;\r\n  }\r\n  /* test */\r\n\r\n  .movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n  }\r\n   \r\n  .movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n   \r\n  .movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n  }\r\n   \r\n  .movie-item .movie-item__content {\r\n    padding: 16px;\r\n  }\r\n   \r\n  .movie-item .movie-item__content h3 {\r\n    margin: 0 0 10px 0;\r\n    color: #395144;\r\n    font-size: 25px;\r\n  }\r\n   \r\n  .movie-item .movie-item__content h3 a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n  }\r\n   \r\n  .movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4; /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n  }\r\n\r\n  .detail-btn {\r\n    padding: 11px 5px;\r\n    background-color: #395144;\r\n    color: white;\r\n    border-radius: 12px;\r\n    text-decoration: none;\r\n  }\r\n   \r\n   \r\n  /*\r\n    Movie\r\n  */\r\n   \r\n  .movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n  }\r\n   \r\n  .movie .movie__poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n  }\r\n   \r\n  .movie .movie__info h4 {\r\n    margin: 8px 0;\r\n  }\r\n   \r\n  .movie__info {\r\n    padding: 16px;\r\n    border: 3px solid black;\r\n    border-radius: 30px;\r\n  }\r\n\r\n  /* Detail food and drink */\r\n  .detail-food li {\r\n    list-style: none;\r\n  }\r\n\r\n  .detail-drink li {\r\n    list-style: none;\r\n  }\r\n\r\n  /* Review */\r\n  .detail-review {\r\n    display: contents;\r\n    max-width: 100%;\r\n    font-size: 1em;\r\n    text-align: center;\r\n    width: 300px;\r\n  }\r\n  \r\n  .review-tag {\r\n    font-size: 30px;\r\n    background-color: #dbc879;\r\n    margin: auto;\r\n    padding: 15px;\r\n    border-radius: 27px;\r\n  }\r\n\r\n  .detail-review-item {\r\n    color: black;\r\n    background-color: #829460;\r\n    margin-bottom: 1.5em;\r\n    padding: 0em 0.5em;\r\n    border-radius: 30px;\r\n  }\r\n  \r\n  .detail-review-item:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .review-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1em 1em;\r\n    color: black;\r\n    border-bottom: 1px solid black;\r\n  }\r\n  \r\n  .review-name {\r\n    font-weight: bold;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .review-date {\r\n    font-size: 0.8em;\r\n    font-weight: lighter;\r\n  }\r\n  \r\n  .review-body {\r\n    padding: 1em;\r\n    text-align: left;\r\n  }\r\n\r\n  /*\r\n  Like\r\n  */\r\n    .like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n    \r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n    \r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  /*\r\n    Footer\r\n  */\r\n   \r\n  footer {\r\n    padding: 16px;\r\n    background-color: #624e2b;\r\n  }\r\n   \r\n  footer p {\r\n    text-align: center;\r\n    color: #ffffff;\r\n  }\r\n   \r\n  footer p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n  }"],sourceRoot:""}]);const a=t},362:(r,n,A)=>{var e=A(379),i=A.n(e),o=A(795),t=A.n(o),a=A(569),p=A.n(a),d=A(565),l=A.n(d),m=A(216),C=A.n(m),s=A(589),B=A.n(s),c=A(948),E={};E.styleTagTransform=B(),E.setAttributes=l(),E.insert=p().bind(null,"head"),E.domAPI=t(),E.insertStyleElement=C(),i()(c.Z,E),c.Z&&c.Z.locals&&c.Z.locals},915:(r,n,A)=>{var e=A(379),i=A.n(e),o=A(795),t=A.n(o),a=A(569),p=A.n(a),d=A(565),l=A.n(d),m=A(216),C=A.n(m),s=A(589),B=A.n(s),c=A(890),E={};E.styleTagTransform=B(),E.setAttributes=l(),E.insert=p().bind(null,"head"),E.domAPI=t(),E.insertStyleElement=C(),i()(c.Z,E),c.Z&&c.Z.locals&&c.Z.locals}},A={};function e(r){var i=A[r];if(void 0!==i)return i.exports;var o=A[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,r=[],e.O=(n,A,i,o)=>{if(!A){var t=1/0;for(l=0;l<r.length;l++){for(var[A,i,o]=r[l],a=!0,p=0;p<A.length;p++)(!1&o||t>=o)&&Object.keys(e.O).every((r=>e.O[r](A[p])))?A.splice(p--,1):(a=!1,o<t&&(t=o));if(a){r.splice(l--,1);var d=i();void 0!==d&&(n=d)}}return n}o=o||0;for(var l=r.length;l>0&&r[l-1][2]>o;l--)r[l]=r[l-1];r[l]=[A,i,o]},e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var A in n)e.o(n,A)&&!e.o(r,A)&&Object.defineProperty(r,A,{enumerable:!0,get:n[A]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r={400:0};e.O.j=n=>0===r[n];var n=(n,A)=>{var i,o,[t,a,p]=A,d=0;if(t.some((n=>0!==r[n]))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(p)var l=p(e)}for(n&&n(A);d<t.length;d++)o=t[d],e.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return e.O(l)},A=self.webpackChunkrestaurantv2=self.webpackChunkrestaurantv2||[];A.forEach(n.bind(null,0)),A.push=n.bind(null,A.push.bind(A))})(),e.nc=void 0;var i=e.O(void 0,[946,2,495,337,268,924],(()=>e(253)));i=e.O(i)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map