#include <eosiolib/eosio.hpp>

using namespace eosio;
using namespace std;

class example: public contract {
	public:
		
	example(account_name self): contract::contract(self), blogs(_self, _self){}
	
	void addblog(account_name author, string title, string html) {
		require_auth(author);
		
		blogs.emplace(_self, [&](auto& blog) {
			blog.id = blogs.available_primary_key();
			blog.author = author;
		    blog.title = title;
			blog.html = html;
        });
	}
	
	void removeblog(account_name sender, uint64_t id) {
		require_auth(sender);
		auto itr = blogs.find(id);
		eosio_assert(itr != blogs.end(), "Invalid blog id");
		eosio_assert(itr->author == sender, "Only author can remove blog");
		blogs.erase(itr);
	}
	
	// @abi table
	struct blog {
	    uint64_t id;
	    account_name author;
	    string title;
	    string html;

	    uint64_t primary_key()const { return id; }
        account_name by_author() const { return author; }
	    EOSLIB_SERIALIZE(blog, (id)(author)(title)(html))
	};
	typedef multi_index<N(blog), blog,
	    indexed_by< N(author), const_mem_fun<blog, account_name, &blog::by_author>>
	> blog_index;
	blog_index blogs;
};

EOSIO_ABI(example, (addblog)(removeblog))