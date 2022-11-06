import React, { Component } from 'react'
import Spinner from '../Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
    
    static defaultProps = {
        country: 'us',
        pageSize: 10, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }
       
     constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            
        }
    }
    async componentDidMount(){
        try{        
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=688d128d5c1a4cfab211152327273e03&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading:true });
            const res = await fetch(url);
            const data = await res.json();
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loading:false
            });
        }
        
        catch(e) {
            console.log("something is not working");
            
        }
    } 
    handlePrevClick = async()=>{     
       
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=688d128d5c1a4cfab211152327273e03&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true });
            let data = await fetch(url);
            let parsedData = await data.json()
            //console.log(parsedData);  
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading:false
            })
    }
    handleNextClick = async()=>{
        if(!(this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize));
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=688d128d5c1a4cfab211152327273e03&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true });
        let data = await fetch(url);
        let parsedData = await data.json()
        //console.log(parsedData);  
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
    }
  render() {
    return (
        
        <div className="container my-3">
            <h1 className="text-center" style={{margin: '35px 0px'}}>Newslatter - top headding</h1>
            <div className="container my-3 d-flex justify-content-between">
                <button type="button" disabled ={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-primary ">&#8249; Previous</button>
                <button type="button" disabled= {(this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-primary">Next &#8250;</button>
            </div>
           {this.state.loading && <Spinner/>}
            <div className="row" >
                {!this.state.loading && this.state.articles.map((element) => {
                    return <div className="col-md-4" key ={ element.url}>
                        <NewsItem title = {element.title} 
                        discription ={element.description?element.description.slice(0, 88):""} 
                        imageUrl={element.urlToImage} newsUrl = {element.url}/>
                    </div>  
                })}  
            </div>  
            <div className="container my-3 d-flex justify-content-between">
                <button type="button" disabled ={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-primary ">&#8249; Previous</button>
                <button type="button" disabled= {(this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-primary">Next &#8250;</button>
            </div>
      </div>
    )
  }
}

export default News