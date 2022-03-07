import puppy from "./../images/puppy.jpeg";
import blue_green from "./../images/blog_page/blue_green.jpeg";
import mountain3 from "./../images/blog_page/mountain3.jpeg";
import purple_triangle from "./../images/blog_page/purple_triangle.jpeg";

function Blog() {
  let blogArticles = [
    {
      title: "From Teacher of Many to Teacher of One",
      image: mountain3,
      link: "https://dev.to/bredmond1019/from-teacher-of-many-to-teacher-of-one-tips-on-how-to-be-a-self-taught-194p",
      description: "A Teacher's Tips on Being a Self-Taught Learner",
    },
    {
      title: "Flask API Basics",
      image: blue_green,
      link: "https://dev.to/bredmond1019/getting-started-with-flask-7de",
      description: "React, GraphQL, Flask App -- Part 1",
    },
    {
      title: "Flask Application Factory",
      image: purple_triangle,
      link: "https://dev.to/bredmond1019/flask-application-factory-1j81",
      description: "React, GraphQL, Flask App -- Part 2",
    },
    {
      title: "Flask & GraphQL",
      image: mountain3,
      link: "",
      description: "React, GraphQL, Flask App -- Part 3 COMING SOON!",
    },
  ];

  return (
    <div id="blog" className="blog-page-wrapper">
      <div className="blog-main-page">
        <div className="blog-main-title-wrapper">
          <h1 className="blog-main-title">Welcome to my blog</h1>
        </div>
        <div className="blog-articles-wrapper">
          <div className="blog-articles-info-wrapper">
            {blogArticles.map((article, i) => {
              return (
                <div className="blog-article-box-wrapper">
                  <div className="blog-article-image-wrapper">
                    <img src={article.image} alt="" className="blog-article-image" />
                  </div>
                  <a className="blog-link" href={article.link}>
                    <div className="blog-info-wrapper">
                      <h1 className="blog-article-title">{article.title}</h1>
                      <p className="blog-article-description">{article.description}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="side-panel"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
