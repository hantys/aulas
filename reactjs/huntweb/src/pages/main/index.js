import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from "react-router-dom";
import Loading from '../../componentes/Loading';

import './style.css'

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
    loading: true,
  }
  componentDidMount(){
    setTimeout(() => {
      this.loadProduct();
    }, 1000);
  }

  loadProduct = async (page = 1) => {
    this.setState({loading: true})
    try {
        const response = await api.get(`/products?page=${page}`);
        const {docs, ...productInfo} = response.data;
        
        this.setState({products: docs, productInfo, page});
    } catch (error) {
      alert('Erro na requisição');
    }
    this.setState({loading: false})
  };
  
  prevPage = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;
    
    this.loadProduct(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;
    
    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProduct(pageNumber);
  };

  render(){
    const {products, page, productInfo, loading} = this.state
    return (
      <div className='product-list'>
        <div className='actions'>
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
        </div>
        {loading ? <Loading /> : false}
        
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className='actions'>
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
        </div>
      </div>  
    )
  }
}