import React, {Component} from 'react';
// import propTypes from 'prop-types';

export default class Feedback extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="feedback">
                <h2 className="visually_hidden">Это интересно</h2>

                <article className="blog">
                    <h3 className="visually_hidden">Наш блог</h3>
                    <p className="blog_news">Новое в нашем блоге</p>
                    <a href="http://ksv3d.ru" className="blog_post">10 способов сервировки
                        фруктовых щербетов к
                        столу</a>
                </article>

                <div className="sign_for_spam_wrapper">
                    <form className="sign_for_spam" action="https://echo.htmlacademy.ru" method="get">
                        <p>Подпишитесь на нашу сладкую рассылку и будете всегда в курсе
                            всего самого вкусного, что у нас происходит. Обещаем не
                            спамить и не слать всякой ненужной ерунды. Честно =) </p>
                        <input type="email" name="e_mail" id="e_mail" placeholder="Электронная почта"/>
                        <button type="submit" className="button_small btn_submit">Отправить</button>
                    </form>
                </div>
            </section>
        );
    }
}
