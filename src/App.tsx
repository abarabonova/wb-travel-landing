import { useState, type CSSProperties } from 'react';

type Scenario = 'new-year' | 'ski' | 'long-weekend';
type PageId = 'ideas' | 'promo' | 'geo';
type Product = { type: string; title: string; meta: string; price: string; image: string; tag?: string; oldPrice?: string };
type ScenarioData = {
  eyebrow: string; title: string; description: string; heroImage: string; heroAlt: string;
  accent: string; softAccent: string; destinations: { city: string; note: string; image: string }[];
  hotels: Product[]; tours: Product[]; experiences: Product[]; heroNote: string;
};

const image = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=86`;

const scenarios: Record<Scenario, ScenarioData> = {
  'new-year': {
    eyebrow: 'Идеи для поездки · зима 2026', title: 'Куда поехать на новогодние каникулы',
    description: 'Поехать на горнолыжку, пожить в уютном домике на Алтае или поймать северное сияние — собрали идеи для зимней поездки.',
    heroImage: image('photo-1519681393784-d120267933ba'), heroAlt: 'Заснеженные горы на рассвете', accent: '#7554e8', softAccent: '#eee9ff', heroNote: 'До Нового года 72 дня',
    destinations: [
      { city: 'Уехать в горы', note: 'лыжи, снег и тёплый SPA', image: image('photo-1500534623283-312aade485b7', 640) },
      { city: 'Пожить в домике', note: 'камин, лес и тишина', image: image('photo-1510798831971-661eb04b3739', 640) },
      { city: 'Увидеть сияние', note: 'Мурманск и ночное небо', image: image('photo-1483347756197-71ef80e95f73', 640) },
      { city: 'Открыть новый город', note: 'прогулки и гастрономия', image: image('photo-1518005020951-eccb494ad742', 640) },
    ],
    hotels: [
      { type: 'Отель · Сочи', title: 'Cosmos Selection', meta: 'Красная Поляна · 4 ночи', price: 'от 8 900 ₽/ночь', oldPrice: '10 500 ₽', tag: '−15%', image: image('photo-1564501049412-61c2a3083791', 560) },
      { type: 'Апартаменты · Казань', title: 'Около Кремля', meta: 'Центр · завтрак включён', price: 'от 5 400 ₽/ночь', image: image('photo-1566073771259-6a8506099945', 560) },
      { type: 'Отель · Мурманск', title: 'Aurora North', meta: 'Вид на залив · 3 ночи', price: 'от 7 100 ₽/ночь', tag: 'Хит', image: image('photo-1551882547-ff40c63fe5fa', 560) },
      { type: 'Санаторий · Сочи', title: 'Магадан', meta: 'Бассейн · 3 звезды', price: 'от 9 765 ₽/ночь', oldPrice: '10 500 ₽', tag: '−7%', image: image('photo-1540555700478-4be289fbecef', 560) },
      { type: 'Шале · Алтай', title: 'Лесной берег', meta: 'Камин · вид на горы', price: 'от 6 800 ₽/ночь', tag: 'Новинка', image: image('photo-1449158743715-0a90ebb6d2d8', 560) },
    ],
    tours: [
      { type: 'Тур · 7 дней', title: 'Зимний Сочи', meta: 'Перелёт + отель + трансфер', price: 'от 64 800 ₽', tag: 'Всё включено', image: image('photo-1551632811-561732d1e306', 560) },
      { type: 'Тур · 5 дней', title: 'Северное сияние', meta: 'Мурманск · групповой тур', price: 'от 39 200 ₽', image: image('photo-1531366936337-7c912a4589a7', 560) },
      { type: 'Тур · 4 дня', title: 'Зимняя Казань', meta: 'Гид + гастрономия', price: 'от 28 500 ₽', image: image('photo-1523731407965-2430cd12f5e4', 560) },
      { type: 'Тур · 6 дней', title: 'Алтайский перезвон', meta: 'Домик + экскурсии + трансфер', price: 'от 57 400 ₽', tag: '−10%', image: image('photo-1500534623283-312aade485b7', 560) },
      { type: 'Тур · 5 дней', title: 'Горнолыжный уикенд', meta: 'Сочи · ски-пасс включён', price: 'от 46 900 ₽', image: image('photo-1486911278844-a81c5267e227', 560) },
    ],
    experiences: [
      { type: 'Впечатление · 3 часа', title: 'Ужин в горах', meta: 'Красная Поляна · 12+', price: 'от 3 900 ₽', image: image('photo-1482049016688-2d3e1b311543', 560) },
      { type: 'Впечатление · 2 часа', title: 'Снегоходы к озеру', meta: 'Мурманск · небольшая группа', price: 'от 6 200 ₽', image: image('photo-1517825738774-7de9363ef735', 560) },
      { type: 'Впечатление · 1,5 часа', title: 'Татарский ужин', meta: 'Казань · дегустация', price: 'от 2 400 ₽', image: image('photo-1547592180-85f173990554', 560) },
      { type: 'Экскурсия · 1 день', title: 'Зимний Алтай', meta: 'Телецкое озеро · для компании', price: 'от 5 800 ₽', image: image('photo-1510798831971-661eb04b3739', 560) },
      { type: 'Экскурсия · 4 часа', title: 'Огни северного города', meta: 'Мурманск · вечерняя прогулка', price: 'от 3 100 ₽', tag: 'Хит', image: image('photo-1483347756197-71ef80e95f73', 560) },
    ],
  },
  ski: {
    eyebrow: 'Снежный сезон · декабрь — март', title: 'Склоны зовут. Осталось выбрать свой',
    description: 'Горнолыжные курорты для первого спуска, уверенного карвинга и тех самых выходных в снегу.',
    heroImage: image('photo-1486911278844-a81c5267e227'), heroAlt: 'Снежный склон и горные вершины', accent: '#1f9b8c', softAccent: '#dff6f1', heroNote: 'Снег уже ждёт',
    destinations: [
      { city: 'Роза Хутор', note: 'высоко и красиво', image: image('photo-1551524559-8af4e6624178', 640) },
      { city: 'Шерегеш', note: 'много снега', image: image('photo-1517825738774-7de9363ef735', 640) },
      { city: 'Архыз', note: 'для новичков', image: image('photo-1519681393784-d120267933ba', 640) },
      { city: 'Кировск', note: 'северный вайб', image: image('photo-1483347756197-71ef80e95f73', 640) },
    ],
    hotels: [
      { type: 'Отель · Роза Хутор', title: 'Green Flow', meta: 'Ski-in · SPA с видом', price: 'от 11 400 ₽/ночь', tag: '−20%', image: image('photo-1510798831971-661eb04b3739', 560) },
      { type: 'Шале · Шерегеш', title: 'Лесной дом', meta: 'До подъёмника 7 минут', price: 'от 8 700 ₽/ночь', image: image('photo-1449158743715-0a90ebb6d2d8', 560) },
      { type: 'Отель · Архыз', title: 'Mountain View', meta: 'Завтрак · прокат рядом', price: 'от 6 100 ₽/ночь', tag: 'Новинка', image: image('photo-1544986581-efac024faf62', 560) },
    ],
    tours: [
      { type: 'Тур · 6 дней', title: 'Роза Хутор', meta: 'Перелёт + отель + ски-пасс', price: 'от 74 900 ₽', tag: 'Лучшая цена', image: image('photo-1551524559-8af4e6624178', 560) },
      { type: 'Тур · 5 дней', title: 'Шерегеш без забот', meta: 'Трансфер и инструктор', price: 'от 48 600 ₽', image: image('photo-1454496522488-7a8e488e8606', 560) },
      { type: 'Тур · 4 дня', title: 'Архыз для своих', meta: 'Камерный отель · завтраки', price: 'от 35 200 ₽', image: image('photo-1464822759023-fed622ff2c3b', 560) },
    ],
    experiences: [
      { type: 'Впечатление · 2 часа', title: 'Урок с инструктором', meta: 'Роза Хутор · любой уровень', price: 'от 4 500 ₽', image: image('photo-1486911278844-a81c5267e227', 560) },
      { type: 'Впечатление · 3 часа', title: 'Фрирайд-день', meta: 'Шерегеш · для опытных', price: 'от 7 800 ₽', image: image('photo-1519681393784-d120267933ba', 560) },
      { type: 'Впечатление · 1 день', title: 'Спа после склона', meta: 'Архыз · бассейн и сауна', price: 'от 2 900 ₽', image: image('photo-1540555700478-4be289fbecef', 560) },
    ],
  },
  'long-weekend': {
    eyebrow: 'Длинные выходные · 3–5 дней', title: 'Короткий отпуск, большие впечатления',
    description: 'Маршруты, которые легко собрать за вечер: быстрый перелёт, красивый отель и планы на каждый день.',
    heroImage: image('photo-1523731407965-2430cd12f5e4'), heroAlt: 'Путешественник смотрит на горный пейзаж', accent: '#e36b4e', softAccent: '#fff0eb', heroNote: '3 дня — уже путешествие',
    destinations: [
      { city: 'Стамбул', note: 'кофе и Босфор', image: image('photo-1524231757912-21f4fe3a7200', 640) },
      { city: 'Тбилиси', note: 'вино и дворики', image: image('photo-1473277659558-51b3d10d1b3d', 640) },
      { city: 'Ереван', note: 'тепло круглый год', image: image('photo-1533105079780-92b9be482077', 640) },
      { city: 'Минск', note: 'легко и рядом', image: image('photo-1548013146-72479768bada', 640) },
    ],
    hotels: [
      { type: 'Отель · Стамбул', title: 'The Galata House', meta: 'Старый город · 3 ночи', price: 'от 9 800 ₽/ночь', tag: '−12%', image: image('photo-1520250497591-112f2f40a3f4', 560) },
      { type: 'Отель · Тбилиси', title: 'Rooms Hotel', meta: 'Вера · дизайнерский отель', price: 'от 7 300 ₽/ночь', image: image('photo-1566665797739-1674de7a421a', 560) },
      { type: 'Отель · Ереван', title: 'The Alexander', meta: 'Центр · поздний выезд', price: 'от 10 100 ₽/ночь', tag: 'Хит', image: image('photo-1564501049412-61c2a3083791', 560) },
    ],
    tours: [
      { type: 'Тур · 4 дня', title: 'Стамбул на вкус', meta: 'Отель + прогулки + ужин', price: 'от 52 300 ₽', tag: 'Гид включён', image: image('photo-1541432901042-2d8a0f5f5f6a', 560) },
      { type: 'Тур · 3 дня', title: 'Тбилиси slow trip', meta: 'Билеты + бутик-отель', price: 'от 31 800 ₽', image: image('photo-1473277659558-51b3d10d1b3d', 560) },
      { type: 'Тур · 4 дня', title: 'Ереван с характером', meta: 'Гастрономия · винодельни', price: 'от 43 600 ₽', image: image('photo-1528181304800-259b08848526', 560) },
    ],
    experiences: [
      { type: 'Впечатление · 4 часа', title: 'Босфор на закате', meta: 'Стамбул · камерная яхта', price: 'от 4 100 ₽', image: image('photo-1524231757912-21f4fe3a7200', 560) },
      { type: 'Впечатление · 3 часа', title: 'Вино и хинкали', meta: 'Тбилиси · локальный гид', price: 'от 3 200 ₽', image: image('photo-1547592180-85f173990554', 560) },
      { type: 'Впечатление · 5 часов', title: 'Город и коньяк', meta: 'Ереван · для компании', price: 'от 3 600 ₽', image: image('photo-1528181304800-259b08848526', 560) },
    ],
  },
};

function Logo() { return <div className="brand" aria-label="WB Travel"><span className="brand-mark">wb</span><span className="brand-word">travel</span></div>; }
function Arrow({ light = false }: { light?: boolean }) { return <span className={light ? 'arrow arrow-light' : 'arrow'} aria-hidden="true">↗</span>; }

function ProductCard({ item, onFavorite }: { item: Product; onFavorite: (title: string) => void }) {
  const [saved, setSaved] = useState(false);
  return <article className="product-card">
    <div className="product-image-wrap"><img src={item.image} alt="" className="product-image" loading="lazy" />
      {item.tag && <span className={`product-tag ${item.tag.startsWith('−') ? 'discount-tag' : ''}`}>{item.tag}</span>}
      <button className={`save-button ${saved ? 'saved' : ''}`} type="button" aria-label={saved ? `Убрать ${item.title} из избранного` : `Добавить ${item.title} в избранное`} onClick={() => { setSaved((value) => !value); onFavorite(item.title); }}>{saved ? '♥' : '♡'}</button>
    </div>
    <div className="product-copy"><span className="product-type">{item.type}</span><div className="product-price-row"><strong>{item.price}</strong>{item.oldPrice && <del>{item.oldPrice}</del>}</div><h3>{item.title}</h3><span className="product-meta">{item.meta}</span><div className="product-bottom"><button type="button" className="tiny-link">Подробнее <Arrow /></button></div></div>
  </article>;
}

function Shelf({ title, subtitle, items, onFavorite }: { title: string; subtitle: string; items: Product[]; onFavorite: (title: string) => void }) {
  return <section className="shelf section-shell"><div className="section-heading"><div><h2>{title}</h2><p>{subtitle}</p></div><button type="button" className="section-link">Смотреть все <Arrow /></button></div><div className="product-grid">{items.map((item) => <ProductCard key={item.title} item={item} onFavorite={onFavorite} />)}</div></section>;
}

function PromoCard({ badge, title, text, code, tone, onCopy }: { badge: string; title: string; text: string; code: string; tone: string; onCopy: (code: string) => void }) {
  return <article className={`promo-card ${tone}`}><span className="promo-card-badge">{badge}</span><h3>{title}</h3><p>{text}</p><div className="promo-code-line"><code>{code}</code><button type="button" onClick={() => onCopy(code)}>Скопировать</button></div></article>;
}

function PromoPage({ notify }: { notify: (message: string) => void }) {
  return <div className="promo-page">
    <section className="promo-hero section-shell"><div className="promo-hero-copy"><span className="eyebrow">WB TRAVEL · БОНУСЫ ДЛЯ ПУТЕШЕСТВИЯ</span><h2>Начните знакомство с WB Travel со скидки</h2><p>Билеты, отели, туры и впечатления — собрали в одном месте, чтобы первая поездка началась проще.</p><div className="main-promo"><div><span>Промокод на первый заказ</span><strong>−1 000 ₽</strong><small>на поездку от 15 000 ₽</small></div><button type="button" onClick={() => notify('Промокод TRAVEL1000 скопирован')}>TRAVEL1000 <span>Скопировать</span></button></div></div><div className="promo-hero-art"><div className="art-photo art-photo-one" /><div className="art-photo art-photo-two" /><div className="art-photo art-photo-three" /><span className="art-sticker">ваша<br />следующая<br /><em>поездка</em></span></div></section>
    <section className="trust-strip section-shell"><div><span className="eyebrow">Почему WB Travel</span><h2>Всё для поездки — в одном месте</h2></div><div className="trust-items"><span><b>01</b><strong>Авиа и ж/д</strong><small>билеты без лишних шагов</small></span><span><b>02</b><strong>Отели и туры</strong><small>от идеи до бронирования</small></span><span><b>03</b><strong>Впечатления</strong><small>чтобы запомнилось</small></span></div></section>
    <section className="promo-shelf section-shell"><div className="section-heading"><div><span className="eyebrow">Ещё немного выгоды</span><h2>С чего начать поездку</h2><p>Примеры офферов для знакомства с сервисом</p></div></div><div className="promo-grid"><PromoCard badge="ПЕРВЫЙ ЗАКАЗ" title="Скидка на билет" text="Начните с дороги: выберите авиа или ж/д и отправляйтесь в новый город." code="TRAVEL1000" tone="lilac" onCopy={(code) => notify(`${code} скопирован`)} /><PromoCard badge="ОТЕЛИ" title="Ночь в подарок" text="Подборка отелей для коротких каникул, длинных выходных и спонтанных планов." code="STAYMORE" tone="sand" onCopy={(code) => notify(`${code} скопирован`)} /><PromoCard badge="ВПЕЧАТЛЕНИЯ" title="Добавьте что-то особенное" text="Экскурсии, ужины и прогулки, которые превращают поездку в историю." code="GOOUT" tone="mint" onCopy={(code) => notify(`${code} скопирован`)} /></div></section>
    <section className="promo-story section-shell"><div className="promo-story-label">Небольшой гид</div><div><h2>Соберите поездку<br /><em>по своему ритму</em></h2><p>Можно начать с промокода, города или одного желания. Добавьте к нему отель, маршрут и впечатление — WB Travel поможет собрать всё последовательно.</p><button type="button" className="text-cta" onClick={() => notify('Открываем подборки WB Travel')}>Посмотреть подборки <Arrow /></button></div></section>
  </div>;
}

function GeoPage({ notify }: { notify: (message: string) => void }) {
  const hotels: Product[] = [
    { type: 'Отель · Занзибар', title: 'Zuri Zanzibar', meta: 'Пляж Кендва · завтраки', price: 'от 24 800 ₽/ночь', tag: '−18%', oldPrice: '30 200 ₽', image: image('photo-1540541338287-41700207dee6', 560) },
    { type: 'Лодж · Серенгети', title: 'Kubu Kubu Tented Lodge', meta: 'Национальный парк · полный пансион', price: 'от 31 600 ₽/ночь', image: image('photo-1516426122078-c23e76319801', 560) },
    { type: 'Отель · Нунгви', title: 'Essque Zalu', meta: 'Первая линия · бассейн', price: 'от 18 900 ₽/ночь', tag: 'Хит', image: image('photo-1505881502353-a1986add3762', 560) },
    { type: 'Лодж · Нгоронгоро', title: 'Ngorongoro Serena', meta: 'Вид на кратер · 2 ночи', price: 'от 29 400 ₽/ночь', image: image('photo-1533130061792-64b345e4a833', 560) },
  ];
  const tours: Product[] = [
    { type: 'Тур · 10 дней', title: 'Сафари + Занзибар', meta: 'Перелёт · сафари · 5 ночей у океана', price: 'от 219 900 ₽', tag: 'Всё включено', image: image('photo-1516426122078-c23e76319801', 560) },
    { type: 'Тур · 8 дней', title: 'Килиманджаро и водопады', meta: 'Гид · треккинг · трансферы', price: 'от 184 600 ₽', image: image('photo-1516026672322-bc52d61a55d5', 560) },
    { type: 'Тур · 7 дней', title: 'Остров специй', meta: 'Занзибар · пляжный отдых', price: 'от 126 400 ₽', tag: '−12%', image: image('photo-1518509562904-e7ef99cdcc86', 560) },
    { type: 'Тур · 12 дней', title: 'Большое путешествие', meta: 'Сафари · океан · локальные места', price: 'от 286 800 ₽', image: image('photo-1539650116574-75c0c6d73f6e', 560) },
  ];
  const experiences: Product[] = [
    { type: 'Экскурсия · 1 день', title: 'Сафари в Тарангире', meta: 'Слонов, баобабы и закат', price: 'от 12 400 ₽', image: image('photo-1516426122078-c23e76319801', 560) },
    { type: 'Впечатление · 4 часа', title: 'Снорклинг у рифа', meta: 'Занзибар · небольшая группа', price: 'от 5 600 ₽', image: image('photo-1544551763-46a013bb70d5', 560) },
    { type: 'Экскурсия · 6 часов', title: 'Каменный город', meta: 'История, рынок и пряности', price: 'от 3 900 ₽', image: image('photo-1516026672322-bc52d61a55d5', 560) },
    { type: 'Впечатление · 3 часа', title: 'Ужин на закате', meta: 'Пляж Нунгви · морепродукты', price: 'от 4 700 ₽', tag: 'Хит', image: image('photo-1507525428034-b723cf961d3e', 560) },
  ];
  return <div className="geo-page">
    <section className="geo-hero section-shell"><div className="geo-hero-copy"><span className="eyebrow">ОТДЕЛЬНОЕ GEO · ТАНЗАНИЯ</span><h2>Прямые рейсы в Танзанию — повод собрать свою Африку</h2><p>Можно взять только авиа, добавить отель на Занзибаре или сразу выбрать готовый тур с сафари.</p><div className="geo-route"><span>Москва</span><i>→</i><strong>Занзибар</strong><small>прямой перелёт · от 54 900 ₽</small></div></div><div className="geo-hero-art"><img src={image('photo-1516426122078-c23e76319801')} alt="Саванна Танзании" /><span className="geo-art-label">ТАНЗАНИЯ<br /><em>настроить под себя</em></span></div></section>
    <section className="geo-intro section-shell"><div><span className="eyebrow">Соберите поездку сами</span><h2>Выберите только нужное</h2></div><div className="geo-steps"><span><b>01</b><strong>Только авиа</strong><small>для тех, кто любит планировать сам</small></span><span><b>02</b><strong>Авиа + отель</strong><small>билет и место у океана</small></span><span><b>03</b><strong>Готовый тур</strong><small>сафари, трансферы и гид</small></span></div></section>
    <section className="geo-flight section-shell"><div className="section-heading"><div><span className="eyebrow">Авиа</span><h2>Добраться до острова</h2><p>Прямые рейсы — основа маршрута, остальное можно добавить ниже.</p></div><button type="button" className="section-link" onClick={() => notify('Открываем все варианты перелётов')}>Все варианты <Arrow /></button></div><article className="flight-offer"><div className="flight-offer-route"><span><small>Вылет</small><strong>Москва</strong><b>54 900 ₽</b></span><i>→</i><span><small>Прилет</small><strong>Занзибар</strong><b>туда и обратно</b></span></div><div className="flight-offer-meta"><span>14 ч 20 мин</span><span>без пересадок</span><span>выбор дат</span></div><button type="button" onClick={() => notify('Выбираем даты перелёта')}>Выбрать даты <Arrow /></button></article></section>
    <Shelf title="Где остановиться" subtitle="Отели на берегу океана и лоджи рядом с национальными парками" items={hotels} onFavorite={(title) => notify(`${title} — добавлено в избранное`)} />
    <Shelf title="Готовые туры" subtitle="Собранные маршруты, если хочется просто выбрать и поехать" items={tours} onFavorite={(title) => notify(`${title} — добавлено в избранное`)} />
    <Shelf title="Что посмотреть" subtitle="Сафари, океан и локальные впечатления — добавьте к маршруту" items={experiences} onFavorite={(title) => notify(`${title} — добавлено в избранное`)} />
  </div>;
}

export function App() {
  const [toast, setToast] = useState('');
  const [page, setPage] = useState<PageId>('ideas');
  const data = scenarios['new-year'];
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2600); };
  return <div className="app" style={{ '--accent': data.accent, '--soft-accent': data.softAccent } as CSSProperties}>
    <header className="topbar"><div className="topbar-inner"><Logo /><nav className="main-nav" aria-label="Основная навигация"><a className={page === 'ideas' ? 'active' : ''} href="#ideas" onClick={() => setPage('ideas')}>Идеи для поездок</a><a href="#hotels">Отели</a><a href="#tours">Туры</a><a href="#experiences">Впечатления</a></nav><div className="page-switcher" aria-label="Страницы спецпроекта"><button className={page === 'ideas' ? 'active' : ''} type="button" onClick={() => setPage('ideas')}><b>01</b><span>Идеи</span></button><button className={page === 'promo' ? 'active' : ''} type="button" onClick={() => setPage('promo')}><b>02</b><span>Промо</span></button><button className={page === 'geo' ? 'active' : ''} type="button" onClick={() => setPage('geo')}><b>03</b><span>Гео</span></button></div><div className="topbar-actions"><button className="location-button" type="button"><span>⌖</span> Москва</button><button className="profile-button" type="button" onClick={() => notify('Вход в профиль скоро будет доступен')}>Профиль <span>↗</span></button></div></div></header>
    <main>
      {page === 'promo' ? <PromoPage notify={notify} /> : page === 'geo' ? <GeoPage notify={notify} /> : <>
      <section className="hero simple-hero section-shell" id="ideas"><div className="hero-copy"><span className="eyebrow">{data.eyebrow}</span><h2>{data.title}</h2><p>{data.description}</p></div></section>
      <section className="destination-section section-shell"><div className="section-heading destination-heading"><div><span className="eyebrow">Собрали для вас</span><h2>Идеи, как провести новогодние каникулы</h2></div><span className="heading-note">Листайте, чтобы увидеть всё</span></div><div className="destination-grid">{data.destinations.map((item, index) => <button className="destination-card" key={item.city} type="button" onClick={() => notify(`${item.city}: открываем варианты поездки`)}><img src={item.image} alt="" loading="lazy" /><span className="destination-overlay" /><span className="destination-number">0{index + 1}</span><span className="destination-copy"><small>{item.note}</small><strong>{item.city}</strong></span><span className="destination-arrow"><Arrow light /></span></button>)}</div></section>
      <div id="hotels"><Shelf title="Где остановиться" subtitle="Отели с хорошим расположением и тем самым видом из окна" items={data.hotels} onFavorite={(title) => notify(`${title} — добавлено в избранное`)} /></div>
      <div id="tours"><Shelf title="Готовые маршруты" subtitle="Перелёт, проживание и планы на каждый день — уже в одной поездке" items={data.tours} onFavorite={(title) => notify(`${title} — добавлено в избранное`)} /></div>
      <div id="experiences"><Shelf title="Экскурсии и впечатления" subtitle="Локальные идеи, ради которых хочется задержаться ещё на день" items={data.experiences} onFavorite={(title) => notify(`${title} — добавлено в избранное`)} /></div>
      </>}
    </main>
    <footer className="footer"><div className="footer-inner"><Logo /><span>Идеи, которые превращаются в планы</span><div><a href="#ideas">Наверх ↑</a><a href="#ideas">О проекте</a></div></div></footer>
    {toast && <div className="toast" role="status">{toast}</div>}
  </div>;
}
