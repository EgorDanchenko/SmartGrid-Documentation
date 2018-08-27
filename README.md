# SmartGrid-Documentation
<p>Не большая Документация по библиотеке SmartGrid на русском языке.</p>
<p>Автор библиотеки - <a href="https://github.com/dmitry-lavrik" target="_blank">Дмитрий Лаврик</a></p>

<h2>Установка</h2>
<p>$ npm i smart-grid --save-dev</p>
<ul>
  <li>Создайте файл с названием smartgrid.js со следующей конфигурацией</li>
</ul>
<pre><code>
const smartgrid = require('smart-grid');

	const settings = {
		filename: "smart-grid", /* Название файла */
		outputStyle: 'less', /* Препроцессор */
		columns: 12, /* Число колонок */
		offset: '30px', /* Ширина колонки */
		mobileFirst: false, 
		container: {
		maxWidth: "960px", /* Ширина сетки */
		fields: "15px" /* Отступы от краёв телефона. Мертвая зона. */
	    },
		breakPoints: { /* Здесь можно добавлять свои брейкпоинты. Главное не забывать перезапускать файл */
		md: {
		    width: "992px",
		    fields: "15px"
		},
		sm: {
		    width: "720px",
		    fields: "10px"
		},
		xs: {
		    width: "576px",
		    fields: "5px"
		}
	    },
	    mixinNames: {
		container: "wrapper", /* Название Функций SmartGrid.*/
		row: "row-flex",
		rowFloat: "row-float",
		rowInlineBlock: "row-ib",
		rowOffsets: "row-offsets",
		column: "col",
		size: "size",
		columnFloat: "col-float",
		columnInlineBlock: "col-ib",
		columnPadding: "col-padding",
		columnOffsets: "col-offsets",
		shift: "shift",
		from: "from",
		to: "to",
		fromTo: "from-to",
		reset: "reset",
		clearfix: "clearfix",
		debug: "debug",
		uRowFlex: "u-row-flex",
		uColumn: "u-col",
		uSize: "u-size"
    },
};

smartgrid('./src/precss', settings);
</code></pre>
<ul>
	<li>Запускаем файл с кодом</li>
	<li><h3>node smart-grid.js</h3></li>
</ul>
<h2>Использование SmartGrid</h2>
<p>С начала нам нужно настроить контейнер с сеткой</p>
<pre>
<code>
	.container {
		.wrapper();
	}
</code>
</pre>
<p>В контейнере мы создаём элементы по сетке</p>
<pre><code>
	.parent {
		.row-flex(); /* .row-float() */
	}
	.child {
		.col(); /* Ставим элемент по колонке. .col-float() */
		.size(4); /* Задаём размер элементу. На десктопе элементы будут занимать по 4 колонки */
		.size-md(6); /* На планшете по 6 */
		.size-sm(10); /* На телефоне по 10 */
		.size-xs(12); /* На телефоне с маленьким экраном по 12 */
	}
</code>
</pre>
<h2>Полезные функции</h2>
<ul>
<li>.shift-left</li>/* Отступ слева */
<li>.shift-md-left</li>/* Отступ справа на планшете */
<li>.md-block({
	font-size: 25px;
})</li> /* CSS свойства на md разрешении. */
<li>.reset()</li>/* Cбрасывает стили браузера. Вставьте в начало кода препроцессора */
</ul>
<h2>Показать сетку на экране</h2>
<pre><code>
	<h3>CSS</h3>
	/* Создадим отображение сетки */
	.debug {
		.debug(rgba(0,0,0,0.5), 1px solid red);
	}
	<h3>HTML</h3>
	<div class="debug">
		<div>
			<div>
				<!--Колонки. Если колонок 12, то дивов будет тоже 12 -->
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</code>
