import Effects_common_class from '../abstract/css.js';

class Effects_brightness_class extends Effects_common_class {

	brightness() {
		var params = [
			{name: "value", title: "Percentage:", value: 50, range: [-100, 100]},
		];
		this.show_dialog('brightness', params);
	}

	convert_value(value) {
		var system_value;
		if (value > 0) {
			system_value = value / 100 + 1;
		}
		else if (value < 0) {
			system_value = value / 100 + 1;
		}
		else {
			system_value = 1;
		}

		return system_value;
	}

	demo(canvas_id, canvas_thumb){
		var canvas = document.getElementById(canvas_id);
		var ctx = canvas.getContext("2d");

		//draw
		var size = this.convert_value(30, null, 'preview');
		ctx.filter = "brightness("+size+")";
		ctx.drawImage(canvas_thumb, 0, 0);
		ctx.filter = 'none';
	}

	render_pre(ctx, data) {
		var value = this.convert_value(data.params.value, data.params, 'save');
		var filter = 'brightness(' + value + ')';

		if(ctx.filter == 'none')
			ctx.filter = filter;
		else
			ctx.filter += ' ' + filter;
	}

	render_post(ctx, data){
		ctx.filter = 'none';
	}

}

export default Effects_brightness_class;