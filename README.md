# SmartGrid-Documentation
<p>Документация по библиотеке SmartGrid на русском языке.</p>
<p>Автор библиотеки - <a href="https://github.com/dmitry-lavrik" target="_blank">Дмитрий Лаврик</a></p>

<h2>Установка</h2>
<p>$ npm i smart-grid --save-dev</p>
<ul>
  <li>Создайте файл с названием smartgrid.js со следующей конфигурацией</li>
</ul>
<code>
  const smartgrid = require('smart-grid');

const settings = {
	columns: 12,
	offset: '10px',
	container: {
        maxWidth: "960px",
		fields: "15px"
    },
	breakPoints: {
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
};

smartgrid('./src/precss', settings);
</code>
