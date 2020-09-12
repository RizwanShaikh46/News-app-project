import React from 'react'
import img from '../asset/btn_google_1.png'
import './LoginPage.css'

const LoginPage = props => {
    return (
        <>
            <article className="b--black-20 ba">
                <nav className="db dt-l w-100 border-box pa3 ph5-l">
                    <h2 className="db dtc-l v-mid mid-gray w-100 w-25-l tc tl-l mb2 mb0-l" >
                        News App
                    </h2>
                </nav>
            </article>
            <section className="tc pa3 pa5-ns">
                <article className="hide-child relative ba b--black-20 mw6 center container">
                    <img src={img}
                        onClick={props.onbuttonClick}
                        alt="signin_button"
                        className="btn"
                    />
                </article>
            </section>
        </>
    )
}

export default LoginPage