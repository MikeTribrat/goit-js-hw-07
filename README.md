# goit-js-hw-07
JS Home work #7
<!doctype html>
<html class="docs-version-current" lang="ru" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="generator" content="Docusaurus v2.0.0-beta.14">
<title data-react-helmet="true">Критерии приема | GoIT JavaScript homework textbook</title><meta data-react-helmet="true" name="twitter:card" content="summary_large_image"><meta data-react-helmet="true" property="og:url" content="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/docs/hw-07"><meta data-react-helmet="true" name="docusaurus_locale" content="ru"><meta data-react-helmet="true" name="docusaurus_version" content="current"><meta data-react-helmet="true" name="docusaurus_tag" content="docs-default-current"><meta data-react-helmet="true" property="og:title" content="Критерии приема | GoIT JavaScript homework textbook"><meta data-react-helmet="true" name="description" content="- Создан репозиторий goit-js-hw-07."><meta data-react-helmet="true" property="og:description" content="- Создан репозиторий goit-js-hw-07."><link data-react-helmet="true" rel="icon" href="/textbooks/lms-js-homework/v2/img/favicon.ico"><link data-react-helmet="true" rel="canonical" href="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/docs/hw-07"><link data-react-helmet="true" rel="alternate" href="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/docs/hw-07" hreflang="ru"><link data-react-helmet="true" rel="alternate" href="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/uk/docs/hw-07" hreflang="uk"><link data-react-helmet="true" rel="alternate" href="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/en/docs/hw-07" hreflang="en"><link data-react-helmet="true" rel="alternate" href="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/pl/docs/hw-07" hreflang="pl"><link data-react-helmet="true" rel="alternate" href="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/es/docs/hw-07" hreflang="es"><link data-react-helmet="true" rel="alternate" href="https://your-docusaurus-test-site.com/textbooks/lms-js-homework/v2/docs/hw-07" hreflang="x-default"><link rel="stylesheet" href="/textbooks/lms-js-homework/v2/assets/css/styles.2789ee98.css.pagespeed.ce.8ERIlQfxmF.css">


</head>
<body>
<script>!function(){function t(t){document.documentElement.setAttribute("data-theme",t)}var e=function(){var t=null;try{t=localStorage.getItem("theme")}catch(t){}return t}();t(null!==e?e:"light")}()</script><div id="__docusaurus">
<div><a href="#" class="skipToContent_OuoZ">Перейти к основному содержимому</a></div><nav class="navbar navbar--fixed-top navbarHideable_RReh"><div class="navbar__inner"><div class="navbar__items"><button aria-label="Navigation bar toggle" class="navbar__toggle clean-btn" type="button" tabindex="0"><svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg></button><a class="navbar__brand" href="/textbooks/lms-js-homework/v2/"></a></div><div class="navbar__items navbar__items--right"></div></div><div role="presentation" class="navbar-sidebar__backdrop"></div></nav><div class="main-wrapper docs-wrapper docs-doc-page"><div class="docPage_lDyR"><button aria-label="Scroll back to top" class="clean-btn theme-back-to-top-button backToTopButton_i9tI" type="button"></button><main class="docMainContainer_r8cw docMainContainerEnhanced_SOUu"><div class="container padding-top--md padding-bottom--lg"><div class="row"><div class="col"><div class="docItemContainer_oiyr"><article><div class="theme-doc-markdown markdown"><header><h1>Критерии приема</h1></header><ul><li>Создан репозиторий <code>goit-js-hw-07</code>.</li><li>При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
страницу на <code>GitHub Pages</code>.</li><li>При посещении живой страницы задания, в консоли нету ошибок и предупреждений.</li><li>Имена переменных и функций понятные, описательные.</li><li>Код отформатирован <code>Prettier</code>.</li></ul><h2 class="anchor anchorWithHideOnScrollNavbar_3ly5" id="стартовые-файлы">Стартовые файлы<a class="hash-link" href="#стартовые-файлы" title="Прямая ссылка на этот заголовок">​</a></h2><p><a href="https://downgit.github.io/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/07/src" target="_blank" rel="noopener noreferrer">Скачай стартовые файлы</a>
с базовой разметкой, готовыми стилями и подключенными файлами скриптов для
каждого задания. Скопируй их себе в проект.</p><p>В файле <code>gallery-items.js</code> есть массив <code>galleryItems</code>, который содержит объекты
с информацией о изображениях: маленькое (превью), оригинальное (большое) и
описание. Мы уже подключили его к каждому из JS-файлов проекта.</p><h2 class="anchor anchorWithHideOnScrollNavbar_3ly5" id="задание-1---галерея-изображений">Задание 1 - галерея изображений<a class="hash-link" href="#задание-1---галерея-изображений" title="Прямая ссылка на этот заголовок">​</a></h2><p>Создай галерею с возможностью клика по её элементам и просмотра полноразмерного
изображения в модальном окне. Посмотри демо видео работы галереи.</p><div style="margin-bottom:20px;width:640px;height:360px"></div><p>Выполняй это задание в файлах <code>01-gallery.html</code> и <code>01-gallery.js</code>. Разбей его на
несколько подзадач:</p><ol><li>Создание и рендер разметки по массиву данных <code>galleryItems</code> и
предоставленному шаблону элемента галереи.</li><li>Реализация делегирования на <code>div.gallery</code> и получение <code>url</code> большого
изображения.</li><li>Подключение скрипта и стилей библиотеки модального окна
<a href="https://basiclightbox.electerious.com/" target="_blank" rel="noopener noreferrer">basicLightbox</a>. Используй
<a href="https://www.jsdelivr.com/package/npm/basiclightbox?path=dist" target="_blank" rel="noopener noreferrer">CDN сервис jsdelivr</a>
и добавь в проект ссылки на минифицированные (<code>.min</code>) файлы библиотеки.</li><li>Открытие модального окна по клику на элементе галереи. Для этого ознакомься с
<a href="https://github.com/electerious/basicLightbox#readme" target="_blank" rel="noopener noreferrer">документацией</a> и
<a href="https://basiclightbox.electerious.com/" target="_blank" rel="noopener noreferrer">примерами</a>.</li><li>Замена значения атрибута <code>src</code> элемента <code>&lt;img&gt;</code> в модальном окне перед
открытием. Используй готовую разметку модального окна с изображением из
примеров библиотеки <a href="https://basiclightbox.electerious.com/" target="_blank" rel="noopener noreferrer">basicLightbox</a>.</li></ol><h3 class="anchor anchorWithHideOnScrollNavbar_3ly5" id="разметка-элемента-галереи">Разметка элемента галереи<a class="hash-link" href="#разметка-элемента-галереи" title="Прямая ссылка на этот заголовок">​</a></h3><p>Ссылка на оригинальное изображение должна храниться в data-атрибуте <code>source</code> на
элементе <code>&lt;img&gt;</code>, и указываться в <code>href</code> ссылки. Не добавляй другие HTML теги
или CSS классы кроме тех, что есть в этом шаблоне.</p><div class="codeBlockContainer_J+bg language-html theme-code-block"><div class="codeBlockContent_csEI html"><pre tabindex="0" class="prism-code language-html codeBlock_rtdJ thin-scrollbar" style="color:#393A34;background-color:#f6f8fa"><code class="codeBlockLines_1zSZ"><span class="token-line" style="color:#393A34"><span class="token tag punctuation" style="color:#393A34">&lt;</span><span class="token tag" style="color:#00009f">div</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">class</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">gallery__item</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag punctuation" style="color:#393A34">&gt;</span><span class="token plain"></span><br></span><span class="token-line" style="color:#393A34"><span class="token plain">  </span><span class="token tag punctuation" style="color:#393A34">&lt;</span><span class="token tag" style="color:#00009f">a</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">class</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">gallery__link</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">href</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">large-image.jpg</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag punctuation" style="color:#393A34">&gt;</span><span class="token plain"></span><br></span><span class="token-line" style="color:#393A34"><span class="token plain">    </span><span class="token tag punctuation" style="color:#393A34">&lt;</span><span class="token tag" style="color:#00009f">img</span><span class="token tag" style="color:#00009f"></span><br></span><span class="token-line" style="color:#393A34"><span class="token tag" style="color:#00009f">      </span><span class="token tag attr-name" style="color:#00a4db">class</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">gallery__image</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"></span><br></span><span class="token-line" style="color:#393A34"><span class="token tag" style="color:#00009f">      </span><span class="token tag attr-name" style="color:#00a4db">src</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">small-image.jpg</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"></span><br></span><span class="token-line" style="color:#393A34"><span class="token tag" style="color:#00009f">      </span><span class="token tag attr-name" style="color:#00a4db">data-source</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">large-image.jpg</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"></span><br></span><span class="token-line" style="color:#393A34"><span class="token tag" style="color:#00009f">      </span><span class="token tag attr-name" style="color:#00a4db">alt</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">Image description</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"></span><br></span><span class="token-line" style="color:#393A34"><span class="token tag" style="color:#00009f">    </span><span class="token tag punctuation" style="color:#393A34">/&gt;</span><span class="token plain"></span><br></span><span class="token-line" style="color:#393A34"><span class="token plain">  </span><span class="token tag punctuation" style="color:#393A34">&lt;/</span><span class="token tag" style="color:#00009f">a</span><span class="token tag punctuation" style="color:#393A34">&gt;</span><span class="token plain"></span><br></span><span class="token-line" style="color:#393A34"><span class="token plain"></span><span class="token tag punctuation" style="color:#393A34">&lt;/</span><span class="token tag" style="color:#00009f">div</span><span class="token tag punctuation" style="color:#393A34">&gt;</span><br></span></code></pre><button type="button" aria-label="Скопировать в буфер обмена" class="copyButton_M3SB clean-btn">Скопировать</button></div></div><p>Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по
умолчанию пользователь будет перенаправлен на другую страницу. Запрети это
поведение по умолчанию.</p><h3 class="anchor anchorWithHideOnScrollNavbar_3ly5" id="закрытие-с-клавиатуры">Закрытие с клавиатуры<a class="hash-link" href="#закрытие-с-клавиатуры" title="Прямая ссылка на этот заголовок">​</a></h3><div class="admonition admonition-caution alert alert--warning"><div class="admonition-heading"><h5><span class="admonition-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg></span>Внимание</h5></div><div class="admonition-content"><p>Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной
практикой.</p></div></div><p>Добавь закрытие модального окна по нажатию клавиши <code>Escape</code>. Сделай так, чтобы
прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки
<a href="https://basiclightbox.electerious.com/" target="_blank" rel="noopener noreferrer">basicLightbox</a> есть метод для
программного закрытия модального окна.</p><h2 class="anchor anchorWithHideOnScrollNavbar_3ly5" id="задание-2---библиотека-simplelightbox">Задание 2 - библиотека <code>SimpleLightbox</code><a class="hash-link" href="#задание-2---библиотека-simplelightbox" title="Прямая ссылка на этот заголовок">​</a></h2><p>Сделай такую же галерею как в первом задании, но используя библиотеку
<a href="https://simplelightbox.com/" target="_blank" rel="noopener noreferrer">SimpleLightbox</a>, которая возьмет на себя обработку
кликов по изображениям, открытие и закрытие модального окна, а также
пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы
галереи с подключенной библиотекой.</p><div style="margin-bottom:20px;width:640px;height:360px"></div><p>Необходимо немного изменить разметку карточки галереи, используй этот шаблон.</p><div class="codeBlockContainer_J+bg language-html theme-code-block"><div class="codeBlockContent_csEI html"><pre tabindex="0" class="prism-code language-html codeBlock_rtdJ thin-scrollbar" style="color:#393A34;background-color:#f6f8fa"><code class="codeBlockLines_1zSZ"><span class="token-line" style="color:#393A34"><span class="token tag punctuation" style="color:#393A34">&lt;</span><span class="token tag" style="color:#00009f">a</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">class</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">gallery__item</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">href</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">large-image.jpg</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag punctuation" style="color:#393A34">&gt;</span><span class="token plain"></span><br></span><span class="token-line" style="color:#393A34"><span class="token plain">  </span><span class="token tag punctuation" style="color:#393A34">&lt;</span><span class="token tag" style="color:#00009f">img</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">class</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">gallery__image</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">src</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">small-image.jpg</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"> </span><span class="token tag attr-name" style="color:#00a4db">alt</span><span class="token tag attr-value punctuation attr-equals" style="color:#393A34">=</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag attr-value" style="color:#e3116c">Image description</span><span class="token tag attr-value punctuation" style="color:#393A34">&quot;</span><span class="token tag" style="color:#00009f"> </span><span class="token tag punctuation" style="color:#393A34">/&gt;</span><span class="token plain"></span><br></span><span class="token-line" style="color:#393A34"><span class="token plain"></span><span class="token tag punctuation" style="color:#393A34">&lt;/</span><span class="token tag" style="color:#00009f">a</span><span class="token tag punctuation" style="color:#393A34">&gt;</span><br></span></code></pre><button type="button" aria-label="Скопировать в буфер обмена" class="copyButton_M3SB clean-btn">Скопировать</button></div></div><p>Выполняй это задание в файлах <code>02-lightbox.html</code> и <code>02-lightbox.js</code>. Разбей его
на несколько подзадач:</p><ol><li>Создание и рендер разметки по массиву данных <code>galleryItems</code> и
предоставленному шаблону элемента галереи. Используй готовый код из первого
задания.</li><li>Подключение скрипта и стилей библиотеки используя
<a href="https://cdnjs.com/libraries/simplelightbox" target="_blank" rel="noopener noreferrer">CDN сервис cdnjs</a>. Необходимо
добавить ссылки на два файла: <code>simple-lightbox.min.js</code> и
<code>simple-lightbox.min.css</code>.</li><li>Инициализация библиотеки после того как элементы галереи созданы и добавлены
в <code>div.gallery</code>. Для этого ознакомься с документацией
<a href="https://simplelightbox.com/" target="_blank" rel="noopener noreferrer">SimpleLightbox</a> - в первую очередь секции
«Usage» и «Markup».</li><li>Посмотри в документации секцию «Options» и добавь отображение подписей к
изображениям из атрибута <code>alt</code>. Пусть подпись будет снизу и появляется через
250 миллисекунд после открытия изображения.</li></ol></div></article><nav class="pagination-nav docusaurus-mt-lg" aria-label="Навигация по странице документации"><div class="pagination-nav__item"></div><div class="pagination-nav__item pagination-nav__item--next"></div></nav></div></div></div></div></main></div></div></div>
<script src="/textbooks/lms-js-homework/v2/assets/js/runtime~main.af6491b1.js"></script>
<script src="/textbooks/lms-js-homework/v2/assets/js/main.031a7803.js.pagespeed.ce.6QDhMHORRD.js"></script>
</body>
</html>
