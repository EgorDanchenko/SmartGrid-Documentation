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