import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../Footer/Footer';
import Filters from '../Filters/Filters';
import Goods from '../Goods/Goods';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="catalog_wrapper">
                <Header/>
                <main className="catalog container">
                    <h1>Сливочное мороженое</h1>
                    <Filters/>
                    <Goods/>
                </main>
                <Footer/>
            </div>
        );
    }
}

Catalog.propTypes = {};

export default Catalog;

