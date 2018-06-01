var lol;
function submit(event) {
    event.preventDefault();

	let author = $("input[name=author]").val();
	let title = $("input[name=title]").val();
    let html = $('textarea').val();
	
        eos.transaction({
            actions: [
                {
                    account: account,
                    name: 'addblog',
                    authorization: [{
                    	actor: author,
                    	permission: 'active'
                	}],
                data: {
                    author: author,
                    title: title,
                    html: html
                }
                }
            ]
        }).then(x => {
			eos.getTableRows({json:true, scope: account, code: contract,  table: 'blog', limit:100}).then(res => {
				let row = res.rows.pop();

				window.location = 'read.html?id=' + row.id;
		    });
			

        });
   
};

$(function() {
    $('form').submit(submit);
});
