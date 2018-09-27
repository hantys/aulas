import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from "react-router-dom";
import './style.css' ;
import Loading from '../../componentes/Loading';

export default class Product extends Component {
  state = {
    product: {},
    loading: true,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/products/${id}`);

    this.setState({product: response.data, loading: false});

  }

  render() {
    const { product, loading } = this.state;

    return(
      <div className="product-info">
        {loading ? <Loading /> : false}
        <h1>{ product.title }</h1>
        <p>{ product.description }</p>

        <p>
          URL: <a href={ product.url }>{ product.url }</a>
        </p>
        <spam>
          <Link to="/">Voltar</Link>
        </spam>
      </div>
    );
  }
}