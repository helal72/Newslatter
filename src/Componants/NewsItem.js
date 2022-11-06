import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title,discription,imageUrl,newsUrl}= this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageUrl?imageUrl:"https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F23db4ea7-bce2-4b82-8d93-7c8581af6bd6%2FPA_17082020_P_11_1.jpg?rect=37%2C0%2C1293%2C679&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=https%3A%2F%2Fimages.prothomalo.com%2Fprothomalo-bangla%2F2022-01%2F18c58c05-9e66-46f3-8946-4437460f8f90%2FBanner_7814X143.jpg&overlay_position=bottom&overlay_width_pct=1"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}...</p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
