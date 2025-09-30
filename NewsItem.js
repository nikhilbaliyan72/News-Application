import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author , date ,source } = this.props;

    return (
      <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}
   
  </span>
        <img src={!imageUrl?"https://cst.brightspotcdn.com/dims4/default/19b991e/2147483647/strip/true/crop/8192x4676+0+394/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ffd%2F6e%2F28f626f2497c8af785425e32eb8b%2Fdw5a6212.jpg":imageUrl} className="card-img-top" alt="news" />
        <div className="card-body">
          <h4 className="card-title">{title} </h4>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author?"unknown":author}  on {new Date(date).toGMTString()}</small></p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
 