// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const BlogApi = {
    blogs: [
        { number: 1, title: "Blog 1", post: "Blog 1 post" },
        { number: 2, title: "Blog 2", post: "Blog 2 post" },
        { number: 3, title: "Blog 3", post: "Blog 3 post" },
        { number: 4, title: "Blog 4", post: "Blog 4 post" },
        { number: 5, title: "Blog 5", post: "Blog 5 post" },
        { number: 6, title: "Blog 6", post: "Blog 6 post" }
    ],
    all: function() { return this.blogs},
    get: function(id) {
        const isBlog = p => p.number === id
        return this.blogs.find(isBlog)
    }
}

export default BlogApi