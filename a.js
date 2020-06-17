$(document).ready(function(){
		$('#bsobre').click(function(){
			$('#sobre').css("display", "block").addClass('ativo')
			$('#profes').css("display", "none")
			});

		$('#bprofes').click(function(){
			$('#profes').css("display", "block")
			$('#sobre').css("display", "none")
			});

		$("#menu").hover(function(){
			$("#aaa, .menu").animate({width: "200px"},500)},
			function(){
			$("#aaa, .menu").animate({width: "100%"},500)});
		$(".menu").hover(function(){
				$(this).animate({textIndent:"8px", width:"200px", fontSize: "16px",},500)},
				function(){
				$(this).animate({textIndent:"0px", width:"100%", fontSize: "14px"},500)});
			
		$("#tsobre").click(function(){
			$("#psobre").toggle()
		})
		$("#tcampo").click(function(){
			$("#pcampo").toggle()
		})
		$("#tperfil").click(function(){
			$("#pperfil").toggle()
		})
		$("#tmerc").click(function(){
			$("#pmerc").toggle()
		})
		$("#tdur").click(function(){
			$("#pdur").toggle()
		})					
})