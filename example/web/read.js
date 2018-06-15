var rows;
$(function() {
	
	let id = getUrlParameter("id");
    eos.getTableRows({json:true, scope: account, code: contract,  table: 'blog', limit:1, lower_bound: id}).then(res => {
		let row = res.rows[0];
		
		$("h1").text(row.title);
		$("div.author").text(row.author);
		$("div.body").html(row.html);
    });

});

function getUrlParameter(x) {
    return new URL(window.location.href).searchParams.get(x);
}
