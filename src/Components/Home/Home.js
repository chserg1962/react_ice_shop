import React, {Component} from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Footer from '../Footer/Footer';
import Banners from '../banners/banners';
import Hits from '../Hits/Hits';
import About from '../About/About';
import Feedback from '../Feedback/Feedback';
import Contacts from '../Contacts/Contacts';
import Slider from '../Slider/Slider';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div className="site_wrapper">
                <HeaderMain/>
                <main>
                    <div className="index container">
                        <h1 className="visually_hidden">Магазин мороженого Глэйси</h1>
                        <Slider/>
                        <Banners/>
                        <Hits/>
                        <About/>
                        <Feedback/>
                        <Contacts/>
                        <Footer/>
                    </div>

                </main>
            </div>
        );
    }
}

