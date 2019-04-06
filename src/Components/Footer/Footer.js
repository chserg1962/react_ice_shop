import React, {Component} from 'react';

import './Footer.css';
import logoAcademy from '../../img/general_images/logo-htmlacademy.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>

                <div className="footer_main">
                    <ul className="social">
                        <li><a className="social_btn" href="ksv3d.ru">
                            <svg version="1.1" x="0px" y="0px" width="32px"
                                height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
                                <g/>
                                <g>
                                    <path className="icon" fill="#FFFFFF" d="M16,0C7.164,0,0,7.164,0,16c0,8.837,7.164,16,16,16c8.837,0,16-7.163,16-16C32,7.164,24.837,0,16,0z
		 M23.944,12.809c-0.251,6.516-3.463,10.832-10.992,10.702c-0.14,0-0.205,0-0.233,0c-0.015,0-0.021,0-0.021,0
		c-0.029,0-0.094,0-0.232,0c-0.447,0-4.543-0.443-5.344-1.823c2.479,0.19,4.247-0.406,5.12-1.136
		c-1.048-0.289-2.923-0.461-3.251-2.848c0.384,0.104,0.618,0.221,1.299,0.113c-1.307-0.824-2.758-1.519-2.679-3.643
		c0.311,0.317,1.164,0.518,1.46,0.457c-0.768-0.233-2.149-3.244-0.974-4.781c1.984,1.79,4.075,3.482,7.804,3.643
		c0.227-2.214,1.24-3.699,3.168-4.325c1.84-0.479,3.255,0.26,3.901,1.138c0.737-0.224,1.453-0.466,2.193-0.685
		c-0.004,0.833-0.569,1.463-0.935,1.709c0.747,0.165,1.423-0.475,1.423-0.475C25.467,11.818,24.557,12.58,23.944,12.809z"/>
                                </g>
                            </svg>
                        </a></li>
                        <li><a className="social_btn" href="ksv3d.ru">
                            <svg x="0px" y="0px"
                                width="32px" height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32"
                                xmlSpace="preserve">
                                <g>
                                    <path className="icon" fill="#FFFFFF" d="M20.916,16c0,2.728-2.211,4.938-4.938,4.938S11.039,18.728,11.039,16c0-0.394,0.051-0.773,0.138-1.14
		h-0.897v6.838h11.396V14.86h-0.897C20.865,15.227,20.916,15.606,20.916,16z"/>
                                    <path className="icon" fill="#FFFFFF" d="M15.978,18.659c1.466,0,2.659-1.193,2.659-2.659s-1.193-2.659-2.659-2.659
		c-1.466,0-2.659,1.193-2.659,2.659S14.511,18.659,15.978,18.659z"/>
                                    <rect className="icon" x="18.637" y="10.302" fill="#FFFFFF" width="3.039" height="3.039"/>
                                    <path className="icon" fill="#FFFFFF" d="M16,0C7.164,0,0,7.164,0,16c0,8.837,7.164,16,16,16c8.837,0,16-7.163,16-16C32,7.164,24.837,0,16,0z
		 M23.955,21.698c0,1.254-1.025,2.279-2.279,2.279H10.279C9.026,23.978,8,22.952,8,21.698V10.302c0-1.253,1.026-2.279,2.279-2.279
		h11.396c1.254,0,2.279,1.026,2.279,2.279V21.698z"/>
                                </g>
                            </svg>
                        </a></li>
                        <li><a className="social_btn" href="ksv3d.ru">
                            <svg version="1.1" x="0px" y="0px"
                                width="32px" height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32"
                                xmlSpace="preserve">
                                <path className="icon" fill="#FFFFFF" d="M16,0C7.164,0,0,7.163,0,16s7.164,16,16,16c8.837,0,16-7.164,16-16S24.837,0,16,0z M20.062,9.455h-3.021
	v3.444h3.021v3.445h-3.021v8.61h-3.021v-8.61H11v-3.445h3.021V9.455c0-1.902,1.353-3.445,3.021-3.445h3.021V9.455z"/>
                            </svg>
                        </a></li>
                        <li><a className="social_btn" href="ksv3d.ru">
                            <svg version="1.1" width="32px" height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32"
                                xmlSpace="preserve">
                                <g>
                                    <path className="icon" fill="#FFFFFF" d="M16.637,14.495c0.402-0.019,0.719-0.082,0.951-0.188c0.326-0.145,0.54-0.33,0.641-0.559
		c0.101-0.229,0.15-0.496,0.15-0.797c0-0.232-0.058-0.465-0.174-0.697c-0.116-0.232-0.322-0.405-0.617-0.517
		c-0.264-0.1-0.592-0.155-0.984-0.165c-0.392-0.009-0.943-0.014-1.652-0.014h-0.339v2.965h0.565
		C15.749,14.523,16.235,14.514,16.637,14.495z"/>
                                    <path className="icon" fill="#FFFFFF" d="M18.118,17.084c-0.282-0.081-0.672-0.125-1.166-0.132c-0.494-0.006-1.012-0.009-1.55-0.009h-0.79v3.493
		h0.264c1.014,0,1.74-0.003,2.18-0.009c0.438-0.007,0.843-0.088,1.212-0.245c0.377-0.157,0.633-0.364,0.774-0.625
		s0.214-0.562,0.214-0.9c0-0.446-0.088-0.788-0.261-1.03C18.825,17.386,18.531,17.204,18.118,17.084z"/>
                                    <path className="icon" fill="#FFFFFF" d="M16,0C7.164,0,0,7.164,0,16c0,8.837,7.164,16,16,16c8.837,0,16-7.163,16-16C32,7.164,24.837,0,16,0z
		 M22.602,20.531c-0.273,0.533-0.646,0.976-1.124,1.327c-0.552,0.415-1.161,0.71-1.823,0.886s-1.501,0.264-2.519,0.264h-6.121V8.987
		h5.443c1.13,0,1.957,0.038,2.48,0.113c0.524,0.076,1.045,0.242,1.561,0.5c0.533,0.27,0.929,0.632,1.189,1.087
		c0.26,0.455,0.392,0.975,0.392,1.558c0,0.678-0.179,1.278-0.536,1.795c-0.358,0.518-0.863,0.92-1.517,1.208v0.075
		c0.917,0.182,1.642,0.559,2.179,1.13c0.537,0.571,0.807,1.325,0.807,2.261C23.013,19.392,22.875,19.997,22.602,20.531z"/>
                                </g>
                            </svg>
                        </a></li>
                    </ul>

                    <ul className="footer_menu">
                        <li><a className="for_partners" href="ksv3d.ru">Для поставщиков</a></li>
                        <li><a href="ksv3d.ru">Наши документы</a></li>
                        <li><a href="ksv3d.ru">О производстве</a></li>
                        <li><a href="ksv3d.ru">Экологические стандарты</a></li>
                    </ul>

                    <div className="footer_academy">
                        <a href="https://htmlacademy.ru/intensive/htmlcss"><img src={logoAcademy}
                            width="108"
                            height="37" alt="HTML Academy"/> </a>
                        <p>Сделано в <a href="https://htmlacademy.ru/intensive/htmlcss" className="academy">HTML Academy</a> © 2019
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

