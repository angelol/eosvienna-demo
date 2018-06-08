var rows;
$(function() {
	
	let id = getUrlParameter("id");
    eos.getTableRows({json:true, scope: account, code: contract,  table: 'blog', limit:100}).then(res => {
		let row = res.rows.filter(x => x.id == id)[0];
		
		$("h1").text(row.title);
		$("div.author").text(row.author);
		$("div.body").text(row.html);
    });

});

function getUrlParameter(x) {
    return new URL(window.location.href).searchParams.get(x);
}
